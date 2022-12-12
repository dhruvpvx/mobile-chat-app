import {AppFonts, AppColors} from '@res';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type style = ViewStyle | ImageStyle | TextStyle;

type styles = {
  chatHeader: {
    container: style;
    userNameContainer: style;
    userName: style;
  };
  chatInput: {
    container: style;
    input: style;
    sendButton: style;
  };
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
    chatInput: StyleSheet.create({
      container: {
        width: '100%',
        aspectRatio: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: AppColors.BORDER_COLOR,
        borderTopWidth: 1,
      },
      input: {
        width: '80%',
        height: '100%',
        backgroundColor: 'white',
        paddingLeft: '5%',
        ...AppFonts.semiBold(16),
      },
      sendButton: {
        width: '17%',
        padding: '3.7%',
        height: '95%',
        borderRadius: 100,
        backgroundColor: AppColors.SEND_BUTTON,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  };
  return styles[key];
};

export default useStylesheet;
