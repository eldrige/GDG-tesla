import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from './button';

const CarItem = (props: any) => {
  const { name, tagline, image, taglineCTA } = props.cars;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.img} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}> {taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn('custom order was pressed');
          }}
        />
        <Button
          type="alternate"
          content="Existing inventory"
          onPress={() => {
            console.warn('existing inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  subTitleCTA: {
    textDecorationLine: 'underline',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default CarItem;
