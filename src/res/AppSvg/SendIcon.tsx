import * as RNSVG from 'react-native-svg';
import React from 'react';
// create a send icon like triangle telegram send arrow button type

const SendIcon = () => {
  return (
    <RNSVG.Svg width="100%" height="100%" viewBox="0 0 24 24">
      <RNSVG.Path fill="white" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
    </RNSVG.Svg>
  );
};

export default SendIcon;
