import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import cars from '../constants/cars';
import CarItem from './car';

const CarsList = (props: any) => {
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        // data is just what you want to render(multiple items)
        data={cars}
        // how to render a particular item
        renderItem={({ item }) => <CarItem cars={item} />}
        snapToAlignment={'start'}
        // how fast the scroll goes
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        // disables scroll indicator
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
