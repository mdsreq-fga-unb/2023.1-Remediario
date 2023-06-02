import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddRemedio() {
  const [remedio, setRemedio] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [unidade, setUnidade] = useState('comprimidos');
  const [intervalo, setIntervalo] = useState(1);
  const [unidadeIntervalo, setUnidadeIntervalo] = useState('horas');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Remédio</Text>
      <TextInput
        style={styles.input}
        value={remedio}
        onChangeText={setRemedio}
        placeholder="Digite o nome do remédio"
        underlineColor="white"
        placeholderTextColor="white"
      />

      <Text style={styles.label}>Dosagem</Text>
      <View style={styles.ContainerDropdown}>
        <View style={styles.dropdown}>
          <Picker
            style={styles.dropdownPicker}
            selectedValue={quantidade}
            onValueChange={(itemValue) => setQuantidade(itemValue)}
          >
            {Array.from({ length: 1000 }, (_, index) => (
              <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
            ))}
            <Icon name={i % 2 === 0 ? 'check' : 'close'} style={styles.optionIcon} />
          </Picker>
        </View>
        <View style={styles.dropdown}>
          <Picker
            style={styles.dropdownPicker}
            selectedValue={unidade}
            onValueChange={(itemValue) => setUnidade(itemValue)}
          >
            <Picker.Item label="comprimidos" value="comprimidos" />
            <Picker.Item label="ml" value="ml" />
            <Picker.Item label="mg" value="mg" />
          </Picker>
        </View>

        <Text style={styles.secondarylabel}>por dosagem</Text>
      </View>

      <View style={styles.ContainerDropdown}>
        <Text style={styles.secondarylabel}>A cada</Text>
        <View style={styles.dropdown}>
          <Picker
            style={styles.dropdownPicker}
            selectedValue={intervalo}
            onValueChange={(itemValue) => setIntervalo(itemValue)}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropdown}>
          <Picker
            style={styles.dropdownPicker}
            selectedValue={unidadeIntervalo}
            onValueChange={(itemValue) => setUnidadeIntervalo(itemValue)}
          >
            <Picker.Item label="meses" value="meses" />
            <Picker.Item label="dias" value="dias" />
            <Picker.Item label="horas" value="horas" />
            <Picker.Item label="minutos" value="minutos" />
          </Picker>
        </View>
      </View>
    </View>
  );
}
