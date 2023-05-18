import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../assets/styles/MainStyle'

const API_URL = "https://deckofcardsapi.com/api/deck/new/";

export default class CardHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [],
          drawnCards: [],
        };
    }
    async componentDidMount() {
        const data = await axios.get(API_URL).then(({ data }) => data);
        const cards = await axios
          .get(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`)
          .then(e => e.data.cards);
    
        this.setState({ cards });
    }

    drawCard() {
        return this.setState(prevState => ({ 
            drawnCards: [
                ...prevState.drawnCards,
                prevState.cards[prevState.cards.length - 1]
            ],
            cards: [...prevState.cards.slice(0, -1)]
        }))
    }

    render() {
        const cards = this.state.cards.map((cardDetails, cardId) => (
            <TouchableHighlight key={cardId} style={[ styles.card ]}>
                <Text style={[ styles.smallTxt ]}> {cardDetails.value} of {cardDetails.suit} </Text>
            </TouchableHighlight>
        ));
        return (
            <View style={[ styles.cardContainer ]}>
                {cards}
            </View>
        );
    }
}