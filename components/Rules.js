import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import styles from '../assets/styles/MainStyle'

import Header from './Header'

function RulesScreen() {
  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf')
  });
  return (
    <View style={ styles.defaultContainer }>
      <Header/>
      <View style={ styles.container }>
        <Text style={[ styles.defaultRTxt, styles.pTxt ]}> Objetivo:
          <Text style={[ styles.defaultTxt, styles.pTxt ]}> o jogador deve somar mais pontos que o dealer, sem ultrapassar 21; se, com as duas primeiras cartas, o jogador somar 21 pontos, ele terá um "Blackjack" </Text>
        </Text>
        <Text style={[ styles.defaultBTxt, styles.pTxt ]}> Valores: </Text>
        {cards.map((card) => {
          return (
            <View>
              <Text style={[ styles.defaultTxt, styles.pTxt ]}>{card.name}
                <Text style={[ styles.defaultTxt, styles.spanTxt ]}>{card.value}</Text>
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const cards = [
  {
    name: 'A',
    value: '1 ou 11',
  },
  {
    name: 'J, Q, K',
    value: '10',
  },
  {
    name: 'demais',
    value: 'respectivos valores',
  },
]

export default RulesScreen