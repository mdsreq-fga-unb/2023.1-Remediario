import React, { useState } from 'react';
import { View, TextInput, Button, Text, Linking } from 'react-native';

export default function SendMessage({ name, navigation }) {
    const [message, setMessage] = useState('');

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
        <View>
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Digite sua mensagem"
                multiline
                style={{ height: 100, width: 300, backgroundColor: '#FFF' }}
            />
            <Button title="Enviar mensagem no WhatsApp" onPress={handleWhatsApp} />
            <Button title="Enviar mensagem por e-mail" onPress={handleEmail} />
            <Button title="Enviar mensagem por mensagem" onPress={handleMessage} />
        </View>
    );
}
