import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './stacks/HomeStack';

const Stack = createNativeStackNavigator<any>();
const AppNavigator: any = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeStack">
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    )
};

export default AppNavigator;
