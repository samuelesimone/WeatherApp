import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const WeatherDetailScreen = ({navigation, title, date}) => {
  const {
    containerDetail,
    rowTitle,
    dateStyle,
    weatherRow,
    arrowTemperatureStyle,
    carouselStyle,
  } = styles;

  const goBack = () => {
    navigation.pop();
  };
  return (
    <View style={containerDetail}>
      <View style={rowTitle}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require('../assets/images/Arrow.png')} />
        </TouchableOpacity>
        <Text>{title}</Text>
        <Image source={require('../assets/images/Plus.png')} />
      </View>
      <View style={dateStyle}>
        <Text>{date}</Text>
      </View>
      <Text>Sunny</Text>
      <View style={weatherRow}>
        <Image source={require('../assets/images/Sunny.png')} />
        <Text>{title}</Text>
      </View>
      <View style={arrowTemperatureStyle} />
      <View style={carouselStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WeatherDetailScreen;
