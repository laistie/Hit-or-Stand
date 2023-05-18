import React from 'react';
import { View, ImageBackground } from 'react-native';

import styles from '../assets/styles/MainStyle';
import CardHandler from './CardHandler';

const backgroundImage = require('../assets/background-image.jpg');

function MainScreen({ navigation }) {
    return (
        <View style={ styles.container }>
        <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
            <CardHandler></CardHandler>
        </ImageBackground>
        </View>
    );
}

export default MainScreen