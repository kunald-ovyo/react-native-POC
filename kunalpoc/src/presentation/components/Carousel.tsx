import {View, FlatList, StyleSheet, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {assetEntity} from '../../data/model/assets';
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
            <View
              style={[
                styles.itenStyle,
                {backgroundColor: value.index % 2 ? 'red' : 'yellow'},
              ]}>
              <ImageBackground
                source={{
                  uri: imageUrl,
                }}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          );
        }}
        keyExtractor={photo => photo.id}
      />
    </View>
  );
}

export default React.memo(Carousel);

const styles = StyleSheet.create({
  baseContainer: {
    aspectRatio: 14 / 9,
    backgroundColor: 'white',
    width: '90%',
    margin: '5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  itenStyle: {
    height: 200,
    width: width - 38,
    backgroundColor: 'yellow',
  },
});
