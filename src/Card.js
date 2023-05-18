import React, { Component } from "react";
import { View, Image } from 'react-native';

import styles from '../assets/styles/MainStyle'

class Card extends Component {
    constructor(props) {
        super(props);
    };
    render() {
      return (
        <Image src={this.props.src} alt={this.props.alt} style={ styles.card } />
      )
    }
}    

export default Card