import { View, Text } from "react-native";
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RemedioDropdown from '../../Components/Remedio';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function History() {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleLarge}>Baixar relatório de uso</Text>
                </View>
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
                <RemedioDropdown nomeRemedio="Nome do Remedio" />
            </View>
        </KeyboardAwareScrollView>
    )
}