import React from 'react';
import {Image, StyleSheet, ImageProps, View, ViewStyle} from 'react-native';

type Props = {
  size: number;
  containerStyle?: ViewStyle;
} & ImageProps;

const RoundImage = (props: Props) => {
  const style: ViewStyle = {
    width: `${props.size}%`,
    ...props.containerStyle,
  };
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.fullWHR} {...props} />
    </View>
  );
};

export default RoundImage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWHR: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
});
