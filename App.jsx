import Routes from './src/routes';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
    
  }),
});


let medicineName = 'Dipirona';
let medicineTimer = 5;

export default function App() {
  handleNotifications = async () => {

    const {status} = await Notifications.getPermissionsAsync();

    if(status !== 'granted'){
      Alert.alert("Você não deixou as notificações ativas");

      return;
    }
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: medicineName,
        body: 'Está na hora de tomar o remédio',
      },
      trigger: {
        seconds: medicineTimer,
      },
    })
  }

  return (
    <>
      <Routes />
      <Button style={styles.button} title="Enviar notificação" onPress={handleNotifications} />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    fontsize: 20,
    textColor: '#FFFFFF',
    backgroundColor: 'red',
  },
});


