import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';

import styles from '../assets/styles/MainStyle';

class DecksInput extends Component {
    state = {
        number: 0,
    }

    onChanged(text) {
        this.setState({
            number: text.replace(/[^0-9]/g, ''),
        });
        if(parseInt(text) > 1){
            Alert.alert('Alerta', 'Número de decks é limitado a 1', [
                {
                    text: 'OK',
                    onPress: () => console.log('Alert dismissed'),
                },  
            ])
            return false
        }else{
            return true
        }
    }
    render() {
        return(
            <TextInput style={[ styles.input, styles.bigTxt ]}
                placeholder='Número de decks' 
                keyboardType='numeric'
                maxLength={2}
                onChangeText={(text) => this.onChanged(text)}>
            </TextInput>
        )
    };
}

export default DecksInput