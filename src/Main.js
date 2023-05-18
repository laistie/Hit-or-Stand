import React from 'react';
import { SafeAreaView, ScrollView, ImageBackground } from 'react-native';

import styles from '../assets/styles/MainStyle';
import CardHandler from './CardHandler';

const backgroundImage = require('../assets/background-image.jpg');

function MainScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
                    <CardHandler />
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MainScreen