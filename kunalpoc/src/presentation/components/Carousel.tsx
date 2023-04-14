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
          const imageUrl = `https://image-resizer-cloud-api.akamaized.net/image/${value.item.id}/0-16x9.jpg?width=300`;
          return (
            <View
              style={
                orientation === 'POTRAIT'
                  ? styles.itenStylePotrait
                  : styles.itenStyleLandscape
              }>
              <ImageBackground
                source={{
                  uri: imageUrl,
                }}
                style={styles.posterStyle}
              />
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
    height: 300,
    width: height - 0.1 * height,
    backgroundColor: 'yellow',
  },
  itenStylePotrait: {
    height: 200,
    width: width - 0.1 * width,
    backgroundColor: 'yellow',
  },
  posterStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
