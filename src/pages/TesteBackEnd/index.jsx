import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from './styles';
import { SalvarMedicamento, ListarMedicamento, DeletarMedicamento, RemoverMedicamento } from '../../Services/medicamento';

export default function Home() {
    objectTeste1 = {
            nomeRemedio: "teste1", 
            dosagem:2, 
            tipo:"dia"
            };
    objectTeste2 = {
            nomeRemedio: "teste2", 
            dosagem:5, 
            tipo:"dia",
            eticetera: "mucha plata"
            };
    objectTeste3 = {
        nomeRemedio: "teste3", 
        dosagem:8, 
        tipo:"mes"
        };
    async function testeSalvar(){
        
        try {
            await SalvarMedicamento(objectTeste1);
            await SalvarMedicamento(objectTeste2);
            await SalvarMedicamento(objectTeste3);
            console.log("Ambiente De Teste setado")
        } catch (e) {
            console.log(e);
        }
    }
    async function testeListar(){
        try {
            let valor = await ListarMedicamento();
            console.log("Lista: " + JSON.stringify(valor));
        } catch (e) {
            console.log(e);
        }
    }
    async function testeDeletar(){
        try {
            await DeletarMedicamento();
        } catch (e) {
            console.log(e);
        }
    }
    async function testeRemover(){
        try {
            let value = await RemoverMedicamento(objectTeste1);
            console.log("Objeto: " + JSON.stringify(value) + " removido com sucesso");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Teste BackEnd</Text>
            <Button title="Salvar" onPress={testeSalvar} />
            <Button title="Listar" onPress={testeListar} />
            <Button title="Deletar" onPress={testeDeletar} />
            <Button title="Remover" onPress={testeRemover} />
        </View>
    );
}
