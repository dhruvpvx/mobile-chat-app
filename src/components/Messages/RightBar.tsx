import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStylesheet} from '@hooks';
import {AppFonts, AppSvg} from '@res';
import {MessageType} from '@local-types';

const RightBar = ({message}: MessageType) => {
  const styles = useStylesheet('rightBar');
  return (
    <View style={styles.container}>
      <View style={styles.messageBarRight}>
        <Text selectable style={AppFonts.medium(15)}>
          {message}
        </Text>
      </View>
      <AppSvg.MessageTip />
    </View>
  );
};

export default RightBar;

const styles = StyleSheet.create({});
