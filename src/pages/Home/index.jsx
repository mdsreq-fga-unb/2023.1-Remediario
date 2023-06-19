import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { medicamentosDia } from '../../Services/medicamento';
import ListItem from "../../Components/listItem";
import ButtonAddMedicine from "../../Components/ButtonAddMedicine";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DailyMedicine({ navigation }) {
    const [medicamentos, setMedicamentos] = useState(null);

    useEffect(() => {
        recarregar();
    }, []);

    async function recarregar() {
        let data;
        try {
            data = await medicamentosDia();
        } catch (e) {
            console.log(e);
        }
        setMedicamentos(data);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={recarregar} style={styles.reload}>
                <Icon name='reload' color={'white'} style={styles.reload_Icon}/>
            </TouchableOpacity>
            
            <Text style={styles.text}>Medicamentos do dia</Text>
            <ScrollView>
                {medicamentos && medicamentos.data.map((remedio, index) => {
                    return <ListItem remedio={remedio} atualizarLista={recarregar} key={index.toString()} />;
                })}
            </ScrollView>
            <ButtonAddMedicine navigation={navigation} route={'AddMedicine'} />
            
        </View>
    );
}