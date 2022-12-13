import {FlatList} from 'react-native';
import React from 'react';
import {Box, MessageBar} from '@components';
import {MessageType} from '@local-types';

type Props = {
  messages: MessageType[];
};

const ChatSection = (props: Props) => {
  const listRef = React.useRef<FlatList<MessageType>>(null);
  return (
    <Box flex={8}>
      <FlatList
        ref={listRef}
        onContentSizeChange={() =>
          listRef?.current?.scrollToEnd({animated: true})
        }
        data={props.messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MessageBar {...item} />}
      />
    </Box>
  );
};

export default ChatSection;
