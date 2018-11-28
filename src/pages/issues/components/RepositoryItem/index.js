import React from 'react';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
    <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
        <Text style={styles.repoTitle}>{repository.name}</Text>

        <View style={styles.infoContainer}>
            <View style={styles.info}>
                <Text style={styles.infoText}>{repository.owner.login}</Text>
            </View>
        </View>


    </View>

);

export default RepositoryItem;