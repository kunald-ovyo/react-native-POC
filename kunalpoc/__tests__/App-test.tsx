import {act, create} from 'react-test-renderer';
import MyScreen from '../src/presentation/components/MyScreen';
import TrialTest from '../src/presentation/components/TrialTest';
import HomeScreen from '../src/presentation/HomeScreen';
import {Provider} from 'react-redux';
import store from '../src/data/redux/Store';
import {ThemeProvider} from '../src/presentation/context/ThemeContext';
import UsehomeScreenCase from '../src/domain/customhooks/HomeScreenUseCase';
import {mockAllAssetREsponse} from '../MockData/mockAllAssets';

jest.mock('../src/domain/customhooks/HomeScreenUseCase');

UsehomeScreenCase.mockReturnValue([
  {
    allAssetsData: mockAllAssetREsponse,
    carouselData: ['One'],
    bannerData: [],
    loading: false,
  },
]);
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

  const app = create(
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

  // const findAllByTestID = instance =>
  //   instance.findAll(el => el.props.testID === 'banner' && el.type === 'View');
  // expect(findAllByTestID(app).length).toEqual(mockAllAssetREsponse.length - 1);

  const banners = app.root.findAllByProps({testID: 'banner'});
  expect(banners.length / 2).toEqual(mockAllAssetREsponse.length - 1);
});
