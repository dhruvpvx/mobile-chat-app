import React from 'react';
import Scenes from '@scenes';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '@store';
type Props = {};

const AppNavigation = (_props: Props) => {
  const Stack = createStackNavigator();
  const userData = useAppSelector(state => state.user);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!userData?.name && (
        <Stack.Screen name="CreateProfile" component={Scenes.CreateProfile} />
      )}
      <Stack.Screen name="Home" component={Scenes.HomeScene} />
      <Stack.Screen name="ChatScene" component={Scenes.ChatScene} />
      <Stack.Screen name="EditProfile" component={Scenes.CreateProfile} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
