import { View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import styles from '../assets/styles/MainStyle'

import Header from './Header'

const backgroundImage = require('../assets/background-image.jpg');

function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf')
  });
  return (
    <View style={ styles.container }>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
        <Header />
        <Text style={[ styles.defaultTxt, styles.h2Txt ]}> Hitar 21 nunca foi tão fácil </Text>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen