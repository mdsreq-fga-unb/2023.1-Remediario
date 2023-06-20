import { View, Text, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import { styles } from './styles';
import RemedioDropdown from '../../Components/Remedio';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListarMedicamento } from "../../Services/medicamento";
import { useIsFocused } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function History() {
    const [list, setlist] = useState(null);
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
    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                {list && list.data.map((remedio, index) => {
                    return <RemedioDropdown datas={remedio.uso} nomeRemedio={remedio.nomeRemedio} key={index}/>
                })}
            </View>
        </KeyboardAwareScrollView>
    )
}