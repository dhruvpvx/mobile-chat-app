import React from 'react';
import Scenes from '@scenes';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
type Props = {};

const AppNavigation = (_props: Props) => {
  const Stack = createStackNavigator();
  const [userData, setUserData] = React.useState<any>(null);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUserData(user);
    });
    return subscriber;
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!userData?.displayName && (
        <Stack.Screen name="CreateProfile" component={Scenes.CreateProfile} />
      )}
      <Stack.Screen name="Home" component={Scenes.HomeScene} />
      <Stack.Screen name="ChatScene" component={Scenes.ChatScene} />
      <Stack.Screen name="EditProfile" component={Scenes.CreateProfile} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
