import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Tabs from './src/TabNav';
import DecksScreen from './src/Decks';
import MainScreen from './src/Main';

const Stack = createStackNavigator();

export default function App(){
  let [fontsLoaded] = useFonts({
    Bungee: require('./assets/fonts/Bungee-Regular.ttf')    
  });
  if (!fontsLoaded) {
    return null;
  }
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Root' component={ Tabs } options={{ headerShown: false}}/>
        <Stack.Screen name='Decks' component={ DecksScreen } options={{ title: 'Preparação', headerTitleAlign: 'center'}}/>
        <Stack.Screen name='Main' component={ MainScreen } options={{ title: 'Iniciar partida', headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}