import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type style = ViewStyle | ImageStyle | TextStyle;

type styles = {
  chatHeader: {
    container: style;
    userNameContainer: style;
    userName: style;
  };
};

const AppColors = {
  BORDER_COLOR: '#E5E5E5',
};

type keyType = keyof styles;

const useStylesheet = (key: keyType) => {
  const styles: styles = {
    chatHeader: StyleSheet.create({
      container: {
        width: '100%',
        aspectRatio: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: AppColors.BORDER_COLOR,
      },
      userNameContainer: {
        width: '62%',
        alignSelf: 'center',
        height: '100%',
        paddingLeft: '3%',
        justifyContent: 'center',
      },
      userName: {
        fontSize: 20,
      },
    }),
  };
  return styles[key];
};

export default useStylesheet;
