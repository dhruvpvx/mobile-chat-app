import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
} & ViewProps;

const Container = (props: Props) => {
  return (
    <View style={[styles.container, props.style]} {...props}>
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
