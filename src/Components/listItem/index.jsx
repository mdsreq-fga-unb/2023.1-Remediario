import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RemoverMedicamento } from '../../Services/medicamento';
import { ProgressBar } from 'react-native-paper';

export default function ListItem({ remedio, atualizarLista }) {
  let today = new Date(remedio.ultimoAlarme);
  let minutos = today.getMinutes();
  let horas = today.getHours();
  let nome = remedio.nomeRemedio;
  let estoque = remedio.estoque;
  let frequencia = remedio.frequencia;
  let dosagem = remedio.dosagem;
  let conta = estoque / dosagem;
  /*   console.log(conta, estoque, frequencia); */


  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  async function remover() {
    try {
      console.log(nome);
      let value = await RemoverMedicamento(nome);
      console.log(value);
      atualizarLista(); // Chama a função para atualizar a lista de medicamentos
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>

        <Text style={styles.text}>{nome}: </Text>

        <View style={styles.alignEnd}>
          <View style={styles.contentHours}>
            <Icon name='clock' color={'white'} style={styles.miniIcon} />
            <Text style={styles.text2}>{horas}:{minutos}</Text>
          </View>
          <TouchableOpacity style={styles.botao} onPress={remover}>
            <Icon name='trash-can' color={'white'} style={styles.icon} />
          </TouchableOpacity>
        </View>

      </View>

      <ProgressBar
        progress={conta}
        color="#FF"
        style={styles.progressBar}
      />
      <Text style={styles.progressBarText}>
        {Math.trunc(conta)}/{dosagem}
      </Text>
    </View>
  )
}
