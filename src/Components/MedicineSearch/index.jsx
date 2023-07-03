import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { getMedicamento } from '../../Services/medicamento';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from "../../Components/listItem";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

const MedicamentoSearch = () => {
  const navigation = useNavigation();
  const [nomeRemedio, setNomeRemedio] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(false);

  const buscarMedicamento = async () => {
    try {
      const medicamento = await getMedicamento(nomeRemedio);
      if (medicamento) {
        setResultado(medicamento);
        setErro(false);
      } else {
        setResultado(null);
        setErro(true);
      }
      setNomeRemedio('');
    } catch (e) {
      console.log(e);
      setResultado(null);
    }
  };

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <Icon name="search" size={20} color="white" onPress={buscarMedicamento} style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Digite o nome do remédio..."
            placeholderTextColor="white"
            value={nomeRemedio}
            onChangeText={setNomeRemedio}
          />
        </View>
      </View>
      <View>
      {erro ? (
          <Text style={styles.errorMessage}>Remédio não encontrado</Text>
        ) : (
          resultado && (
            <View style={styles.resultContainer}>
              <ListItem remedio={resultado} navigation={navigation} atualizarLista={buscarMedicamento} />
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default MedicamentoSearch;