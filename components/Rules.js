import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

function RulesScreen() {
  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf')
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Bungee' }}> Objetivo: o jogador deve somar mais pontos que o dealer, sem ultrapassar 21; se, com as duas primeiras cartas, o jogador somar 21 pontos, ele terá um "Blackjack" </Text>
      <Text style={{ fontFamily: 'Bungee' }}> Valores: </Text>
    </View>
  );
}

export default RulesScreen