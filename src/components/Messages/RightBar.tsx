import {View} from 'react-native';
import React from 'react';
import {useStylesheet} from '@hooks';
import {AppFonts, AppSvg} from '@res';
import {MessageType} from '@local-types';
import AutoLink from '@components/Common/AutoLink';

const RightBar = ({message}: MessageType) => {
  const styles = useStylesheet('rightBar');
  return (
    <View style={styles.container}>
      <View style={styles.messageBarRight}>
        <AutoLink style={AppFonts.medium(15)}>{message}</AutoLink>
      </View>
      <AppSvg.MessageTip />
    </View>
  );
};

export default RightBar;
