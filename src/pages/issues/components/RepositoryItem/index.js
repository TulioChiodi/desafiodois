import React from 'react';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <View style={styles.Avatar}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.repoTitle}>{repository.name}</Text>
      <Text style={styles.infoText}>{repository.owner.login}</Text>
    </View>

  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default RepositoryItem;
