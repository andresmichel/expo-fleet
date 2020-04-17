import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import DetailScreen from '../screens/DetailScreen';
import CompleteScreen from '../screens/CompleteScreen';

const Stack = createStackNavigator();

function LinksStack() {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Links" component={LinksScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Complete" component={CompleteScreen} />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Home" component={LinksStack} />
            <Stack.Screen name="SignIn" component={HomeScreen} />
        </Stack.Navigator>
    )
}
