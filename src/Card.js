import React, { Component } from "react";
import { Text } from 'react-native';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inGame: true,
        color: '#F5F5F5',
      }
    };

    setNotInGame() {
      this.state.inGame = false;
    }

    render() {
      if( this.state.inGame == false ) {
        this.state.color = '#0A0908'
      }
      return (
        <Text style={{fontSize: 12, fontWeight: 'bold', color: this.state.color}}> {this.props.value} of {this.props.suit} </Text>
      )
    }
}    

export default Card