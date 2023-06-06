import React from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../pages/Home';
import History from '../pages/History';
import Medicine from '../pages/Medicine';
import About from '../pages/About';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EditMedicine from '../pages/EditMedicine';

const Tab = createBottomTabNavigator();

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
            <Tab.Screen name="Editar Remedios" component={EditMedicine} />
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

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    );
}
