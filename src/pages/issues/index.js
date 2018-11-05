import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Issues extends Component {
    static navigationOptions ={
      title: 'GitIssues',
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#333333',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
    };
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
            />

            <TouchableOpacity style={styles.icons} onPress={() => {}}>
              <Icon name="plus" size={20} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
