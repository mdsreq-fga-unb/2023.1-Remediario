import { View, Text } from "react-native";
import { styles } from './styles';
import RemedioDropdown from '../../Components/Remedio';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function History() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Junho</Text>
                <Icon name='download' color='white' size='24' />
            </View>
            <RemedioDropdown nomeRemedio="Nome do Remedio" />
        </View>
    )
}