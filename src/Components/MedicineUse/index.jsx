import React from 'react'
import { View } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MedicineUse({variante}) {
  return (
        <View>
            {variante == 'medicineUsed' && 
                <View style={styles.medicineUsed}>
                    <Icon name="check" color="#FFF" size={24}/>
                </View>
            }
            {variante == 'medicineNotUsed' &&
                <View style={styles.medicineNotUsed}>
                    <Icon name="close" color="#2E2E2E" size={24}/>
                </View>
            }
        </View>
        
    )
}
