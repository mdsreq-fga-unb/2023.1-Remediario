import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles';

export default function Header ({ nomeTela }) {
    return(
        <Text style={styles.title}>{nomeTela}</Text>
    )
}