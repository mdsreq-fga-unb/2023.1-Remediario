import { View, Text, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import { styles } from './styles';
import RemedioDropdown from '../../Components/Remedio';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListarMedicamento } from "../../Services/medicamento";

/*<TouchableOpacity style={styles.downloadContainer}>
    <Text style={styles.titleLarge}>Baixar relatório de uso</Text>
    <FontAwesome5Icon name="download" color='#006B65' size={16} />
</TouchableOpacity>*/

// const list = {data: [
//     {
//         nomeRemedio: "remedioteste",
//         dosagem: 3,
//         estoque: 6,
//         unidadeEstoque: "g",
//         frequencia: 5,
//         unidadeFrequencia: "horas",
//         obs: "observacoes teste 1",
//         ultimoAlarme: "18:14",
//         uso: [new Date()],
//         diaDeUso: new Date(),
//     },
//     {
//         nomeRemedio: "dipironga",
//         dosagem: 1,
//         estoque: 10,
//         unidadeEstoque: "ml",
//         frequencia: 1,
//         unidadeFrequencia: "minutos",
//         obs: "observacoes teste 2",
//         ultimoAlarme: "23:55",
//         uso: [],
//         diaDeUso: new Date(),
//     },
//     {
//         nomeRemedio: "misibulida",
//         dosagem: 5,
//         estoque: 100,
//         unidadeEstoque: "comprimidos",
//         frequencia: 12,
//         unidadeFrequencia: "horas",
//         obs: "observacoes teste 3",
//         ultimoAlarme: "23:59",
//         uso: [],
//         diaDeUso: new Date(),
//     },
// ]}

export default function History() {
    const [list, setlist] = useState(null);

    useEffect(() => {
        recarregar();
    }, []);

    async function recarregar() {
        let data;
        try {
            data = await ListarMedicamento();
        } catch (e) {
            console.log(e);
        }
        setlist(data);
    }
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {list && list.data.map((remedio, index) => {
                    return <RemedioDropdown datas={remedio.uso} nomeRemedio={remedio.nomeRemedio} key={index}/>
                })}
            </View>
        </ScrollView>
    )
}