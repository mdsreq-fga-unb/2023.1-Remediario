import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from './styles';
import { 
    SalvarMedicamento, 
    ListarMedicamento, 
    DeletarMedicamento, 
    RemoverMedicamento,
    medicamentosDia } from '../../Services/medicamento';

    // "meses""dias""horas""minutos"

export default function Home() {
    objectTeste1 = {
        nomeRemedio: "remedioteste",
        dosagem: 3,
        estoque: 6,
        unidadeEstoque: "g",
        frequencia: 5,
        unidadeFrequencia: "horas",
        obs: "observacoes teste 1",
        ultimoAlarme: "14:39"
    };
    objectTeste2 = {
        nomeRemedio: "dipironga",
        dosagem: 1,
        estoque: 10,
        unidadeEstoque: "ml",
        frequencia: 1,
        unidadeFrequencia: "dias",
        obs: "observacoes teste 2",
        ultimoAlarme: "20:30"
    };
    objectTeste3 = {
        nomeRemedio: "misibulida",
        dosagem: 5,
        estoque: 100,
        unidadeEstoque: "comprimidos",
        frequencia: 12,
        unidadeFrequencia: "horas",
        obs: "observacoes teste 3",
        ultimoAlarme: "10:00"
    };
    objectTeste4 = {
        nomeRemedio: "Falha Diaria",
        dosagem: 5,
        estoque: 200,
        unidadeEstoque: "comprimidos",
        frequencia: 12,
        unidadeFrequencia: "qualquer coisa",
        obs: "observacoes teste 3",
        ultimoAlarme: "23:00"
    };
    objectTeste4 = {
        nomeRemedio: "Falha Diaria",
        dosagem: 5,
        estoque: 200,
        unidadeEstoque: "comprimidos",
        frequencia: 12,
        unidadeFrequencia: "qualquer coisa",
        obs: "observacoes teste 3",
        ultimoAlarme: "23:00"
    };
    async function testeSalvar(){
        
        try {
            await SalvarMedicamento(objectTeste1);
            await SalvarMedicamento(objectTeste2);
            await SalvarMedicamento(objectTeste3);
            await SalvarMedicamento(objectTeste4);
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
            let success = await DeletarMedicamento();
            if(success) console.log("Medicamentos removidos");
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
    async function testeListarDiaAtual(){
        
        try {
            let response = await medicamentosDia();
            console.log(JSON.stringify(response));
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Teste BackEnd</Text>
            <Button style={styles.buttons} title="Salvar" onPress={testeSalvar} />
            <Button style={styles.buttons} title="Listar" onPress={testeListar} />
            <Button style={styles.buttons} title="Deletar" onPress={testeDeletar} />
            <Button style={styles.buttons} title="Remover" onPress={testeRemover} />
            <Button style={styles.buttons} title="Listar Dia Atual" onPress={testeListarDiaAtual} />
        </View>
    );
}
