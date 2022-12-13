import AppNavigation from '@navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface Props {}

const App = (_props: Props) => {
  const [isUser, setIsUser] = React.useState<boolean>(false);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const StatusBar = () => {
  const {top} = useSafeAreaInsets();
  return <View style={{marginTop: top}} />;
};
