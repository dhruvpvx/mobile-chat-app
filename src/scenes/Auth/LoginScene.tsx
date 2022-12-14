import {Button, Container} from '@components';
import {AppColors, AppFonts, AppSvg} from '@res';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EmailPassword, {EmailPasswordRef} from './EmailPassword';
import auth from '@react-native-firebase/auth';

interface Props {}

const LoginScene = (_props: Props) => {
  const infoRef = React.useRef<EmailPasswordRef>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const login = () => {
    setLoading(true);
    setError('');
    const {email, password}: any = infoRef?.current?.getInfo();
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log({err});
        if (err.code === 'auth/wrong-password') {
          setError('That password is invalid!');
        } else if (err.code === 'auth/user-not-found') {
          auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(errr => {
              if (errr.code === 'auth/invalid-email') {
                setError('That email address is invalid!');
              } else if (err.code === 'auth/weak-password') {
                setError('Password must be at least 6 characters');
              }
              console.log({errr});
            });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container center>
      <View style={styles.appTitle}>
        <Text style={AppFonts.extraBold(54, 'LIGHT_GREEEN')}>Mobile Chat</Text>
      </View>
      <EmailPassword ref={infoRef} />
      <View style={styles.errorView}>
        <Text style={AppFonts.regular(14, 'GOOGLE_RED')}>{error}</Text>
      </View>
      <Button onPress={login} loading={loading}>
        Login
      </Button>
      <TouchableOpacity style={styles.loginWithGoogle}>
        <AppSvg.GoogleSvg />
        <Text style={AppFonts.extraBold(16, 'WHITE')}>Login With Google</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginScene;

const styles = StyleSheet.create({
  appTitle: {
    width: '100%',
    aspectRatio: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-40%',
  },
  errorView: {
    width: '70%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWithGoogle: {
    width: '70%',
    aspectRatio: 5.4,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: AppColors.GOOGLE_RED,
  },
});
