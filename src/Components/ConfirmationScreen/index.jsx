import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Confirmacao from '../../pages/ConfirmationMedicine';

const medicineName = "Remedy";
const medicineQuantity = 5;
const Stack = createStackNavigator();

export default function confirmationScreen(){
    return (
        <Stack.Screen
            options={{ headerShown: false }}
            name='Confirmacao' component={Confirmacao}
            initialParams={{ medicineName: medicineName, medicineQuantity: medicineQuantity}}
        />
    )
}