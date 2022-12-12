import React from 'react';
import Scenes from '@scenes';
import {createStackNavigator} from '@react-navigation/stack';

type Props = {};

const AppNavigation = (_props: Props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Scenes.HomeScene} />
      <Stack.Screen name="ChatScene" component={Scenes.ChatScene} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
