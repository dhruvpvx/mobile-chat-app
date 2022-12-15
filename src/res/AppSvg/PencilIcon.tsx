import AppColors from '@res/AppColors';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, SvgProps} from 'react-native-svg';

function PencilIcon(props: SvgProps) {
  return (
    <View style={styles.container}>
      <Svg width="50%" height="50%" viewBox="0 0 512 512" {...props}>
        <Path
          fill={'#FFF'}
          d="M3861 5110c-57-12-157-60-201-96-55-45-3166-3188-3178-3211C465 1773 0 138 0 112 0 59 62 0 117 0c10 0 394 108 852 239l834 240 136 134c399 393 2734 2707 2897 2871 243 243 279 305 279 476 0 89-17 155-58 230-37 69-787 823-858 864-25 14-68 33-95 41-62 19-186 27-243 15zm187-245c47-20 784-752 814-810 29-55 29-145 0-200-11-22-139-158-286-305l-266-265-512 513-513 512 265 266c170 170 279 273 305 285 49 23 142 25 193 4zm-710-938l212-212-1119-1119-1119-1119-85 169c-47 93-95 178-107 189-19 17-39 21-137 23-63 2-113 7-111 12 4 9 2241 2268 2248 2269 3 1 101-95 218-212zm800-807c-5-10-2260-2245-2268-2248-5-2-10 48-12 111-2 98-6 118-23 137-11 12-96 60-189 107l-169 85 1119 1119 1119 1119 212-212c117-117 212-215 211-218zM1085 1412l110-217 217-110 218-110V671l-52-16c-29-8-154-44-278-80l-225-64-282 282-282 282 64 225c36 124 72 249 80 278l16 52h304l110-218zM630 625c101-101 182-186 180-188-10-8-513-148-517-144-5 6 140 517 147 517 3 0 88-83 190-185z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </Svg>
    </View>
  );
}

export default PencilIcon;

const styles = StyleSheet.create({
  container: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
});
