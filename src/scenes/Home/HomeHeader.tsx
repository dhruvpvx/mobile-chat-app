import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {AppFonts, AppSvg} from '@res';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface Props {}

const HomeHeader = (props: Props) => {
  const name = auth().currentUser?.displayName;
  const navigation = useNavigation<any>();

  const onProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={AppFonts.medium(15)}>Hello {name || 'User'},</Text>
        <Text style={AppFonts.bold(20)}>Mobile Chat App.</Text>
      </View>
      <TouchableOpacity onPress={onProfilePress} style={styles.profileIcon}>
        <AppSvg.ProfileIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
});
