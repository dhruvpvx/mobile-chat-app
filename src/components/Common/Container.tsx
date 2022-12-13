import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  center?: boolean;
} & ViewProps;

const Container = (props: Props) => {
  const style = [styles.container, props.style, props.center && styles.center];
  return (
    <View style={style} {...props}>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
