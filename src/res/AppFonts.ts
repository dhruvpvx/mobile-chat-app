import AppColors, {ColorTypes} from './AppColors';

const AppFonts = {
  medium: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
    };
  },
  regular: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
    };
  },
  bold: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
    };
  },
  light: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
    };
  },
  extraBold: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
    };
  },
  semiBold: (s = 12, color: ColorTypes = 'DEFAULT_TEXT') => {
    return {
      fontSize: s,
      color: AppColors[color],
    };
  },
};

export default AppFonts;
