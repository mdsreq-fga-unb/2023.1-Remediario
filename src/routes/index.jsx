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
import { styles } from './styles';
import Header from '../Components/Header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const medicineName = 'Remedio';
const medicineTimer = 2;
const medicineQuantity = 5;

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
})

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
            <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Home"/>,
                }}
                name="Home"
                component={Home}
            />
             <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Meus Remédios"/>,
                }}
                name="Meus Remédios"
                component={Medicine}
            />
             <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Histórico"/>,
                }}
                name="Histórico"
                component={History}
            />
             <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Adicionar remédio"/>,
                }}
                name="Adicionar remédio"
                component={AddMedicine}
            />
        </Tab.Navigator>
    );
}

async function schedulePushNotification() {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Você não deixou as notificações ativas');
      return;
    }else {
        await Notifications.scheduleNotificationAsync({
            content: {
              title: medicineName,
              body: 'Está na hora de tomar o remédio',
              data: {
                url: 'exp://192.168.42.152:19000/--/remediario/Confirmacao/${medicineName}'
              }
            },
            trigger: {
              seconds: medicineTimer,
            },
        });
    }
}

export default function Routes() {
    return (
        <NavigationContainer linking={{
            prefixes: ['exp://192.168.42.152:19000/--/remediario', 'remediario://', 'com.remediario://'],
            config: {
                screens: {
                    Confirmacao: {
                        path: 'Confirmacao/:id'
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
                <Stack.Screen
                    options={{ headerShown: false }}
                    name='Confirmacao' component={Confirmacao}
                    initialParams={{ medicineName: medicineName, medicineQuantity: medicineQuantity}}
                />
            </Stack.Navigator>
            <TouchableOpacity style={styles.button} onPress={async () => {await schedulePushNotification();}}>
                <Text>Enviar notificação</Text>
            </TouchableOpacity>
        </NavigationContainer>
    );
}
