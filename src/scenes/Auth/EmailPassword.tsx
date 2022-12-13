import {AppColors, AppFonts} from '@res';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {}

type details = {
  email: string;
  password: string;
};

export type EmailPasswordRef = {
  getInfo: () => details;
};

const EmailPassword = (props: Props, ref: any) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  React.useImperativeHandle(
    ref,
    (): EmailPasswordRef => ({
      getInfo: () => {
        return {
          email,
          password,
        };
      },
    }),
  );

  return (
    <>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
    </>
  );
};

export default React.forwardRef(EmailPassword);

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
