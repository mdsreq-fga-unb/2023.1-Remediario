import React from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';
import Home from '../pages/Home';
import History from '../pages/History';
import Medicine from '../pages/Medicine';
import { createStackNavigator } from '@react-navigation/stack';
import Confirmacao from '../pages/ConfirmationMedicine';
import About from '../pages/About';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AddMedicine from '../pages/AddRemedio/index';
import * as Notifications from 'expo-notifications';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
});

function TabRoutes() {
    const sizeIcons = 24; // Define o tamanho dos ícones como 24px
    const isMedicineFocused = useIsFocused();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (color !== 'yellow') color = 'white'; // Define a cor dos ícones não selecionados como branco (padrão)

                    if (route.name === 'Home') {
                        iconName = 'white-balance-sunny';
                    } else if (route.name === 'Meus Remédios') {
                        iconName = 'prescription-bottle'; // Nome do ícone correspondente em FontAwesome5
                    } else if (route.name === 'Histórico') {
                        iconName = 'history';
                    } else if (route.name === 'Editar Remedios' && isMedicineFocused) {
                        iconName = 'pencil';
                    }

                    if (route.name === 'Meus Remédios') {
                        return (
                            <FontAwesome5Icon name={iconName} color={color} size={sizeIcons - 5} />
                        );
                    } else {
                        return <Icon name={iconName} color={color} size={sizeIcons} />;
                    }
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: -4,
                },
                tabBarStyle: [styles.tabBarStyle, styles.alignLeft],
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'yellow', // Define a cor do ícone selecionado como amarelo
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Meus Remédios" component={Medicine} />
            <Tab.Screen name="Histórico" component={History} />
            <Tab.Screen name="Adicionar remédio" component={AddMedicine} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#006B65',
        height: 60,
        borderTopWidth: 0,
        paddingEnd: 200, // Adiciona o espaçamento horizontal
    },
    alignLeft: {
        alignItems: 'flex-start', // Alinha os ícones à esquerda
        justifyContent: 'flex-start', // Alinha os ícones ao topo
    },
});

let medicineName = 'Dipirona';
let medicineTimer = 2;

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
              data: {
                url: 'exp://192.168.42.152:19000//--/remediario/Confirmacao'
              }
            },
            trigger: {
              seconds: medicineTimer,
            },
        });
    }
};

export default function Routes() {
    return (
        <NavigationContainer linking={{
            prefixes: ['exp://192.168.42.152:19000/--/remediario'],
            config: {
                screens: {
                    Confirmacao: {
                        path: 'Confirmacao'
                    }
                }
            },

            async getInitialURL() {
                // First, you may want to do the default deep link handling
                // Check if app was opened from a deep link
                const url = await Linking.getInitialURL();

                if (url != null) {
                  return url;
                }
      
                // Handle URL from expo push notifications
                const response = await Notifications.getLastNotificationResponseAsync();

                return response?.notification.request.content.data.url;
              },
            subscribe(listener) {
                const onReceiveURL = ({url}) => listener(url);

                // Listen to incoming links from deep linking
                const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL);

                // Listen to expo push notifications
                const subscription = Notifications.addNotificationResponseReceivedListener(response => {
                const url = response.notification.request.content.data.url;
                    listener(url);
                });

                return () => {
                    // Clean up the event listeners
                    eventListenerSubscription.remove();
                    subscription.remove();
                };
            },
        }}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={TabRoutes}/>
                <Stack.Screen options={{ headerShown: false }} name='Confirmacao' component={Confirmacao}/>
            </Stack.Navigator>
            <TouchableOpacity style={styles.button} onPress={async () => {await schedulePushNotification();}}>
                <Text>Enviar notificação</Text>
            </TouchableOpacity>
        </NavigationContainer>
    );
}
