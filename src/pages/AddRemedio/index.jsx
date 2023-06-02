import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddRemedio() {
  const [remedio, setRemedio] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [quantidade2, setQuantidade2] = useState(1);
  const [unidade, setUnidade] = useState('comprimidos');
  const [intervalo, setIntervalo] = useState(1);
  const [unidadeIntervalo, setUnidadeIntervalo] = useState('horas');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [observacoes, setObservacoes] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              mode="dialog"
            >
              {Array.from({ length: 1000 }, (_, index) => (
                <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
              ))}
            </Picker>
            <Icon
              name={isDropdownOpen ? 'angle-up' : 'angle-down'}
              style={styles.icon}
            />
          </View>
          <View style={styles.dropdown}>
            <Picker
              style={styles.dropdownPicker}
              selectedValue={unidade}
              onValueChange={(itemValue) => setUnidade(itemValue)}
              mode="dialog"
            >
              <Picker.Item label="comprimidos" value="comprimidos" />
              <Picker.Item label="g" value="g" />
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

        <Text style={styles.label}>Quantidade Total</Text>
        <View style={styles.ContainerDropdown}>
          <View style={styles.dropdown}>
            <Picker
              style={styles.dropdownPicker}
              selectedValue={quantidade2}
              onValueChange={(itemValue) => setQuantidade2(itemValue)}
              mode="dialog"
            >
              {Array.from({ length: 1000 }, (_, index) => (
                <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
              ))}
            </Picker>
            <Icon
              name={isDropdownOpen ? 'angle-up' : 'angle-down'}
              style={styles.icon}
            />
          </View>
          <View style={styles.dropdown}>
            <Picker
              style={styles.dropdownPicker}
              selectedValue={unidade}
              onValueChange={(itemValue) => setUnidade(itemValue)}
              mode="dialog"
            >
              <Picker.Item label="comprimidos" value="comprimidos" />
              <Picker.Item label="g" value="g" />
              <Picker.Item label="ml" value="ml" />
              <Picker.Item label="mg" value="mg" />
            </Picker>
          </View>

          <Text style={styles.secondarylabel}>no total</Text>
        </View>

        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={styles.input}
          value={observacoes}
          onChangeText={setObservacoes}
          placeholder="Digite suas observações..."
          multiline
          underlineColor="white"
          placeholderTextColor="white"
        />

        <Text style={styles.label}>Começar Alarme</Text>
      </View>
    </ScrollView>
  );
}
