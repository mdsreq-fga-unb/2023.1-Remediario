import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles';

export default function listItem(remedio, index) {
    return (
          <View>
            <Text style={styles.text}>{remedio.nomeRemedio}:{remedio.qtd}</Text>
          </View>
        )
}