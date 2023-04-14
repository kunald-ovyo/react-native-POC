/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomeScreen from '../src/presentation/HomeScreen';
import {Provider} from 'react-redux';
import store from '../src/data/redux/Store';
import {ThemeProvider} from '../src/presentation/context/ThemeContext';

it('renders correctly', async () => {
  renderer.create(
    <ThemeProvider
      value={{
        primaryColor: 'white',
        secondaryColor: 'yellow',
        backGroundColor: 'black',
        baseContainerStyle: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#17171c',
        },
      }}>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </ThemeProvider>,
  );
});
