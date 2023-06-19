import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export default function ButtonAddMedicine({ navigation }) {

    const addMedicine = () => {
        navigation.navigate('AddMedicine');
    };

    return (
        <TouchableOpacity style={styles.add} onPress={addMedicine}>
            <Icon name='add' color={'white'} style={styles.icon} />
        </TouchableOpacity>

    )
}
