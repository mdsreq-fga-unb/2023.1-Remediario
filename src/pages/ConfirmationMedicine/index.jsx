import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";

export default function ConfirmationMedicine({ route, navigation }) {
    const { medicineName } = route.params;
    const { medicineQuantity } = route.params;

    let hours = new Date().getHours(); //To get the Current Hours
    let min = new Date().getMinutes(); //To get the Current Minutes

    const [componentes, setComponentes] = useState(
        Array.from({ length: medicineQuantity }, (_, index) => ({
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
            
            if (indiceAtual === medicineQuantity - 1) {
                updatedComponentes.forEach((componente) => {
                    componente.variante = "medicineNotUsed";
                });
            }
            
            return updatedComponentes;
        });

    setIndiceAtual((prevIndice) => (prevIndice + 1) % medicineQuantity);
    
    //SE ABERTO NA TELA PELA PRIMEIRA VEZ NAO NAVEGA PARA HOME (usar deeplink?)
    setTimeout(() => {
        navigation.navigate('Home');
      }, 1000);
  };

    //<TouchableOpacity style={styles.delayButton}>
    //                    <Text style={styles.textDelayButton}>Adiar 5 minutos</Text>
    //</TouchableOpacity>
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.horario}>{hours}:{min}</Text>
                    <Text style={styles.remedio}>{medicineName}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.confirmButton} onPress={mudarVariante}>
                        <Icon name="check" color="#FFF" size={40}/>
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
        </View>
    );
};


