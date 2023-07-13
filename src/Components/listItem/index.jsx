
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { RemoverMedicamento } from '../../Services/medicamento';
import { ProgressBar } from 'react-native-paper';
import Timer from '../Timer';

export default function ListItem({ remedio, atualizarLista, navigation }) {



  //informações do remedio
  let dados = new Date(remedio.ultimoAlarme);
  let horasAlarme = dados.getHours();
  let minutos = dados.getMinutes();
  let nome = remedio.nomeRemedio;
  let estoque = remedio.estoque;
  let progress = (estoque / remedio.dosagem) / 10;

  //informações do celular
  let now = new Date();

  let tempoMs = dados.getTime() - now.getTime();

  // Converter para segundos
  let segundosTimer = Math.floor(tempoMs / 1000);

  // Calcular horas
  let horasTimer = Math.floor(segundosTimer / 3600);
  segundosTimer = segundosTimer % 3600;

  // Calcular minutos
  let minutosTimer = Math.floor(segundosTimer / 60);
  segundosTimer = segundosTimer % 60;

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

  async function remover() {
    try {
      await RemoverMedicamento(nome);
      atualizarLista();
    } catch (e) {
      console.log(e);
    }
  }

  function redirect() {
    if (estoque == 0) {
      Alert.alert("É preciso repor o estoque para usar o medicamento")
    } else {
      navigation.navigate('Confirmacao', {
        medicineName: nome,
      });
    }
  }

  function editMedicine() {
    // Função para editar o medicamento
    navigation.navigate('EditMedicine', {
      medicineName: nome,
    });
  };

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={redirect}>
      <View style={styles.container2}>
        <Text style={styles.text}>{nome}</Text>
        <View style={styles.alignEnd}>

          <View style={styles.contentHours}>
            <Text style={styles.text2}>
              <Timer horaTimer={horasTimer} minutoTimer={minutosTimer} segundosTimer={segundosTimer} />
            </Text>
          </View>

          <View style={styles.contentHours}>
            <Icon name='alarm' color={'white'} style={styles.miniIcon} />
            <Text style={styles.text2}>{horasAlarme}:{minutos}</Text>
          </View>
          <TouchableOpacity style={styles.botao} onPress={editMedicine}>
            <Icon name='edit' color={'white'} style={styles.icon} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.botao} onPress={confirmarRemocao}>
            <Icon name='delete' color={'white'} style={styles.icon} />
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
  );
}
