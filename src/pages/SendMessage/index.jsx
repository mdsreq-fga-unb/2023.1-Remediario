import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Linking } from 'react-native';
import { getMedicamento } from '../../Services/medicamento';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SendMessage({ route }) {
    const [message, setMessage] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState(false);

    let { medicineName } = route.params;

    useEffect(() => {
        buscarMedicamento();
    }, []);

    async function buscarMedicamento() {
        try {
            const medicamento = await getMedicamento(medicineName);
            if (medicamento) {
                setResultado(medicamento);
                setErro(false);
                setMessage(`Olá, gostaria de solicitar uma nova receita do medicamento ${medicamento.nomeRemedio}.`);
            } else {
                setResultado(null);
                setErro(true);
            }
        } catch (e) {
            console.log(e);
            setResultado(null);
        }
    }

    async function handleWhatsApp() {
        await Linking.openURL(`whatsapp://send?text=${message}`);
    }

    async function handleEmail() {
        await Linking.openURL(`mailto:?body=${message}`);
    }

    async function handleMessage() {
        await Linking.openURL(`sms:?body=${message}`);
    }

    return (
        <View style={styles.container}>
            {resultado && (
                <Text style={styles.text1}>
                    Seu remédio nomeado <Text style={styles.destaque}>{resultado.nomeRemedio}</Text> tem atualmente <Text style={styles.destaque}>{resultado.estoque} {resultado.unidadeEstoque}.</Text>
                </Text>
            )}

            {!resultado && (
                <Text>
                    Não foi possível obter informações sobre o medicamento.
                </Text>
            )}

            <Text style={styles.text2}>
                Envie uma mensagem para o(a) médico(a) solicitando uma nova receita!
            </Text>
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Digite sua mensagem"
                multiline
                style={styles.input}

            />
            <TouchableOpacity onPress={handleWhatsApp} style={styles.botao}>
                <Icon name="message" size={30} color="#FFF" />
                <Text style={styles.text3} >WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEmail} style={styles.botao}>
                <Icon name="email" size={30} color="#FFF" />
                <Text style={styles.text3}>E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMessage} style={styles.botao}>
                <Icon name="sms" size={30} color="#FFF" />
                <Text style={styles.text3}>Mensagem</Text>
            </TouchableOpacity>
        </View>
    );
}
