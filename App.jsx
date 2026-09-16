import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DevicesScreen from './screens/DevicesScreen';
import DeviceDetailsScreen from './screens/DeviceDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Devices" 
          component={DevicesScreen} 
          options={{ title: 'My Devices' }} 
        />
        <Stack.Screen 
          name="DeviceDetails" 
          component={DeviceDetailsScreen} 
          options={{ title: 'Device Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}