import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";

export default function ConfirmationMedicine({ route, navigation }) {
    const hours = new Date().getHours();
    const min = new Date().getMinutes();

    const {medicineName} = route.params;
    const medicineTotalDailyUse = 5;
    const [medicinesUsed, setMedicinesUsed] = useState(3);

    const [medicineComponents, setMedicineComponents] = useState([]);

    useEffect(() => {
        const components = [];
        
        for (let i = 0; i < medicineTotalDailyUse; i++) {
            if (i < medicinesUsed) {
                components.push(<MedicineUse key={i} variante="medicineUsed"/>);
            } else {
                components.push(<MedicineUse key={i} variante="medicineNotUsed"/>);
            }
        }
        
        setMedicineComponents(components);
    }, [medicinesUsed]);

    //<TouchableOpacity style={styles.delayButton}>
    //  <Text style={styles.textDelayButton}>Adiar 5 minutos</Text>
    //</TouchableOpacity>

    const usoMedicamento = () => {
        setMedicinesUsed(prevUsed => prevUsed + 1);

        setTimeout(() => {
            navigation.navigate("Remédios do dia");
        }, 1000);
    };
    
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.horario}>{hours}:{min}</Text>
                    <Text style={styles.remedio}>{medicineName}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.confirmButton} onPress={usoMedicamento}>
                        <Icon name="check" color="#FFF" size={40}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.medicineUseContainer}>
                    {medicineComponents}
                </View>
            </View>
        </View>
    );
};


