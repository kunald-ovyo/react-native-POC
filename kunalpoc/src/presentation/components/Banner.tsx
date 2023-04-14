import {View, Text, FlatList, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {generateString} from '../../domain/Utils';

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
                style={styles.posterStyle}>
                <Text style={{fontSize: 20}}>{value.item.title[0].n}</Text>
              </ImageBackground>
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
  title: {fontWeight: 'bold', color: 'white', fontSize: 20},
  baseHOrrizontalScroll: {
    marginTop: 15,
    marginBottom: 5,
    height: 270,
    backgroundColor: 'black',
    width: '90%',
    marginHorizontal: '5%',
    borderColor: '#fff',
  },
  hscrollTile: {
    aspectRatio: 9 / 16,
    width: 130,
    backgroundColor: 'grey',
    marginRight: 10,
  },
  posterStyle: {
    width: '100%',
    height: '100%',
  },
});
