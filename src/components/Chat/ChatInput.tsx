import {TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSvg} from '@res';
import {useStylesheet} from '@hooks';
import {Box} from '@components';

type Props = {
  onSend: (text: string) => void;
};

const ChatInput = (props: Props) => {
  const styles = useStylesheet('chatInput');
  const [text, setText] = React.useState<string>('');

  const onSend = () => {
    props.onSend(text);
    setText('');
  };

  return (
    <Box flex={1}>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          placeholder="Send A Message..."
          onChangeText={setText}
        />
        <TouchableOpacity onPress={onSend} style={styles.sendButton}>
          <AppSvg.SendIcon />
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default ChatInput;
