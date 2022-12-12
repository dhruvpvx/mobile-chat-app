import {Text, View} from 'react-native';
import React from 'react';
import {AppFonts, AppSvg} from '@res';
import {useStylesheet} from '@components/hooks';
import {RoundImage} from '@components';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ChatHeader = (_props: Props) => {
  const styles = useStylesheet('chatHeader');
  const {goBack} = useNavigation<any>();

  return (
    <View style={styles.container}>
      <AppSvg.BackArrow onPress={goBack} />
      <RoundImage size={15} source={{uri: 'https://picsum.photos/200/300'}} />
      <View style={styles.userNameContainer}>
        <Text style={AppFonts.bold(20)}>Jon Doe</Text>
      </View>
      <AppSvg.ThreeDot />
    </View>
  );
};

export default ChatHeader;
