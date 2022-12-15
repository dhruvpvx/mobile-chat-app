import React from 'react';
import {ChatCell, Container} from '@components';
import HomeHeader from './HomeHeader';
import db from '@react-native-firebase/database';
import {FlatList} from 'react-native';
import {UserState} from '@store/Slices/UserSlice';
import {useAppSelector} from '@store';

type Props = {};

const HomeScene = (_props: Props) => {
  const userData = useAppSelector(state => state.user);
  const [chatUsers, setChatUsers] = React.useState<UserState[]>([]);

  React.useEffect(() => {
    const onValueChange = db()
      .ref(`messages/${userData.id}`)
      .on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          Object.keys(data).forEach(key => {
            const userMessages = data[key];
            db()
              .ref(`users/${key}`)
              .once('value', userSnapshot => {
                const user = userSnapshot.val();
                if (user) {
                  const userObj = {
                    ...user,
                    id: key,
                    lastMessage: userMessages[Object.keys(userMessages)[0]],
                  };
                  setChatUsers(prev =>
                    prev.some(item => item.id === userObj.id)
                      ? prev.map(item =>
                          item.id === userObj.id ? userObj : item,
                        )
                      : [...prev, userObj],
                  );
                }
              });
          });
        }
      });

    return () =>
      db().ref(`messages/${userData.id}`).off('value', onValueChange);
  }, [userData]);

  return (
    <Container>
      <HomeHeader />
      <FlatList
        data={chatUsers}
        renderItem={({item}) => <ChatCell {...item} />}
      />
    </Container>
  );
};

export default HomeScene;
