import { Text } from "react-native";
import { View } from 'react-native';
import { styles } from './styles';
import AddRemedio from '../../Components/RemedioForm/index';
import RemedioForm from '../../Components/RemedioForm';
import React, { useState } from 'react';
import { SalvarMedicamento } from '../../Services/medicamento';

export default function EditMedicine({ navigation }) {
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