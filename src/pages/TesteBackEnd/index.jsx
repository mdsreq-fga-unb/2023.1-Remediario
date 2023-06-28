import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from './styles';
import { 
    SalvarMedicamento, 
    ListarMedicamento, 
    DeletarMedicamento, 
    RemoverMedicamento,
    medicamentosDia,
    getMedicamento,
    usoMedicamento,
    EditarMedicamento } from '../../Services/medicamento';

    // "meses""dias""horas""minutos"

export default function Home() {
    objectTeste1 = {
        nomeRemedio: "remedioteste",
        dosagem: 3,
        estoque: 6,
        unidadeEstoque: "g",
        frequencia: 1,
        unidadeFrequencia: "horas",
        obs: "observacoes teste 1",
        ultimoAlarme: "02:32",
        uso: [],
    };
    objectTeste2 = {
        nomeRemedio: "dipironga",
        dosagem: 1,
        estoque: 10,
        unidadeEstoque: "ml",
        frequencia: 1,
        unidadeFrequencia: "horas",
        obs: "observacoes teste 2",
        ultimoAlarme: "23:59",
        uso: [],
    };
    objectTeste3 = {
        nomeRemedio: "misibulida",
        dosagem: 5,
        estoque: 100,
        unidadeEstoque: "comprimidos",
        frequencia: 12,
        unidadeFrequencia: "horas",
        obs: "observacoes teste 3",
        ultimoAlarme: "23:59",
        uso: [],
    };
    objectTeste4 = {
        nomeRemedio: "Para C tamal",
        dosagem: 3,
        estoque: 6,
        unidadeEstoque: "comprimidos",
        frequencia: 12,
        unidadeFrequencia: "minutos",
        obs: "observacoes teste 3",
        ultimoAlarme: "23:00",
        uso: [],
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
            // valor = valor.data.find(nome => nome.nomeRemedio == "dipironga");
            // let date = new Date(valor.ultimoAlarme);
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
            let value = await RemoverMedicamento(objectTeste1.nomeRemedio);
            console.log("Objeto: " + JSON.stringify(value) + " removido com sucesso");
        } catch (e) {
            console.log(e);
        }
    }
    async function testeListarDiaAtual(){
        
        try {
            let response = await medicamentosDia();
            console.log("Resposta" + JSON.stringify(response));
        } catch (e) {
            console.log(e);
        }
    }
    async function testeGet(){
        try {
            let response = await getMedicamento("misibulida");
            console.log("Resposta" + JSON.stringify(response));
        } catch (e) {
            console.log(e);
        }
    }
    async function testeUso(){
        try {
            let response = await usoMedicamento("misibulida");
            console.log("Resposta" + JSON.stringify(response));
        } catch (e) {
            console.log(e);
        }
    }
    async function testeEdit(){
        objectTeste5 = {
            nomeRemedio: "misibulida",
            dosagem: 50,
            estoque: 100,
            unidadeEstoque: "comprimidos",
            frequencia: 10,
            unidadeFrequencia: "horas",
            obs: "Alterado",
            ultimoAlarme: new Date(),
            uso: [],
        };
        try {
            await EditarMedicamento(objectTeste5, "misibulida");
            console.log("Editado!");
        } catch (e) {
            console.log(e)
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
            <Button style={styles.buttons} title="getMisibulida" onPress={testeGet} />
            <Button style={styles.buttons} title="usoMisibulida" onPress={testeUso} />
            <Button style={styles.buttons} title="Edit Misibulida" onPress={testeEdit} />
        </View>
    );
}
