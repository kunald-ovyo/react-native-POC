import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeContext} from './context/ThemeContext';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import UsehomeScreenCase from '../domain/customhooks/HomeScreenUseCase';
import Icon from 'react-native-vector-icons/dist/Entypo';

const HomeScreen = () => {
  const themeFontStyleContext = useContext(themeContext);
  const [homeScreenData, getNextPageAssets] = UsehomeScreenCase();

  const isCloseToBottom = useCallback(
    ({layoutMeasurement, contentOffset, contentSize}: any) => {
      const paddingToBottom = 20;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    },
    [],
  );

  return (
    <SafeAreaView style={themeFontStyleContext.baseContainerStyle}>
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            getNextPageAssets();
          }
        }}
        scrollEventThrottle={400}
        style={styles.baseScroll}>
        {homeScreenData.allAssetsData.map((element: any, index: any) => {
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
      <View style={styles.baseTabBar}>
        <View style={styles.tabViewStyle}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.tabTitleTextStyle}>
              <Icon name={'video'} size={30} color={'white'} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabViewStyle}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.tabTitleTextStyle}>
              <Icon name={'home'} size={30} color={'white'} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabTitleTextStyle: {alignSelf: 'center'},
  tabViewStyle: {flex: 1, justifyContent: 'center'},
  baseTabBar: {
    flexDirection: 'row',
    bottom: 0,
    height: 70,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
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
