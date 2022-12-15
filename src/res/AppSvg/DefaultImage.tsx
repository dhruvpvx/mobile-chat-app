import {Container} from '@components';
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function DefaultImage(props: SvgProps) {
  return (
    <Container center>
      <Svg
        viewBox="0 0 128.000000 128.000000"
        width={'80%'}
        height={'80%'}
        {...props}>
        <Path
          fill="#000"
          d="M482 1150C203 1077 0 818 0 535c0-117 47-269 112-364l31-44 12 37c27 78 105 148 214 192l54 22 51-33c103-65 224-67 327-3 55 33 62 33 152-15 71-37 139-110 156-168l13-43 29 34c46 55 98 171 114 255 29 151 12 276-56 415-130 262-443 404-727 330zm260-241c157-79 198-315 78-451-99-113-241-118-345-13-211 214 8 593 267 464z"
          transform="matrix(.1 0 0 -.1 0 128)"
        />
      </Svg>
    </Container>
  );
}

export default DefaultImage;
