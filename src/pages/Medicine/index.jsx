import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import { ListarMedicamento } from '../../Services/medicamento';
import ListItem from "../../Components/listItem";
import ButtonAddMedicine from "../../Components/ButtonAddMedicine";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import MedicamentoSearch from "../../Components/MedicineSearch/index";

export default function Medicine({ navigation }) {
    const isFocused = useIsFocused();
    const [medicamentos, setMedicamentos] = useState(null);

    useEffect(() => {
        if (isFocused) {
            recarregar();
        }
    }, [isFocused]);

    async function recarregar() {
        let data;
        try {
            data = await ListarMedicamento();
        } catch (e) {
            console.log(e);
        }
        setMedicamentos(data);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <MedicamentoSearch/>
                {medicamentos && medicamentos.data.map((remedio, index) => {
                    return <ListItem 
                        remedio={remedio} 
                        navigation={navigation}
                        atualizarLista={recarregar} 
                        key={index.toString()} 
                    />;
                })}
            </ScrollView>
            <ButtonAddMedicine navigation={navigation} route={'AddMedicine'} />
        </View>
    )
}