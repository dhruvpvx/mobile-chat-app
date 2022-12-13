import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Container} from '@components';
import {AppColors, AppFonts} from '@res';

interface Props {}

const CreateProfile = (props: Props) => {
  const [name, setName] = React.useState('');

  const createProfile = () => {
    auth().currentUser?.updateProfile({
      displayName: name,
    });
  };

  return (
    <Container center>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TouchableOpacity onPress={createProfile} style={styles.btn}>
        <Text style={{...AppFonts.bold(16), color: AppColors.WHITE}}>
          Create Profile
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  input: {
    width: '70%',
    aspectRatio: 5.5,
    borderWidth: 1,
    paddingLeft: '5%',
    borderRadius: 10,
    borderColor: AppColors.BLACK_50,
    marginVertical: 10,
    ...AppFonts.regular(14),
  },
  btn: {
    width: '70%',
    aspectRatio: 5.5,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
