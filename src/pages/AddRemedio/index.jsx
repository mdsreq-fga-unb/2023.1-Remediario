import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddRemedio () {
  const [remedio, setRemedio] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [unidade, setUnidade] = useState('comprimidos');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Remédio</Text>
      <TextInput
        style={styles.input}
        value={remedio}
        onChangeText={setRemedio}
        placeholder="Digite o nome do remédio"
      />

      <Text style={styles.label}>Dosagem</Text>
      <View style={styles.dosagemContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={quantidade}
          onValueChange={(itemValue) => setQuantidade(itemValue)}
        >
          {Array.from({ length: 1000 }, (_, index) => (
            <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
          ))}
        </Picker>

        <Picker
          style={styles.dropdown}
          selectedValue={unidade}
          onValueChange={(itemValue) => setUnidade(itemValue)}
        >
          <Picker.Item label="comprimidos" value="comprimidos" />
          <Picker.Item label="ml" value="ml" />
          <Picker.Item label="mg" value="mg" />
        </Picker>

        <Text style={styles.dosagemText}>por dosagem</Text>
      </View>
    </View>
  );
};



