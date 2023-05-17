import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home';
import MainScreen from './Main';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='Main' component={MainScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack; 