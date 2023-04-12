import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LandingScreen from './LandingScreen';

export default function StackNavition() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
}
