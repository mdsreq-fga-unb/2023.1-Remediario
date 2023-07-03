import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RemedioForm from '../../Components/RemedioForm/index';
import { getMedicamento, EditarMedicamento } from '../../Services/medicamento';

export default function EditMedicine({ route, navigation }) {
  const [remedioData, setRemedioData] = useState(null);

let {medicineName} = route.params;

  useEffect(() => {
    const fetchRemedioData = async () => {
      try {
        const remedio = await getMedicamento(medicineName);
        setRemedioData(remedio);
      } catch (e) {
        console.log(e);
      }
    };

    fetchRemedioData();
  }, []);

  return (
    <View>
      {remedioData ? (
        <RemedioForm
          remedio={remedioData}
          navigation={navigation}
          execute={EditarMedicamento}
        />
        
      ) : (
        <Text>Carregando dados do remédio...</Text>
      )}
    </View>
  );
}
