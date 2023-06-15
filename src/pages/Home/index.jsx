import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';

export default function Home({ navigation }) {
    function trocarTela(){
        setTimeout(() => {
            navigation.navigate('Confirmacao');
        }, 1000);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>REMEDIOS DO DIA</Text>
        </View>
    );
}
