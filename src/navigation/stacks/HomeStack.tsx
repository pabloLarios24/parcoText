import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackParams } from '../types';
import Home from '../../screens/Home'
import ProductList from '../../screens/ProductList'
import ScanCodeBar from '../../screens/ScanBarCode'

const HomeStack: React.FC = () => {
  const Stack = createNativeStackNavigator<HomeStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: { color: 'black', fontWeight: 'bold' },
        animation: 'slide_from_right',
      }}
      initialRouteName="Home"
      id="HomeStack"
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{  title: 'Home', headerBackVisible: false }} 
        initialParams={{barcode: null}}
      />
      <Stack.Screen name="ProductList" component={ProductList} options={{  title: 'Productos Registrados' }} />
      <Stack.Screen name="ScanCodeBar" component={ScanCodeBar} options={{  title: 'Escaner' }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
