import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import styles from '../assets/styles/MainStyle';

import Header from './Header';

const backgroundImage = require('../assets/background-image.jpg');

function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
        <Header />
        <Text style={[ styles.defaultTxt, styles.h2Txt ]}> Hitar 21 nunca foi tão fácil </Text>
        <TouchableOpacity style={[ styles.touchable, styles.shadow ]} onPress={() => navigation.navigate('Decks')}>
          <Text style={[ styles.defaultTxt, styles.h2Txt ]}> Iniciar </Text>
          <AntDesign name="right" size={24} color='#F5F5F5' />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen