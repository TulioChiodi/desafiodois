import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';

import styles from './styles';

export default class Lista extends Component {
  static navigationOptions = {
    title: 'Lista',
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
      </View>
    )
  }
}
