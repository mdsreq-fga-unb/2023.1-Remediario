import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";
import { getMedicamento, usoMedicamento } from '../../Services/medicamento'

export default function ConfirmationMedicine({ route, navigation }) {
    const hours = new Date().getHours();
    const min = new Date().getMinutes();

    if (min < 10){
        min = "0" + diaDeUso.getMinutes
    }

    let {medicineName} = route.params;

    const [medicinesUsed, setMedicinesUsed] = useState(0);
    const [medicineComponents, setMedicineComponents] = useState([]);
    const [medicine, setMedicine] = useState({qtd: 0});
    const [medicineTotalDailyUse, setMedicineTotalDailyUse] = useState(0);
    const [medicineQuantidade, setMedicineQuantidade] = useState(0);

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
        integracaoBackend();
    
        setMedicineQuantidade(medicine.qtd);
        setMedicineTotalDailyUse((medicinesUsed + medicineQuantidade));
    }, [medicinesUsed, medicineQuantidade, medicine]);

    async function integracaoBackend(){
        try{
            let medicine2 = await getMedicamento(medicineName);
            setMedicine(medicine2);
        }catch(e){
            console.log(e);
        }
    }

    const usoDeMedicamento = () => {
        setMedicinesUsed(prevUsed => prevUsed + 1);
        //usoMedicamento(medicineName);

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
                    <TouchableOpacity style={styles.confirmButton} onPress={usoDeMedicamento}>
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

//<TouchableOpacity style={styles.delayButton}>
//  <Text style={styles.textDelayButton}>Adiar 5 minutos</Text>
//</TouchableOpacity>


