import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import History from '../pages/History';
import Medicine from '../pages/Medicine';
import About from '../pages/About';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'user';
                    } else if (route.name === 'Medicine') {
                        iconName = 'user';
                    } else if (route.name === 'History') {
                        iconName = 'history';
                    } else if (route.name === 'About') {
                        iconName = 'info';
                    }

                    return <Icon name={iconName} color={color} size={size} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#222B45',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#003936',
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Medicine" component={Medicine} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    );
}
