import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { navigationRef } from './RootNavigation';

const NavContainer: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <AppNavigator />
  </NavigationContainer>
);

export default NavContainer;
