import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RemedioForm from '../../Components/RemedioForm/index';
import { SalvarMedicamento, getMedicamento } from '../../Services/medicamento';

export default function EditMedicine({ navigation }) {
  const [remedioData, setRemedioData] = useState(null);

  useEffect(() => {
    const fetchRemedioData = async () => {
      try {
        const nomeRemedio = 'Dipirona'; // Substitua pelo nome do remédio desejado
        const remedio = await getMedicamento(nomeRemedio);
        setRemedioData(remedio);
      } catch (e) {
        console.log(e);
      }
    };

    fetchRemedioData();
  }, []);

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
    <View>
      {remedioData ? (
        <RemedioForm remedio={remedioData} onSave={handleSave} navigation={navigation} />
      ) : (
        <Text>Carregando dados do remédio...</Text>
      )}
    </View>
  );
}
