import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RemoverMedicamento } from '../../Services/medicamento';

export default function listItem(remedio, key) {
  let today = new Date(remedio.ultimoAlarme);
  let minutos = today.getMinutes();
  let horas = today.getHours();
  let nome = remedio.nomeRemedio;

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  async function remover() {
    try {
      console.log(nome);
      let value = await RemoverMedicamento(nome);
      console.log(value);
    } catch (e) {
      console.log(e);
      console.log("I carai");
    }
    console.log("oi");
  }

  return (
    <View key={key} style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text}>{nome}:</Text>
      </View>

      <View style={styles.contentHours}>
        <Icon name='clock' color={'white'} style={styles.miniIcon} />
        <Text style={styles.text}>{horas}:{minutos}</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={remover}>
        <Icon name='trash-can' color={'white'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
