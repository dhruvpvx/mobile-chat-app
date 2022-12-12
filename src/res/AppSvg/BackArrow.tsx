import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as RNSvg from 'react-native-svg';
type Props = {
  onPress?: () => void;
};

const BackArrow = (_props: Props) => {
  return (
    <TouchableOpacity onPress={_props.onPress} style={styles.container}>
      <RNSvg.Svg width="100%" height="100%" viewBox="0 0 24 24">
        <RNSvg.Path
          fill="black"
          d="M15.41,16.09L10.83,11.5L15.41,6.91L14,5.5L8,11.5L14,17.5L15.41,16.09Z"
        />
      </RNSvg.Svg>
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    width: '12%',
    height: '100%',
  },
});
