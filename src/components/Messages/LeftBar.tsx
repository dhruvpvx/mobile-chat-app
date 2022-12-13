import {Text, View} from 'react-native';
import React from 'react';
import {useStylesheet} from '@hooks';
import {AppFonts, AppSvg} from '@res';
import {MessageType} from '@local-types';

const LeftBar = (props: MessageType) => {
  const styles = useStylesheet('leftBar');
  return (
    <View style={styles.container}>
      <AppSvg.MessageTip left />
      <View style={styles.messageBarLeft}>
        <Text selectable style={AppFonts.medium(15)}>
          {props.message}
        </Text>
      </View>
    </View>
  );
};

export default LeftBar;
