import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

type Props = {
  data: any[];
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
        renderItem={item => <View style={styles.itenStyle} />}
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
