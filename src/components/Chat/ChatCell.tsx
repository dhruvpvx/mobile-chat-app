import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RoundImage} from '@components';

type Props = {};

const ChatCell = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <RoundImage size={20} source={{uri: 'https://picsum.photos/200/300'}} />
      <View style={styles.userDetailsContainer}>
        <Text>Username</Text>
        <Text>Message</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCell;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 4,
    flexDirection: 'row',
  },
  userDetailsContainer: {
    width: '80%',
    paddingLeft: '2.5%',
    height: '43%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
