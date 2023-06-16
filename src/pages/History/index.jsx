import { View, Text, ScrollView } from "react-native";
import { styles } from './styles';
import RemedioDropdown from '../../Components/Remedio';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function History() {
    return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.downloadContainer}>
                        <Text style={styles.titleLarge}>Baixar relatório de uso</Text>
                        <FontAwesome5Icon name="download" color='#006B65' size={16} />
                    </TouchableOpacity>
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
            </ScrollView>
    )
}