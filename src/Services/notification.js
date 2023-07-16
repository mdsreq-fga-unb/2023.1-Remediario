import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";

//passa os dados do remedio
export const entregaDados = async (prop, text) => {

  let today = new Date();
  let nextDate = new Date(prop.ultimoAlarme);

  let nextAlarm = nextDate.getTime() - today.getTime();
  nextAlarm /= 1000;
  schedulePushNotification(prop, nextAlarm, text);
};

export const schedulePushNotification = async (prop, medicineTimer, text) => {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    Alert.alert("Você não deixou as notificações ativas");
    return;
  } else {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: prop.nomeRemedio,
        body: text,
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

export const schedulePushNotificationSendMessage = async (prop, medicineTimer, text) => {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    Alert.alert("Você não deixou as notificações ativas");
    return;
  } else {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: prop.nomeRemedio,
        body: text,
        data: {
          url: `exp://192.168.42.152:19000/--/remediario/SendMessage?medicineName=${prop.nomeRemedio}`,
        },
      },
      trigger: {
        seconds: medicineTimer,
      },
    });
  }
  return [prop.nomeRemedio, prop.estoque];
};
