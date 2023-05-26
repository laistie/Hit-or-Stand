import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, TouchableHighlight, Alert } from 'react-native';

import styles from '../assets/styles/MainStyle'

import Card from './Card';

const API_URL = "https://deckofcardsapi.com/api/deck/new/";

export default class CardHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [],
          drawnCards: [],
          counting: 0,
        };
    }
    async componentDidMount() {
        const data = await axios.get(API_URL).then(({ data }) => data);
        const cards = await axios
          .get(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`)
          .then(e => e.data.cards);
        this.setState({ cards });
    }

    drawCard(card) {
        if(card.value == '7' || card.value == '8' || card.value == '9'){
            //
        }else if(card.value == '10' || card.value == 'JACK' || card.value == 'QUEEN' || card.value == 'KING' || card.value == 'ACE'){
            this.state.counting = parseInt(this.state.counting) - 1;
        }else{
            this.state.counting = parseInt(this.state.counting + 1)
        }
        const index = this.state.cards.indexOf(card)
        return this.setState(prevState => ({
            drawnCards: [...prevState.drawnCards, ...prevState.cards.splice(index, 1)],
        }));
    }

    showCount(){
        const number = this.state.counting.toString()
        Alert.alert('Contagem', number, [
        {
            text: 'OK',
            onPress: () => console.log('Alert dismissed'),
        },  
        ])
    }

    render() {
        const cards = this.state.cards.map((cardDetails, cardId) => (
            <TouchableHighlight key={cardId} style={[ styles.card, styles.deckCard ]} onPress={() => this.drawCard(cardDetails)}>
                <Card value={cardDetails.value} suit={cardDetails.suit} />
            </TouchableHighlight>
        ));
        const drawnCards = this.state.drawnCards.map((cardDetails, cardId) => (
            <TouchableHighlight key={cardId} style={[ styles.card, styles.drawnCard ]}>
                <Card value={cardDetails.value} suit={cardDetails.suit} />
            </TouchableHighlight>
        ));
        return (
            <View style={styles.cardContainer}>
                <View>
                    <TouchableHighlight style={[ styles.touchableHighlight ]} onPress={() => this.showCount()}>
                        <Text style={styles.bigTxt}> Mostrar contagem </Text>
                    </TouchableHighlight>
                </View>
                {cards}
                {drawnCards}
            </View>
        );
    }
}