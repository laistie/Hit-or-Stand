import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from '../assets/styles/MainStyle'

const backgroundImage = require('../assets/background-image.jpg');

function BetsScreen() {
  return (
    <View style={ styles.container }>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
        <Text style={[ styles.defaultTxt, styles.pTxt ]}> Caso um dos jogadores consiga um 
            <Text style={[ styles.defaultRTxt, styles.spanTxt ]}> Natural Blackjack </Text> 
        e o dealer não, o jogador recebe 150% (3:2) do valor apostado. </Text>

        <Text style={[ styles.defaultRTxt, styles.pTxt ]}> Decisões: </Text>
        <Text style={[ styles.defaultBTxt, styles.pTxt ]}>Hit
          <Text style={[ styles.defaultTxt, styles.spanTxt ]}>  Receber outra carta</Text>
        </Text>
        <Text style={[ styles.defaultBTxt, styles.pTxt ]}>Stand
          <Text style={[ styles.defaultTxt, styles.spanTxt ]}>  Parar</Text>
        </Text>
        <Text style={[ styles.defaultBTxt, styles.pTxt ]}>Split
          <Text style={[ styles.defaultTxt, styles.spanTxt ]}> Caso o jogador tenha um par em mãos, ele pode optar por dividir o valor de uma delas, colocando uma aposta igual à inicial, e separará o par em montes diferentes, jogando com duas mãos diferentes</Text>
        </Text>
        <Text style={[ styles.defaultBTxt, styles.pTxt ]}>Double down
          <Text style={[ styles.defaultTxt, styles.spanTxt ]}>  Após receber as duas cartas e colocar uma aposta maior ou igual à sua inicial, o jogador receberá mais uma carta e encerrará sua mão</Text>
        </Text>
      </ImageBackground>
    </View>
  );
}
  
export default BetsScreen;