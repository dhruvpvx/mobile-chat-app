import React from 'react';
import * as CC from '@components';
import {MessageType} from '@local-types';
import {UserState} from '@store/Slices/UserSlice';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
type Props = {
  route: {
    params: UserState;
  };
};

const ChatScene = (props: Props) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const otherUserId = props.route.params.id;
  const userId = auth().currentUser?.uid;

  const onSend = (text: string) => {
    const isClear = text.trim().toLowerCase().startsWith('clear');
    if (isClear) {
      database().ref(`messages/${userId}/${otherUserId}`).remove();
      database().ref(`messages/${otherUserId}/${userId}`).remove();
      return setMessages([]);
    }
    const message = {
      message: text,
      createdAt: new Date(),
      sent_by: userId,
      sent_to: otherUserId,
      message_status: 'sent',
      id: database().ref().push().key,
    };
    database().ref(`messages/${userId}/${otherUserId}`).push(message);
    database().ref(`messages/${otherUserId}/${userId}`).push(message);
  };

  React.useEffect(() => {
    const onValueChange = database()
      .ref(`messages/${userId}/${otherUserId}`)
      .on('value', snapshot => {
        const fetchedData: MessageType[] = [];
        snapshot.forEach(childSnapshot => {
          fetchedData.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
          });
        });
        setMessages(fetchedData);
      });
    return () =>
      database()
        .ref(`messages/${userId}/${otherUserId}`)
        .off('value', onValueChange);
  }, [userId, otherUserId]);

  return (
    <CC.Container>
      <CC.ChatHeader {...props.route.params} />
      <CC.ChatSection messages={messages} />
      <CC.ChatInput onSend={onSend} />
    </CC.Container>
  );
};

export default ChatScene;
