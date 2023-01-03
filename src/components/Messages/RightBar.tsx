import {Animated, View} from 'react-native';
import React from 'react';
import {useStylesheet} from '@hooks';
import {AppFonts, AppSvg} from '@res';
import {MessageType} from '@local-types';
import AutoLink from '@components/Common/AutoLink';

const RightBar = ({message}: MessageType) => {
  const styles = useStylesheet('rightBar');
  const scale = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{scaleX: scale}],
        },
      ]}>
      <View style={styles.messageBarRight}>
        <AutoLink style={AppFonts.medium(15)}>{message}</AutoLink>
      </View>
      <AppSvg.MessageTip />
    </Animated.View>
  );
};

export default RightBar;
