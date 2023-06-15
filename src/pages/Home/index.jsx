import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import { SalvarMedicamento, ListarMedicamento } from '../../Services/medicamento';

export default function Home() {
    async function teste(){
        try {
            let valor = await SalvarMedicamento("oi", "thcau");
            console.log(valor);
        } catch (err) {
            console.log(err);
        }
    }
    async function teste2(){
        try {
            let valor = await ListarMedicamento("oi");
            console.log(valor);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>REMEDIOS DO DIA</Text>
            <Button title="Clique aqui" onPress={teste} />
            <Button title="Clique aqui 2" onPress={teste2} />
        </View>
    );
}
