
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RemoverMedicamento } from '../../Services/medicamento';
import { ProgressBar } from 'react-native-paper';
import Timer from '../Timer';

export default function ListItem({ remedio, atualizarLista, navigation }) {



  //informações do remedio
  let today = new Date(remedio.ultimoAlarme);
  let horas = today.getHours();
  let minutos = today.getMinutes();
  let secunds = today.getSeconds();
  let nome = remedio.nomeRemedio;
  let estoque = remedio.estoque;
  let progress = (estoque / remedio.dosagem) / 10;

  //informações do celular
  let date = new Date();
  let horaAtual = date.getHours();
  let minutoAtual = date.getMinutes();
  let segundoAtual = date.getSeconds();

  // Informações para o Timer
  let horaTimer = horas - horaAtual;
  let minutoTimer = minutos - minutoAtual;
  let segundosTimer = secunds - segundoAtual;

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
    navigation.navigate('Confirmacao', {
      medicineName: nome,
    });
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
              <Timer horaTimer={horaTimer} minutoTimer={minutoTimer} segundosTimer={segundosTimer} />
            </Text>
          </View>

          <View style={styles.contentHours}>
            <Icon name='clock' color={'white'} style={styles.miniIcon} />
            <Text style={styles.text2}>{horas}:{minutos}</Text>
          </View>
          <TouchableOpacity style={styles.botao} onPress={editMedicine}>
            <Icon name='pencil' color={'white'} style={styles.icon} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.botao} onPress={confirmarRemocao}>
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
  );
}
