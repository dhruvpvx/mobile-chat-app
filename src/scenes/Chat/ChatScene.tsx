import React from 'react';
import * as CC from '@components';
import {MessageType} from '@local-types';

type Props = {};

const ChatScene = (_props: Props) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  const onSend = (text: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        left: text.length % 2 === 0,
        message: text,
        sent_at: new Date(),
      },
    ]);
  };
  return (
    <CC.Container>
      <CC.ChatHeader />
      <CC.ChatSection messages={messages} />
      <CC.ChatInput onSend={onSend} />
    </CC.Container>
  );
};

export default ChatScene;
