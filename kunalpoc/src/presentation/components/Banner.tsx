import {View, Text, FlatList, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {generateString} from '../../domain/utils';

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
        renderItem={value => {
          const imageUrl = `https://image-resizer-cloud-api.akamaized.net/image/${value.item.id}/0-9x16.jpg?width=300`;
          return (
            <View style={styles.hscrollTile}>
              <ImageBackground
                source={{
                  uri: imageUrl,
                }}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          );
        }}
        keyExtractor={value => `${value.id}${generateString(7)}`}
      />
    </View>
  );
}
export default React.memo(Banner);
const styles = StyleSheet.create({
  title: {fontWeight: 'bold', color: 'white', fontSize: 30},
  baseHOrrizontalScroll: {
    aspectRatio: 10 / 9,
    backgroundColor: 'black',
    width: '90%',
    margin: '5%',
    borderColor: '#fff',
  },
  hscrollTile: {
    aspectRatio: 9 / 16,
    width: 140,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
});
