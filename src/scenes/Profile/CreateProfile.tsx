import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import {Button, Container, Header, UserImageView} from '@components';
import {AppColors, AppFonts} from '@res';
import {useAppDispatch, useAppSelector} from '@store';
import Actions from '@store/Actions';

interface Props {
  navigation: any;
  route: any;
}

const CreateProfile = (props: Props) => {
  const userData = useAppSelector(state => state.user);
  const [name, setName] = React.useState(userData.name || '');
  const [email, setEmail] = React.useState(userData.email || '');
  const [gender, setGender] = React.useState(userData.gender || '');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const isEdit = props.route?.name === 'EditProfile';

  const createProfile = () => {
    setLoading(true);
    const user = auth().currentUser;
    if (!user) {
      return;
    }
    const ref = db().ref(`/users/${user.uid}`);
    const newData = {
      name,
      email,
      gender,
      id: user.uid,
      image_url: userData.image_url,
    };
    ref
      .set(newData)
      .then(() => {
        dispatch(Actions.setUser(newData));
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
    <Container>
      <Header
        navigation={isEdit && props.navigation}
        title={isEdit ? 'Edit Profile' : 'Create Profile'}
      />
      <Container center>
        <UserImageView />
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
        {isEdit && (
          <Button danger onPress={() => auth().signOut()}>
            Logout
          </Button>
        )}
      </Container>
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
