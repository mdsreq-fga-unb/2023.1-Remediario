import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Linking } from 'react-native';
import Home from '../pages/Home';
import History from '../pages/History';
import Medicine from '../pages/Medicine';
import EditMedicine from '../pages/EditMedicine';
import { createStackNavigator } from '@react-navigation/stack';
import Confirmacao from '../pages/ConfirmationMedicine';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AddMedicine from '../pages/AddMedicine/index';
import * as Notifications from 'expo-notifications';
import { styles } from './styles';
import Header from '../Components/Header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
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
                    if (color !== '#006B65') color = 'white'; // Define a cor dos ícones não selecionados como branco (padrão)

                    if (route.name === "Remédios do dia") {
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
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarActiveBackgroundColor:  '#006B65', // Define a cor do ícone selecionado como amarelo
                tabBarVisible: false, // Não mostrar a aba na barra de navegação
            })}
        >
            <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Remédios do dia" />,
                    headerRight: () => <Icon name='white-balance-sunny' color='#003936' size={sizeIcons} />,
                    headerRightContainerStyle: styles.headerRightContainerStyle,
                }}
                name="Remédios do dia"
                component={Home}
            />
            <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Meus Remédios" />,
                    headerRight: () => <FontAwesome5Icon name='prescription-bottle' color='#003936' size={sizeIcons - 5} />,
                    headerRightContainerStyle: styles.headerRightContainerStyle,
                }}
                name="Meus Remédios"
                component={Medicine}
            />
            <Tab.Screen
                options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela="Histórico" />,
                    headerRight: () => <Icon name='history' color='#003936' size={sizeIcons} />,
                    headerRightContainerStyle: styles.headerRightContainerStyle,
                }}
                name="Histórico"
                component={History}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer
            linking={{
                prefixes: ['exp://192.168.42.152:19000/--/remediario', 'remediario://', 'com.remediario://'],
                config: {
                    screens: {
                        Confirmacao: {
                            path: 'Confirmacao',
                            parse: {
                                medicineName: (medicineName) => decodeURIComponent(medicineName),
                            },
                            stringify: {
                                medicineName: (medicineName) => encodeURIComponent(medicineName),
                            },
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
                    const onReceiveURL = ({ url }) => listener(url);

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
                <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={TabRoutes} />
                <Stack.Screen options={{ headerShown: false }} name='Confirmacao' component={Confirmacao} />
                <Stack.Screen
                    options={{
                        headerStyle: styles.header,
                        headerTitle: () => <Header nomeTela='Novo Remédio' />,
                        headerLeftContainerStyle: styles.headerLeftContainerStyle,
                        headerTintColor: 'white',
                    }}
                    name='AddMedicine' component={AddMedicine}
                />
                <Stack.Screen options={{
                    headerStyle: styles.header,
                    headerTitle: () => <Header nomeTela='Editar Remédio' />,
                }} name='EditMedicine' component={EditMedicine} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}