import {TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSvg} from '@res';
import {useStylesheet} from '@hooks';

type Props = {};

const ChatInput = (props: Props) => {
  const styles = useStylesheet('chatInput');
  const [text, setText] = React.useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="Send A Message..."
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.sendButton}>
        <AppSvg.SendIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
