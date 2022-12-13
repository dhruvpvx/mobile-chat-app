import AppColors, {ColorTypes} from './AppColors';

const AppFonts = {
  medium: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
      fontFamily: 'Nunito-Medium',
    };
  },
  regular: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
      fontFamily: 'Nunito-Regular',
    };
  },
  bold: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
      fontFamily: 'Nunito-Bold',
    };
  },
  extraBold: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
      fontFamily: 'Nunito-ExtraBold',
    };
  },
  semiBold: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
      fontFamily: 'Nunito-SemiBold',
    };
  },
};

export default AppFonts;
