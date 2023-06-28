import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import RemedioForm from '../../Components/RemedioForm';
import { SalvarMedicamento } from '../../Services/medicamento';

export default function AddRemedio({ navigation }) {
  const handleSave = async (remedio) => {
    try {
      await SalvarMedicamento(remedio);
      console.log('Medicamento Salvo');
      setTimeout(() => {
        navigation.navigate('Remédios do dia');
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <RemedioForm onSave={handleSave} navigation={navigation} />
    </View>
  );
}


