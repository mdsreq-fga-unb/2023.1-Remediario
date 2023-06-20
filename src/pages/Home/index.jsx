import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import { medicamentosDia } from '../../Services/medicamento';
import ListItem from "../../Components/listItem";
import ButtonAddMedicine from "../../Components/ButtonAddMedicine";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";

export default function DailyMedicine({ navigation }) {
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
            data = await medicamentosDia();
        } catch (e) {
            console.log(e);
        }
        setMedicamentos(data);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {medicamentos && medicamentos.data.map((remedio, index) => {
                    return <ListItem remedio={remedio} navigation={navigation} atualizarLista={recarregar} key={index.toString()} />;
                })}
            </ScrollView>
            <ButtonAddMedicine navigation={navigation} />
        </View>
    );
}
