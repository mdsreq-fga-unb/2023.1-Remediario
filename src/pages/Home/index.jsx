import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { SalvarMedicamento, ListarMedicamento } from '../../Services/medicamento';

export default function Home() {
    async function teste(){
        try {
            let valor = await SalvarMedicamento({thcau: "fui", oi: 3});
            console.log(valor);
        } catch (err) {
            console.log(err);
        }
    }
    async function teste2(){
        try {
            let valor = await ListarMedicamento();
            console.log(valor);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>REMEDIOS DO DIA</Text>
            <TouchableOpacity onPress={teste}>
                <Text>Clique aqui</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={teste2}>
                <Text>Clique aqui 2</Text>
            </TouchableOpacity>
        </View>
    );
}
