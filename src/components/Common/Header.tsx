import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppFonts, AppSvg} from '@res';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const {goBack} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <AppSvg.BackIcon onPress={goBack} style={styles.backIcon} />
      <View style={styles.titleView}>
        <Text style={AppFonts.semiBold(16)}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 5.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3.5%',
  },
  backIcon: {
    width: '5%',
    aspectRatio: 1,
  },
  titleView: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
});
