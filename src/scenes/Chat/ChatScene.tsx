import React from 'react';
import {ChatHeader, ChatInput, Container} from '@components';
import {StyleSheet, View} from 'react-native';

type Props = {};

const ChatScene = (_props: Props) => {
  return (
    <Container>
      <View style={styles.header}>
        <ChatHeader />
      </View>
      <View style={styles.chat} />
      <View style={styles.input}>
        <ChatInput />
      </View>
    </Container>
  );
};

export default ChatScene;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  chat: {
    flex: 8,
  },
  input: {
    flex: 1,
  },
});
