import React, { Component } from 'react';
import axios from 'axios';
import { View, TouchableHighlight } from 'react-native';

import styles from '../assets/styles/MainStyle'

import Card from './Card';

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

    drawCard(card) {
        const index = this.state.cards.indexOf(card)
        const drawnCard = this.state.cards[index]
        return this.setState(prevState => ({
            drawnCards: [...prevState.drawnCards, ...prevState.cards.splice(index, 1)],
        }));
    }

    render() {
        const cards = this.state.cards.map((cardDetails, cardId) => (
            <TouchableHighlight key={cardId} style={[ styles.card, styles.deckCard ]} onPress={() => this.drawCard(cardDetails)}>
                <Card value={cardDetails.value} suit={cardDetails.suit} />
            </TouchableHighlight>
        ));
        return (
            <View style={[ styles.cardContainer ]}>
                {cards}
            </View>
        );
    }
}