import React, { useState, useEffect } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import MedicineUse from "../../Components/MedicineUse";
import { getMedicamento, usoMedicamento } from '../../Services/medicamento'
import { useNavigation } from '@react-navigation/native';

export default function ConfirmationMedicine({ route }) {
    const [medicineComponents, setMedicineComponents] = useState([]);
    const [medicinesUsed, setMedicinesUsed] = useState(0);
    const [medicineTotalDailyUse, setMedicineTotalDailyUse] = useState(0);
    const [medicine, setMedicine] = useState(null);

    let {medicineName} = route.params;

    useEffect(() => {
        fetchRemedioData();
        contarDiasRepetidos();
        contarUsos();
    }, [medicine,]);

    const fetchRemedioData = async () => {
        try {
            const remedio = await getMedicamento(medicineName);
            setMedicine(remedio);
        } catch (e) {
            console.log(e);
        }
    };

    const contarDiasRepetidos = () => {
        if (!medicine) {
            return null;
        }else{
            const contagemDias = {};
            const usos = medicine.uso;
            // Itera sobre o array de datas e conta a repetição dos dias
            usos.forEach((uso) => {
              const datas2 = new Date(uso);
              let dia = datas2.getDate();
        
              // Verifica se o dia já existe no objeto de contagem
              if (contagemDias[dia]) {
                // Se existir, incrementa a contagem
                contagemDias[dia]++;
              } else {
                // Caso contrário, inicializa a contagem com 1
                contagemDias[dia] = 1;
              }
            });

            return contagemDias;
        }
    };

    const contarUsos = () => {
        if (!medicine) {
            return null;
        }else{
            const contagemDias = contarDiasRepetidos();
            let usos = medicine.uso;
            return (
                usos.map((uso) => {
                    const datas2 = new Date(uso);
                    let day = datas2.getDate();

                    let quantidadeDiaria;
                    switch (medicine.unidadeFrequencia) {
                    case "meses":
                        quantidadeDiaria = 1
                        break;
                    case "dias":
                        quantidadeDiaria = 1
                        break;
                    case "horas":
                        quantidadeDiaria =  24 / medicine.frequencia
                        break;
                    case "minutos":
                        quantidadeDiaria = 1440 / medicine.frequencia 
                        break;
                    }
                    quantidadeDiaria = Math.trunc(quantidadeDiaria)
                    setMedicineTotalDailyUse(quantidadeDiaria)
                    setMedicinesUsed(contagemDias[day])
                    renderComponents();
                })
            );
        }
    };

    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < medicineTotalDailyUse; i++) {
            if (i < medicinesUsed) {
                components.push(<MedicineUse key={i} variante="medicineUsed"/>);
            } else {
                components.push(<MedicineUse key={i} variante="medicineNotUsed"/>);
            }
        }
        setMedicineComponents(components);
    }

    const navigation = useNavigation();
    const usoDeMedicamento = () => {
        usoMedicamento(medicineName);
        setTimeout(() => {
            navigation.navigate("Remédios do dia");
        }, 1000);
    };

    let hours = new Date().getHours();
    let min = new Date().getMinutes();

    if (min < 10){
        min = "0" + min;
    }
    if (hours < 10){
        hours = "0" + hours;
    }

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
                        <Icon name="add" color="#FFF" size={30}/>
                        <Text style={styles.textDelayButton}>5 minutos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.medicineUseContainer}>
                    {medicineComponents}
                </View>
            </View>
        </View>
    );
};

