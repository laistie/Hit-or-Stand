import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import styles from '../assets/styles/MainStyle'

const backgroundImage = require('../assets/background-image.jpg');

function MainScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
        Bungee: require('../assets/fonts/Bungee-Regular.ttf')
    });
    return (
        <View style={ styles.container }>
        <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </ImageBackground>
        </View>
    );
}

export default MainScreen