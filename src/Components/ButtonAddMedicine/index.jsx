import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export default function ButtonAddMedicine({ navigation, route }) {

    const addMedicine = () => {
        navigation.navigate(route);
    };

    return (
        <TouchableOpacity style={styles.add} onPress={addMedicine}>
            <Icon name='add' color={'white'} style={styles.icon} />
        </TouchableOpacity>

    )
}
