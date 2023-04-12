/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {loginSuccess, logoutSuccess, fetchTodos} from './src/domain/redux/user';
import store from './src/domain/redux/store';
import {ThunkDispatch} from '@reduxjs/toolkit';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          dispatch(loginSuccess(true));
          navigation.navigate('Landing');
        }}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function LandingScreen({navigation}) {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          dispatch(fetchTodos(1235));
          navigation.pop();
        }}>
        <Text>Landing Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
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
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
