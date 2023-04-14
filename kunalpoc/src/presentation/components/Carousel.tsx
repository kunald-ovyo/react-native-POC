import {View, FlatList, StyleSheet, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {assetEntity} from '../../data/model/assets';
import {generateString} from '../../domain/utils';
const width = Dimensions.get('window').width;

type Props = {
  data: assetEntity[];
  onClickTile: Function;
};

function Carousel(props: Props) {
  return (
    <View style={styles.baseContainer}>
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={props.data}
        renderItem={value => {
          const imageUrl = `https://image-resizer-cloud-api.akamaized.net/image/${value.item.id}/0-16x9.jpg?width=300`;
          return (
            <View style={[styles.itenStyle]}>
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
    aspectRatio: 16 / 9,
    backgroundColor: 'white',
    width: '90%',
    margin: '5%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itenStyle: {
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
