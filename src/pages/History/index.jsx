import { View, Text, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import { styles } from './styles';
import RemedioDropdown from '../../Components/Remedio';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListarMedicamento, ListarMedicamentosRemovidos } from "../../Services/medicamento";
import { useIsFocused } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function History() {
    const [list, setlist] = useState(null);
    const [listRemovidos, setlistRemovidos] = useState(null);
    const isFocused = useIsFocused();

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
        setlist(data);

        let dataRemovidos;
        try {
            dataRemovidos = await ListarMedicamentosRemovidos();
        } catch (e) {
            console.log(e);
        }
        setlistRemovidos(dataRemovidos);
    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.titleLarge}>Remédios ativos</Text>
                {list && list.data.map((remedio, index) => {
                    return <RemedioDropdown datas={remedio.uso} remedio={remedio} key={index}/>
                })}
                <Text style={styles.titleLarge}>Remédios removidos</Text>
                {listRemovidos && listRemovidos.data.map((remedio, index) => {
                    return <RemedioDropdown datas={remedio.uso} nomeRemedio={remedio.nomeRemedio} key={index}/>
                })}
            </View>
        </KeyboardAwareScrollView>
    )
}