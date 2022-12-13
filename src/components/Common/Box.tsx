import {View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  flex?: number;
};

const Box = (props: Props) => {
  const styles = {
    flex: props.flex,
  };
  return <View style={styles}>{props.children}</View>;
};

export default Box;
