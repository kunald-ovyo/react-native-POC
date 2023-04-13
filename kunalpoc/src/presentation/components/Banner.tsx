import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  data: any[];
  title: string;
};

function Banner(props: Props) {
  return (
    <View style={styles.baseHOrrizontalScroll}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={props.data}
        renderItem={item => <View style={styles.hscrollTile} />}
        keyExtractor={photo => photo.id}
      />
    </View>
  );
}
export default React.memo(Banner);
const styles = StyleSheet.create({
  title: {fontWeight: 'bold', color: 'white', fontSize: 30},
  baseHOrrizontalScroll: {
    aspectRatio: 12 / 9,
    backgroundColor: 'black',
    width: '90%',
    margin: '5%',
    borderColor: '#fff',
  },
  hscrollTile: {
    height: 200,
    width: 170,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
});
