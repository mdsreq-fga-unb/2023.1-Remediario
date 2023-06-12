import * as Notifications from 'expo-notifications';
import {  TouchableOpacity, Text, Linking, Alert } from 'react-native';
import ConfirmationScreen from '../../src/pages/ConfirmationMedicine/index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
});
  
let medicineName = 'Dipirona';
let medicineTimer = 5;

async function schedulePushNotification() {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Você não deixou as notificações ativas');
      return;
    }else {
        await Notifications.scheduleNotificationAsync({
            content: {
              title: medicineName,
              subtitle: 'Está na hora de tomar o remédio',
              data: 'remediario://confirmation/${medicineName}'
            },
            trigger: {
              seconds: medicineTimer,
            },
        });
    }
};

const styles = StyleSheet.create({
    button: {
        padding: 20,
        fontsize: 20,
        textColor: '#FFFFFF',
        backgroundColor: 'red',
    },
});

const linkConfig = {
    prefixes: ['remediario://'], //  <---- 1
    config: {
      screens: {
            Confirmation: { // <---- 3
                exact: true, // <---- 3-a
                path: 'remediario://confirmation/:id', 
              },
            },
          },
    
    getInitialURL: async () => { // <---- 4
    },
    subscribe: listener => { // <---- 5
      // <---- 5.a
      const onReceiveURL = ({url}) => listener(url);
  
      // <---- 5.b
      Linking.addEventListener('url', onReceiveURL);
  
      return () => Linking.removeEventListener('url', onReceiveURL);
    },
  }

export default function PushNotifications(){
    return(
        <TouchableOpacity style={styles.button} onPress={
            async () => {
                await schedulePushNotification();
            }}>
            <Text>Enviar notificação</Text>
        </TouchableOpacity>
    );
}