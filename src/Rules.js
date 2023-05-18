import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from '../assets/styles/MainStyle'

const backgroundImage = require('../assets/background-image.jpg');

function RulesScreen() {
  return (
    <View style={ styles.container }>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={[ styles.image, styles.container ]}>
          <Text style={[ styles.defaultRTxt, styles.pTxt ]}> Objetivo:
            <Text style={[ styles.defaultTxt, styles.pTxt ]}> o jogador deve somar mais pontos que o dealer, sem ultrapassar 21 (BUST); se, com as duas primeiras cartas, o jogador somar 21 pontos, ele terá um "Blackjack". </Text>
          </Text>
          <Text style={[ styles.defaultBTxt, styles.pTxt ]}> Dealing inicial:
            <Text style={[ styles.defaultTxt, styles.pTxt ]}> Após a aposta inicial de cada jogador na mesa, o dealer dá duas cartas, ambas com a face para cima, para cada jogador e uma com a face para baixo e outra para cima, respectivamente, para si mesmo. </Text>
          </Text>

          <Text style={[ styles.defaultBTxt, styles.pTxt ]}> Valores: </Text>
          <Text style={[ styles.defaultTxt, styles.pTxt ]}> A
            <Text style={[ styles.defaultTxt, styles.spanTxt ]}>  1 ou 11</Text>
          </Text>
          <Text style={[ styles.defaultTxt, styles.pTxt ]}> J, Q, K
            <Text style={[ styles.defaultTxt, styles.spanTxt ]}>  10</Text>
          </Text>
          <Text style={[ styles.defaultTxt, styles.pTxt ]}> outras cartas
            <Text style={[ styles.defaultTxt, styles.spanTxt ]}>  respectivos valores</Text>
          </Text>
      </ImageBackground>
    </View>
  );
}

export default RulesScreen