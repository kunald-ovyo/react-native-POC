import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeContext} from './context/ThemeContext';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import UsehomeScreenCase from '../domain/customhooks/HomeScreenUseCase';

const HomeScreen = () => {
  const themeFontStyleContext = useContext(themeContext);
  const [homeScreenData] = UsehomeScreenCase();

  return (
    <SafeAreaView style={themeFontStyleContext.baseContainerStyle}>
      <ScrollView style={styles.baseScroll}>
        {homeScreenData.allAssetsData.map((element, index) => {
          if (index === 0) {
            return (
              <Carousel
                key={`carousal_${index}`}
                data={element.data}
                onClickTile={() => {}}
              />
            );
          } else {
            return (
              <Banner
                key={`carousal_${index}`}
                data={element.data}
                title={element.name[0].n}
              />
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseScroll: {backgroundColor: 'black', flex: 1},
  baseSkeleton: {
    aspectRatio: 14 / 9,
    backgroundColor: 'white',
    width: '90%',
    margin: '5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  baseHOrrizontalScroll: {
    aspectRatio: 12 / 9,
    backgroundColor: 'white',
    width: '90%',
    margin: '5%',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default HomeScreen;
