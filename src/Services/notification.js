import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';


//passa os dados do remedio
export const entregaDados = async (prop) => {
  /*let storage;  
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
    }*/
    
  let today = new Date();
  let nextDate = new Date(prop.ultimoAlarme);

  let nextAlarm = nextDate.getTime() - today.getTime();
  nextAlarm /= 1000;
  schedulePushNotification(prop, nextAlarm);
};

export const schedulePushNotification = async (prop, medicineTimer) => {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    Alert.alert("Você não deixou as notificações ativas");
    return;
  } else {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: prop.nomeRemedio,
        body: "Está na hora de tomar o remédio",
        data: {
          url: `exp://192.168.42.152:19000/--/remediario/Confirmacao?medicineName=${prop.nomeRemedio}`,
        },
      },
      trigger: {
        seconds: medicineTimer,
      },
    });
  }
  return [prop.nomeRemedio, prop.estoque];
};
