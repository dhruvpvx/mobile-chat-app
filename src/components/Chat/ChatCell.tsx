import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RoundImage} from '@components';
import {useNavigation} from '@react-navigation/native';
import {UserState} from '@store/Slices/UserSlice';
import {AppFonts} from '@res';

const ChatCell = (props: UserState) => {
  const navigation = useNavigation<any>();

  const onPress = () => {
    navigation.navigate('ChatScene', props);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <RoundImage size={20} source={{uri: props.image_url}} />
      <View style={styles.userDetailsContainer}>
        <Text style={AppFonts.semiBold(16)}>{props.name}</Text>
        <Text style={AppFonts.semiBold(16)}>{props.lastMessage.message}</Text>
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
