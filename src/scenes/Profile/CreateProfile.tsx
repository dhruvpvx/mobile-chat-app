import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Button, Container} from '@components';
import {AppColors, AppFonts} from '@res';

interface Props {
  navigation: any;
  route: any;
}

const CreateProfile = (props: Props) => {
  const [name, setName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const isEdit = props.route?.name === 'EditProfile';
  const createProfile = () => {
    setLoading(true);
    auth()
      .currentUser?.updateProfile({
        displayName: name,
      })
      .then(() => {
        if (isEdit) {
          props.navigation.goBack();
        }
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
