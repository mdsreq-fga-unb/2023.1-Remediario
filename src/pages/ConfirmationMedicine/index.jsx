import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";
import { getMedicamento, usoMedicamento } from '../../Services/medicamento'
import { useNavigation } from '@react-navigation/native';

export default function ConfirmationMedicine({ route }) {
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    const navigation = useNavigation();

    if (min < 10){
        min = "0" + min;
    }
    if (hours < 10){
        hours = "0" + hours;
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

        setMedicineQuantidade(medicine.qtd + 1);
        setMedicineTotalDailyUse((medicinesUsed + medicineQuantidade));
        //console.log("total: " + medicinesUsed + "+" + medicineQuantidade)
    }, [medicinesUsed, medicineQuantidade, medicine]);

    async function integracaoBackend(){
        try{
            let medicine2 = await getMedicamento(medicineName);
            setMedicine(medicine2);

            /*let diaAtual = new Date();
            let tamanho = medicine.estoque;
            for (let i = 0; i < tamanho; i++) {
                if (medicine.uso[i].getDate() === diaAtual) {
                    setMedicinesUsed(prevUsed => prevUsed + 1);
                }
            }*/

        }catch(e){
            console.log(e);
        }
    }

    const usoDeMedicamento = () => {
        usoMedicamento(medicineName);
        console.log("used: " + medicinesUsed)
        setTimeout(() => {
            navigation.navigate("Remédios do dia");
        }, 1000);
    };

    return (
        <View style={styles.outContainer}>
            <View style={styles.inContainer}>
                <View style={styles.header}>
                    <Text style={styles.horario}>{hours}:{min}</Text>
                    <Text style={styles.remedio}>{medicineName}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.confirmButton} onPress={usoDeMedicamento}>
                        <Icon name="check" color="#FFF" size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delayButton}>
                        <Text style={styles.textDelayButton}>Adiar 5 minutos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.medicineUseContainer}>
                    {medicineComponents}
                </View>
            </View>
        </View>
    );
};