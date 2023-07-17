import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { RemoverMedicamento } from '../../Services/medicamento';
import { ProgressBar } from 'react-native-paper';
import Timer from '../Timer';

export default function ListItem({ remedio, atualizarLista, navigation }) {
  const [horaTimer, setHoraTimer] = useState(0);
  const [minutoTimer, setMinutoTimer] = useState(0);
  const [segundoTimer, setSegundoTimer] = useState(0);
  
  var dados = new Date(remedio.ultimoAlarme);
  var horasAlarme = dados.getHours();
  var minutosAlarme = dados.getMinutes();
  var nome = remedio.nomeRemedio;
  var estoque = remedio.estoque;
  var dosagem = remedio.dosagem;
  var progresso = (estoque / remedio.dosagem) / 10;
  const formatMinute = (minute) => (minute < 10 ? `0${minute}` : minute);

  useEffect(() => {
    const atualizarTimer = () => {
      const agora = new Date();
      const tempoMs = dados.getTime() - agora.getTime();

      let segundos = Math.floor(tempoMs / 1000);
      let horas = Math.floor(segundos / 3600);
      segundos = segundos % 3600;
      let minutos = Math.floor(segundos / 60);
      segundos = segundos % 60;

      setHoraTimer(horas);
      setMinutoTimer(minutos);
      setSegundoTimer(segundos);
    };

    const timerId = setTimeout(atualizarTimer, 1);

    return () => clearTimeout(timerId);
  }, [remedio.ultimoAlarme]);

  const confirmarRemocao = () => {
    Alert.alert(
      'Confirmar Remoção',
      `Tem certeza que deseja remover o medicamento ${nome}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: remover,
        },
      ],
      { cancelable: false }
    );
  };

  const remover = async () => {
    try {
      await RemoverMedicamento(nome);
      atualizarLista();
    } catch (e) {
      console.log(e);
    }
  };

  const redirect = useCallback(() => {
    if (estoque === 0) {
      Alert.alert("É preciso repor o estoque para usar o medicamento");
    } else {
      const agora = new Date();
      const tempoMs = dados.getTime() - agora.getTime();
      let segundos = Math.floor(tempoMs / 1000);
      let horas = Math.floor(segundos / 3600);
      segundos = segundos % 3600;
      let minutos = Math.floor(segundos / 60);
      segundos = segundos % 60;

      setHoraTimer(horas);
      setMinutoTimer(minutos);
      setSegundoTimer(segundos);

      navigation.navigate('Confirmacao', {
        medicineName: nome,
      });
    }
  }, [estoque, nome, navigation, dados]);

  const editarMedicamento = () => {
    navigation.navigate('EditMedicine', {
      medicineName: nome,
    });
  };

  if (minutosAlarme < 10) {
    minutosAlarme = `0${minutosAlarme}`;
  }

  envioMensagem = () => {
    navigation.navigate('SendMessage', {
      medicineName: nome,
    });
  };

  const messageOpen = function messageIconOpen(remedio) {
    let newDosagem = remedio.dosagem * 3;
    let newEstoque = remedio.estoque;

    if (newEstoque <= newDosagem) {
      return true;
    } else {
      return false;
    }
  }



  return (
    <TouchableOpacity style={styles.container} onPress={redirect}>
      <View style={styles.container2}>
        <Text style={styles.text}>{nome}</Text>
        <View style={styles.alignEnd}>
          {messageOpen(remedio) && (
            <TouchableOpacity style={styles.botao} onPress={envioMensagem}>
              <Icon name='message' color={'white'} style={styles.icon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.botao} onPress={editarMedicamento}>
            <Icon name='edit' color={'white'} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={confirmarRemocao}>
            <Icon name='delete' color={'white'} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ProgressBar
        progress={progresso}
        color='#006B65'
        style={styles.progressBar}
      />


      <View style={styles.alignEnd2}>
        <Text style={styles.progressBarText}>
          Doses restantes: {Math.trunc(estoque / dosagem)}
        </Text>
        <View style={styles.alignEnd3}>
          <View style={styles.contentHours}>
            <Icon name='timer' color={'white'} style={styles.miniIcon} />
            <Timer horaTimer={horaTimer} minutoTimer={minutoTimer} segundoTimer={segundoTimer} />
          </View>

          <View style={styles.contentHours}>
            <Icon name='alarm' color={'white'} style={styles.miniIcon} />
            <Text style={styles.text2}>{horasAlarme}:{minutosAlarme}</Text>
          </View>
        </View>
      </View>




    </TouchableOpacity>
  );
}
