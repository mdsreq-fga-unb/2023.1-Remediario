import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from './styles';
import { ListarMedicamento } from '../../Services/medicamento';
import ListItem from "../../Components/listItem";
import ButtonAddMedicine from "../../Components/ButtonAddMedicine";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { getMedicamento } from '../../Services/medicamento';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Medicine({ navigation }) {
    const isFocused = useIsFocused();
    const [medicamentos, setMedicamentos] = useState([]);
    const [nomeRemedio, setNomeRemedio] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState(false);

    const buscarMedicamento = async () => {
        try {
            const medicamento = await getMedicamento(nomeRemedio);
            if (medicamento) {
                setResultado(medicamento);
                setErro(false);
                setMedicamentos([]);
            } else {
                setResultado(null);
                setErro(true);
            }   
            setNomeRemedio('');
        } catch (e) {
            console.log(e);
            setResultado(null);
        }
    }

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
        setMedicamentos(data.data);
        setResultado(null);
        setErro(false);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.inputContainer}>
                <View style={styles.textInputContainer}>
                <Icon name="search" size={20} color="white" onPress={buscarMedicamento} style={styles.searchIcon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite o nome do remédio..."
                    placeholderTextColor="white"
                    value={nomeRemedio}
                    onChangeText={setNomeRemedio}
                />
                </View>
            </View>
            <View>
            {erro ? (
                <Text style={styles.errorMessage}>Remédio não encontrado</Text>
                ) : (
                resultado && (
                    <View style={styles.resultContainer}>
                    <ListItem remedio={resultado} navigation={navigation} atualizarLista={buscarMedicamento} />
                    </View>
                )
                )}
            </View>
                {medicamentos && medicamentos.map((remedio, index) => {
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
