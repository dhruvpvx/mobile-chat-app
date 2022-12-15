import {AppColors, AppFonts} from '@res';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

type Props = {
  children: any;
  titleStyle?: TextStyle;
  loading?: boolean;
  danger?: boolean;
} & React.ComponentProps<typeof TouchableOpacity>;

const Button = (props: Props) => {
  const style = [
    styles.btn,
    props.danger && {backgroundColor: AppColors.GOOGLE_RED},
  ];
  return (
    <TouchableOpacity {...props} style={style}>
      {props?.loading ? (
        <ActivityIndicator size="small" color={AppColors.WHITE} />
      ) : (
        <Text style={[AppFonts.bold(16, 'WHITE'), props.titleStyle]}>
          {props.children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: '70%',
    aspectRatio: 5.5,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 10,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
