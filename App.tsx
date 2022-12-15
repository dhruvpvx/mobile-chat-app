import AppNavigation from '@navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Scenes from '@scenes';
import {useAppDispatch, useAppSelector} from '@store';
import Actions from '@store/Actions';
import firebase from '@firebase';

interface Props {}

const App = (_props: Props) => {
  const userData = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        const id = user.uid;
        const data = firebase.getUser(id);
        data
          .then(async res => {
            if (res?.id) {
              dispatch(Actions.setUser(res));
            } else {
              await firebase.updateProfile(id, {...res, id});
              dispatch(Actions.setUser({...res, id}));
            }
          })
          .catch(err => {
            console.log('err', err);
          });
      } else {
        dispatch(
          Actions.setUser({
            id: '',
            name: '',
            email: '',
            gender: '',
          }),
        );
      }
    });
    return subscriber; // unsubscribe on unmount
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        {userData.id ? <AppNavigation /> : <Scenes.LoginScene />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const StatusBar = () => {
  const {top} = useSafeAreaInsets();
  return <View style={{marginTop: top}} />;
};
