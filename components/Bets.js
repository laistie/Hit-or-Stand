import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import styles from '../assets/styles/MainStyle'

const backgroundImage = require('../assets/background-image.jpg');

function BetsScreen() {
  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf')
  });
  return (
    <View style={ styles.container }>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
        <Text style={[ styles.defaultTxt, styles.pTxt ]}> Caso um dos jogadores consiga um 
            <Text style={[ styles.defaultRTxt, styles.spanTxt ]}> Natural Blackjack </Text> 
        e o dealer não, o jogador recebe 150% (3:2) do valor apostado. </Text>
        <Text style={[ styles.defaultRTxt, styles.pTxt ]}> Decisões: </Text>
          {decisions.map((decision) => {
            return (
              <View>
                <Text style={[ styles.defaultBTxt, styles.pTxt ]}>{decision.name}
                  <Text style={[ styles.defaultTxt, styles.spanTxt ]}>{decision.description}</Text>
                </Text>
              </View>
            );
        })}
      </ImageBackground>
    </View>
  );
}

const decisions = [
    {
      name: 'Hit',
      description: 'Receber outra carta',
    },
    {
      name: 'Stand',
      description: 'Parar',
    },
    {
      name: 'Split',
      description: 'Caso o jogador tenha um par em mãos, ele pode optar por dividir o valor de uma delas, colocando uma aposta igual à inicial, e separará o par em montes diferentes, jogando com duas mãos diferentes',
    },
    {
      name: 'Double down',
      description: 'Após receber as duas cartas e colocar uma aposta maior ou igual à sua inicial, o jogador receberá mais uma carta e encerrará sua mão',
    },
  ]
  
export default BetsScreen;