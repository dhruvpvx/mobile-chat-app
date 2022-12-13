import {AppFonts, AppColors} from '@res';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type style = ViewStyle | ImageStyle | TextStyle;

type styles = {
  chatHeader: {
    container: style;
    userNameContainer: style;
    userName: style;
    header: style;
  };
  chatInput: {
    container: style;
    input: style;
    sendButton: style;
  };
  leftBar: {
    container: style;
    messageBarLeft: style;
  };
  rightBar: {
    container: style;
    messageBarRight: style;
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
    leftBar: StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        maxWidth: '85%',
        marginVertical: 10,
      },
      messageBarLeft: {
        minWidth: '15%',
        minHeight: 50,
        marginLeft: -5,
        justifyContent: 'center',
        padding: '5%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: AppColors.BLUISH_GREY,
      },
    }),
    rightBar: StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        maxWidth: '85%',
        marginVertical: 10,
      },
      messageBarRight: {
        minWidth: '2%',
        minHeight: 50,
        alignSelf: 'flex-end',
        marginRight: -5,
        justifyContent: 'center',
        padding: '5%',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: AppColors.LIGHT_GREEEN,
      },
    }),
  };
  return styles[key];
};

export default useStylesheet;
