import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from './styles';
import { medicamentosDia } from '../../Services/medicamento';
import ListItem from "../../Components/listItem";

export default function DailyMedicine() {
    const [medicamentos, setMedicamentos] = useState(null);

    useEffect(() => {
        recarregar();
    }, [medicamentos]);

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
            {medicamentos && medicamentos.data.map((remedio, index) => {
                return <ListItem remedio={remedio} key={index} atualizarLista={recarregar} />;
            })}
        </View>
    );
}
