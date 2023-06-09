/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/data/redux/Store';
import StackNavition from './src/presentation/StackNavition';
import {Provider} from 'react-redux';
import {
  ThemeProvider,
  ThemeAndText,
} from './src/presentation/context/ThemeContext';
import {useColorScheme} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const createReactTheme = useMemo(
    (): Partial<ThemeAndText> =>
      isDarkMode
        ? {
            primaryColor: 'white',
            secondaryColor: 'yellow',
            backGroundColor: 'black',
            baseContainerStyle: {
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#17171c',
            },
          }
        : {
            primaryColor: 'white',
            secondaryColor: 'yellow',
            backGroundColor: 'black',
            baseContainerStyle: {
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#fffff',
            },
          },
    [isDarkMode],
  );
  return (
    <NavigationContainer>
      <ThemeProvider value={createReactTheme}>
        <Provider store={store}>
          <StackNavition />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
