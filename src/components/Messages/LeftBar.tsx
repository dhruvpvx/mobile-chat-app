import {View} from 'react-native';
import React from 'react';
import {useStylesheet} from '@hooks';
import {AppFonts, AppSvg} from '@res';
import {MessageType} from '@local-types';
import AutoLink from '@components/Common/AutoLink';

const LeftBar = (props: MessageType) => {
  const styles = useStylesheet('leftBar');
  return (
    <View style={styles.container}>
      <AppSvg.MessageTip left />
      <View style={styles.messageBarLeft}>
        <AutoLink selectable style={AppFonts.medium(15)}>
          {props.message}
        </AutoLink>
      </View>
    </View>
  );
};

export default LeftBar;
