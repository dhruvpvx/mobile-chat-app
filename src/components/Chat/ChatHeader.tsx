import {Text, View} from 'react-native';
import React from 'react';
import {AppFonts, AppSvg} from '@res';
import {RoundImage, Box} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useStylesheet} from '@hooks';
import {UserState} from '@store/Slices/UserSlice';

const ChatHeader = (props: UserState) => {
  const styles = useStylesheet('chatHeader');
  const {goBack} = useNavigation<any>();

  return (
    <Box flex={1}>
      <View style={styles.container}>
        <AppSvg.BackArrow onPress={goBack} />
        <RoundImage size={15} source={{uri: props.image_url}} />
        <View style={styles.userNameContainer}>
          <Text style={AppFonts.bold(20)}>{props.name}</Text>
        </View>
        <AppSvg.ThreeDot />
      </View>
    </Box>
  );
};

export default ChatHeader;
