import {act, create} from 'react-test-renderer';
import MyScreen from '../src/presentation/components/MyScreen';
import TrialTest from '../src/presentation/components/TrialTest';
import HomeScreen from '../src/presentation/HomeScreen';
import {Provider} from 'react-redux';
import store from '../src/data/redux/Store';
import {ThemeProvider} from '../src/presentation/context/ThemeContext';

// eslint-disable-next-line react/react-in-jsx-scope
const tree = create(<TrialTest />);

// eslint-disable-next-line react/react-in-jsx-scope
const another = create(<MyScreen />);
jest.runAllTimers();

test('Diplsu or compare snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('Button press ', () => {
  expect(another).toMatchSnapshot();
  const button = another.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());
  const text = another.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('changed');
});

it('renders correctly', async () => {
  jest.runAllTimers();

  create(
    // eslint-disable-next-line react/react-in-jsx-scope
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
