import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";

export default function ConfirmationMedicine ({ navigation }) {
    let hours = new Date().getHours(); //To get the Current Hours
    let min = new Date().getMinutes(); //To get the Current Minutes
    let quantidade = 3;

    const [componentes, setComponentes] = useState(
        Array.from({ length: quantidade }, (_, index) => ({
          key: index,
          variante: "medicineNotUsed",
        }))
    );

    const [indiceAtual, setIndiceAtual] = useState(0);

    const mudarVariante = () => {
        setComponentes((prevState) => {
            const updatedComponentes = [...prevState];
            const componenteAtual = updatedComponentes[indiceAtual];
            componenteAtual.variante = componenteAtual.variante === 'medicineNotUsed' ? "medicineUsed" : 'medicineUsed';
            
            if (indiceAtual === quantidade - 1) {
                updatedComponentes.forEach((componente) => {
                    componente.variante = "medicineNotUsed";
                });
            }
            
            return updatedComponentes;
        });

    setIndiceAtual((prevIndice) => (prevIndice + 1) % quantidade);
    
    setTimeout(() => {
        navigation.navigate('Home');
      }, 1000);
  };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.horario}>{hours}:{min}</Text>
                <Text style={styles.remedio}>Dipirona</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.confirmButton} onPress={mudarVariante}>
                    <Icon name="check" color="#FFF" size={40}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.delayButton}>
                    <Text style={styles.textDelayButton}>+5</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.medicineUseContainer}>
                {componentes.map((componente, index) => (
                    <MedicineUse
                    key={componente.key}
                    variante={componente.variante}
                    onPress={() => mudarVariante(index)}
                    />
                ))}
            </View>
        </View>
    );
};



