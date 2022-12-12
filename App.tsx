import AppNavigation from '@navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface Props {}

const App = (_props: Props) => {
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
