import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Room from './pages/Room';
import Room2 from './pages/Room/index2';

export default function Routes() {
    return(
        <NavigationContainer>

        <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Room" component={Room} />
            <AppStack.Screen name="Room2" component={Room2} />
        </AppStack.Navigator>

        </NavigationContainer>
    );
}
