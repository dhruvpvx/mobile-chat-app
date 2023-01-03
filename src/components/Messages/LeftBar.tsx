import {Animated, View} from 'react-native';
import React from 'react';
import {useStylesheet} from '@hooks';
import {AppFonts, AppSvg} from '@res';
import {MessageType} from '@local-types';
import AutoLink from '@components/Common/AutoLink';

const LeftBar = (props: MessageType) => {
  const styles = useStylesheet('leftBar');
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
          transform: [{scale}],
        },
      ]}>
      <AppSvg.MessageTip left />
      <View style={styles.messageBarLeft}>
        <AutoLink selectable style={AppFonts.medium(15)}>
          {props.message}
        </AutoLink>
      </View>
    </Animated.View>
  );
};

export default LeftBar;
