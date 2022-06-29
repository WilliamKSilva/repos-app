import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types';

import Login from '../screens/Login';
import Home from '../screens/Home';
import RepositoryDetails from '../screens/RepositoryDetails';
import { useTheme } from 'styled-components';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { colors } = useTheme()
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="RepositoryDetails"
          component={RepositoryDetails}
          options={{
            title: 'Detalhes',
            headerTitleStyle: {
              color: colors.white,
            },
            headerTintColor: colors.white,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.secondary
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



