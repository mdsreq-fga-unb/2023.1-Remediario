import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RemoverMedicamento } from '../../Services/medicamento';
import { ProgressBar } from 'react-native-paper';

export default function ListItem({ remedio, atualizarLista, navigation }) {
  let today = new Date(remedio.ultimoAlarme);
  let minutos = today.getMinutes();
  let horas = today.getHours();
  let nome = remedio.nomeRemedio;
  let estoque = remedio.estoque;
  let progress = estoque / 10;
  /*   console.log(conta, estoque, frequencia); */

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  async function remover() {
    try {
      await RemoverMedicamento(nome);
      atualizarLista(); // Chama a função para atualizar a lista de medicamentos
    } catch (e) {
      console.log(e);
    }
  }

  function redirect () {
    navigation.navigate('Confirmacao', {
        medicineName: nome,
      });
  }

  function editMedicine() {
  }

  return (
    <TouchableOpacity style={styles.container} onPress={redirect}>
      <View style={styles.container2}>
        <Text style={styles.text}>{nome}</Text>
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
        progress={progress}
        color='#006B65'
        style={styles.progressBar}
      />
      <Text style={styles.progressBarText}>
        Comprimidos restantes: {estoque}
      </Text>
    </TouchableOpacity>
  )
}
