// create a message tip we see on the left side of the message bar
//
import * as RNSVG from 'react-native-svg';
import React from 'react';
import AppColors from '@res/AppColors';

const MessageTip = ({left}: {left?: boolean}) => {
  const color = left ? AppColors.BLUISH_GREY : AppColors.LIGHT_GREEEN;
  return (
    <RNSVG.Svg width="20" height="20" viewBox="0 0 10 10" fill="none">
      <RNSVG.Path
        d="M 0 0 L 0 10 L 10 5 Z"
        fill={color}
        transform={left ? 'rotate(180 5 5)' : 'rotate(0 5 5)'}
        stroke={color}
        strokeWidth="1"
      />
    </RNSVG.Svg>
  );
};

export default MessageTip;
