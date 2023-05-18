import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import styles from '../assets/styles/MainStyle';
import DecksInput from './DecksInput';

const backgroundImage = require('../assets/background-image.jpg');

function DecksScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
                <Text style={styles.bigTxt}> Antes de começar, insira o número de decks: </Text>
                <DecksInput />
                <Text style={styles.smallTxt}> OBS: o número de decks na demo é limitado a 1 </Text>
                <TouchableOpacity style={[ styles.touchable, styles.shadow ]} onPress={() => {navigation.navigate('Main')}}>
                    <Text style={[ styles.defaultTxt, styles.h2Txt ]}> Jogar </Text>
                    <AntDesign name="right" size={24} color='#F5F5F5' />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default DecksScreen