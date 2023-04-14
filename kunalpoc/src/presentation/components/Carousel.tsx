import {View, FlatList, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {assetEntity} from '../../data/model/assets';
import {generateString} from '../../domain/utils';
import {useOrientation} from '../UIHooks';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {
  data: assetEntity[];
  onClickTile: Function;
};

function Carousel(props: Props) {
  const orientation = useOrientation();
  console.log('Kunal chceking orientation', orientation);
  if (orientation === 'PORTRAIT') {
    console.log('Kunal 1');
  } else {
    console.log('Kunal 2');
  }
  return (
    <View style={styles.baseContainer}>
      <FlatList
        style={{flex: 1}}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={props.data}
        renderItem={value => {
          const imageUrl = `https://image-resizer-cloud-api.akamaized.net/image/${value.item.id}/0-16x9.jpg?width=600`;
          return (
            <View>
              {orientation === 'PORTRAIT' ? (
                <View style={styles.itenStylePotrait}>
                  <ImageBackground
                    source={{
                      uri: imageUrl,
                    }}
                    style={styles.posterStylePortait}
                  />
                </View>
              ) : (
                <View style={styles.itenStyleLandscape}>
                  <ImageBackground
                    source={{
                      uri: imageUrl,
                    }}
                    style={styles.posterStyleLandscape}
                  />
                </View>
              )}
            </View>
          );
        }}
        keyExtractor={value => `${value.id}${generateString(7)}`}
      />
    </View>
  );
}

export default React.memo(Carousel);

const styles = StyleSheet.create({
  baseContainer: {
    marginTop: 15,
    aspectRatio: 16 / 9,
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: '5%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itenStyleLandscape: {
    aspectRatio: 16 / 9,
    width: height - 0.1 * height,
    backgroundColor: 'yellow',
  },
  itenStylePotrait: {
    aspectRatio: 16 / 9,
    width: width - 0.1 * width,
    backgroundColor: 'yellow',
  },
  posterStylePortait: {
    aspectRatio: 16 / 9,
    width: width - 0.1 * width,
    borderRadius: 10,
  },
  posterStyleLandscape: {
    flex: 1,
    backgroundColor: 'green',
  },
});
