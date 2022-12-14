import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RoundImage from '@components/Common/RoundImage';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {useAppDispatch, useAppSelector} from '@store';
import firebase from '@firebase';
import Actions from '@store/Actions';
type Props = {};

const UserImageView = (_props: Props) => {
  const userData = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const onPress = () => {
    launchImageLibrary({mediaType: 'photo'}, async response => {
      if (!response.didCancel) {
        const image = response?.assets?.[0];
        if (image && image.uri && image.fileName) {
          const reference = storage().ref(image.fileName);
          const task = reference.putFile(image.uri);
          task.then(async () => {
            const url = await reference.getDownloadURL();
            console.log('Image uploaded to the bucket!', url);
            const newData = {
              ...userData,
              image_url: url,
            };
            await firebase.updateProfile(userData.id, newData);
            dispatch(Actions.setUser(newData));
          });
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.imageView}>
        <RoundImage size={100} source={{uri: userData.image_url}} />
      </TouchableOpacity>
    </View>
  );
};

export default UserImageView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imageView: {
    width: '30%',
    aspectRatio: 1,
  },
});
