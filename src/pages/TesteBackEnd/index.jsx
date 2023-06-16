import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from './styles';
import { SalvarMedicamento, ListarMedicamento, DeletarMedicamento } from '../../Services/medicamento';

export default function Home() {
    async function testeSalvar(){
        object = {
            nomeRemedio: "teste1", 
            dosagem:2, 
            tipo:"dia"
            };
        try {
            let valor = await SalvarMedicamento(object);
            console.log(valor);
        } catch (err) {
            console.log(err);
        }
    }
    async function testeListar(){
        try {
            let valor = await ListarMedicamento();
            console.log(valor);
        } catch (e) {
            console.log(e);
        }
    }
    async function testeRemover(){
        try {
            await DeletarMedicamento();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Teste BackEnd</Text>
            <Button title="Salvar" onPress={testeSalvar} />
            <Button title="Listar" onPress={testeListar} />
            <Button title="Remover" onPress={testeRemover} />
        </View>
    );
}
