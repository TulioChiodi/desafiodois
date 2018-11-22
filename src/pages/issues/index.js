import React, { Component } from 'react';
import api from 'services/api';

import {
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  Text,
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
      data: [],
      reponame: '',
      loading: true,
      errorMessage: null,
    }

    componentWillMount() {
      this.loadRepositories();
    }

    checkRepoExists = async (reponame) => {
      const repo = await api.get(`/repos/${reponame}`);

      return repo;
    }

    loadRepositories = async () => {
      // const reponame = await AsyncStorage.getItem('@Issues:reponame');
      // const response = await api.get(`/repos/${reponame}`);
      // const dataCopy = [...this.state.data];
      // dataCopy.push(response.data);
      // console.tron.log(dataCopy);
      // this.setState({ data: dataCopy, loading: false });
      this.setState({ loading: false });
    }

    saveData = async (reponame) => {
      this.setState({ loading: true });
      await AsyncStorage.setItem('@Issues:reponame', reponame);
      const response = await api.get(`/repos/${reponame}`);
      const dataCopy = [...this.state.data];
      dataCopy.push(response.data);
      console.tron.log(dataCopy);
      this.setState({ data: dataCopy, loading: false });
    }

    search = async () => {
      const { reponame } = this.state;

      if (reponame.length === 0) return;

      try {
        await this.checkRepoExists(reponame);

        await this.saveData(reponame);

      } catch (err) {
        this.setState({ loading: false, errorMessage:"repo não existe" });
      }

    }

    renderListItem = ({ item }) => (
      <Text>{item.name}</Text>
    )
      //console.tron.log(item.full_name);

    renderList = () => (
      this.state.data.length !== 0
        ? (
          <FlatList
            data={this.state.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
          />
        )
        : (<Text>Não existem repositórios carregados</Text>)
    );

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

            <TouchableOpacity style={styles.icons} onPress={this.search}>
              <Icon name="plus" size={16} color={'#333333'} />
            </TouchableOpacity>
          </View>
          { this.state.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList() }
        </View>
      );
    }
}
