import { View, Text } from "react-native";
import { styles } from './styles';
import RemedioDropdown from '../../Components/Remedio';


export default function Medicine() {
    return (
        <View style={styles.container}>
<<<<<<< HEAD
            <Text style={styles.text}>Meus Remedios</Text>
=======
            <Text style={styles.text}>TODOS OS MEDICAMENTOS</Text>
            <RemedioDropdown nomeRemedio="Nome do Remedio" />
>>>>>>> origin/dev
        </View>
        
    )
}