import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path, SvgProps} from 'react-native-svg';

function BackIcon(props: SvgProps) {
  return (
    <TouchableOpacity {...props}>
      <Svg width="100%" height="100%" viewBox="0 0 256 256">
        <Path
          fill="#000"
          d="M1805 2546c-16-8-299-283-627-613l-598-598v-110l603-603C1830-25 1818-15 1893 9c57 19 87 62 87 124v52l-547 547-548 548 548 548 547 547v51c0 60-25 99-76 120-41 17-60 17-99 0z"
          transform="matrix(.1 0 0 -.1 0 256)"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default BackIcon;
