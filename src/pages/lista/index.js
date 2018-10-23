import React from 'react';

import { View, StatusBar } from 'react-native';

import styles from './styles';

const Lista = () => (
  <View>
    <StatusBar barStyle="light-content" />
  </View>
);

Lista.navigationOptions = {
  title: 'GitIssues',
  headerStyle: {
    backgroundColor: styles.black,
  },
  headerTintColor: styles.darker,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
  },
};

export default Lista;
