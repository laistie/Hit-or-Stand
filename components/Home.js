import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

import styles from '../assets/styles/MainStyle'

import Header from './Header'
import Tabs from './TabNav'

const backgroundImage = require('../assets/background-image.jpg');

function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf')
  });
  return (
    <View style={ styles.container }>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
        <Header />
        <Text style={[ styles.defaultTxt, styles.h2Txt ]}> Hitar 21 nunca foi tão fácil </Text>
        <TouchableOpacity style={[ styles.touchable, styles.shadow ]} onPress={() => navigation.navigate('Main')}>
          <Text style={[ styles.defaultTxt, styles.h2Txt ]}> Iniciar </Text>
          <AntDesign name="right" size={24} color='#F5F5F5' />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen