import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
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
          console.log('Kunal chekcing', value.item);
          return <View style={styles.itenStyle} />;
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
    width: width - 40,
    backgroundColor: 'yellow',
  },
});
