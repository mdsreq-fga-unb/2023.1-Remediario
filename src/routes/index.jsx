import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import History from '../pages/History';
import Medicine from '../pages/Medicine';
import About from '../pages/About';
import AddRemedio from '../pages/AddRemedio'


const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Medicine" component={Medicine} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="AddRemedio" component={AddRemedio} />
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
