import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import {Button, Container} from '@components';
import {AppColors, AppFonts} from '@res';

interface Props {
  navigation: any;
  route: any;
}

const CreateProfile = (props: Props) => {
  const userName = auth().currentUser?.displayName;
  const [name, setName] = React.useState(userName || '');
  const [email, setEmail] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const isEdit = props.route?.name === 'EditProfile';

  const createProfile = () => {
    setLoading(true);
    const user = auth().currentUser;
    if (!user) {
      return;
    }
    const ref = db().ref(`/users/${user.uid}`);
    ref
      .set({
        name,
        email,
        gender,
      })
      .then(() => {
        if (isEdit) {
          props.navigation.goBack();
        }
      })
      .catch(error => {
        console.log({error});
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container center>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />
      <Button loading={loading} onPress={createProfile}>
        {isEdit ? 'Update' : 'Create'} Profile
      </Button>
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
});
