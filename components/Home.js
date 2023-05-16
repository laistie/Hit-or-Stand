import { View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

import styles from '../assets/styles/MainStyle'

const backgroundImage = require('../assets/background-image.jpg');

function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf')
  });
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.image}/>
      <Text style={{fontFamily: 'Bungee', color: '#F5F5F5', fontSize: 48}}> Hit or Stand? </Text>
      <Text style={{fontFamily: 'Bungee', color: '#F5F5F5', fontSize: 24}}> Hitar 21 nunca foi tão fácil </Text>
    </View>
  );
}

export default HomeScreen