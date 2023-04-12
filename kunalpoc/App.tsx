/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/data/redux/store';
import StackNavition from './src/presentation/StackNavition';
import {Provider} from 'react-redux';
import {ThemeProvider} from './src/presentation/context/ThemeContext';

function App(): JSX.Element {
  const createReactTheme = useMemo(() => first, [second]);
  return (
    <NavigationContainer>
      <ThemeProvider
        value={{
          dark: false,
          colors: {
            primary: '',
            background: '',
            card: '',
            text: '',
            border: '',
            notification: '',
          },
        }}>
        <Provider store={store}>
          <StackNavition />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
