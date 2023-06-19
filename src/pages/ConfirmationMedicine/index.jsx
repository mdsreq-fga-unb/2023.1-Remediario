import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";
import { useRoute } from '@react-navigation/native';

export default function ConfirmationMedicine({ navigation }) {
    const route = useRoute();
    useEffect(() => {
    // Acessar os parâmetros do deep link
        const { params } = route;

    // Fazer o que for necessário com os parâmetros do deep link
        console.log('Parâmetros do deep link:', params);
    }, []);

    const { medicineName } = route.params.nome; //props.match.params.id;
    const { medicineTotalDailyUse } = route.params.quantidade;

    let hours = new Date().getHours(); //To get the Current Hours
    let min = new Date().getMinutes(); //To get the Current Minutes

    const [componentes, setComponentes] = useState();
    const [indiceAtual, setIndiceAtual] = useState(0);

    const quantidadeUso = 2;

    for (let i = 0; i < quantidadeUso; i++) {
        if (componentes[i].variante === "medicineUsed") {
        }
    }

    setComponentes(
        Array.from({ length: medicineTotalDailyUse }, (_, index) => ({
            key: index,
            usos
        }))
    )

    const mudarVariante = () => {       
        setComponentes((prevState) => {
            const updatedComponentes = [...prevState];
            const componenteAtual = updatedComponentes[indiceAtual];
            componenteAtual.variante = componenteAtual.variante === 'medicineNotUsed' ? "medicineUsed" : 'medicineUsed';
            
            if (indiceAtual === medicineTotalDailyUse - 1) {
                updatedComponentes.forEach((componente) => {
                    componente.variante = "medicineNotUsed";
                });
            }
            
            return updatedComponentes;
        });

    setIndiceAtual((prevIndice) => (prevIndice + 1) % medicineTotalDailyUse);

    //SE ABERTO NA TELA PELA PRIMEIRA VEZ NAO NAVEGA PARA HOME (usar deeplink?)
    setTimeout(() => {
        navigation.navigate("Remédios do dia");
      }, 1000);
  };

    //<TouchableOpacity style={styles.delayButton}>
    //  <Text style={styles.textDelayButton}>Adiar 5 minutos</Text>
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


