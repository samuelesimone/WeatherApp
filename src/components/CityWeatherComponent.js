import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Color from '../utility/Color';

const CityWeatherComponent = ({
  startColor,
  endColor,
  title,
  degree,
  date,
  hour,
  imageSource,
  onPress,
}) => {
  const {
    containerCity,
    rowItems,
    cityAndData,
    titleStyle,
    dateStyle,
    hourStyle,
    degreeStyle,
  } = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[containerCity, {backgroundColor: startColor}]}>
        <View style={rowItems}>
          <View style={cityAndData}>
            <Text style={titleStyle}>{title}</Text>
            <Text style={dateStyle}>{date}</Text>
            <Text style={hourStyle}>{hour}</Text>
          </View>
          <Image source={imageSource} />
          <Text style={degreeStyle}>{degree}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerCity: {
    marginHorizontal: 20,
    height: 140,
    width: 374,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  rowItems: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 26,
    color: Color.white,
  },
  dateStyle: {fontSize: 15, color: Color.white},
  hourStyle: {marginTop: 14, color: Color.white},
  degreeStyle: {fontSize: 50, color: Color.white},
});

export default CityWeatherComponent;
