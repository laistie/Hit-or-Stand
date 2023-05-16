import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import Tabs from './components/TabNav'

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    )
  }
}