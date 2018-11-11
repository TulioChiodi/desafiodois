import React, { Component } from 'react';
import api from 'services/api';

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

    state = {
      reponame: '',
    }

    checkRepoExists = (reponame) => {
      const repo = await api.get('')

    }

    search = () => {
      const { reponame } = this.state;

      if (reponame.length === 0) return;


    }

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
              value={this.state.reponame}
              onChangeText={reponame => this.setState({ reponame })}
            />

            <TouchableOpacity style={styles.icons} onPress={() => {}}>
              <Icon name="plus" size={16} color={'#333333'} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
