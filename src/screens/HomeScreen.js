import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import CityWeatherComponent from '../components/CityWeatherComponent';
import Color from '../utility/Color';

const HomeScreen = ({navigation}) => {
  const {containerHome, rowAddCity, titleStyle, addCityStyle, cityContainer} =
    styles;
  const sunnyImage = require('../assets/images/Sunny.png');
  return (
    <ScrollView>
      <View style={containerHome}>
        <Text style={titleStyle}>
          Good Morning!{'\n'}
          Mario
        </Text>
        <View style={rowAddCity}>
          <Image source={require('../assets/images/Plus.png')} />
          <Text style={addCityStyle}>Aggiungi città</Text>
          <View />
        </View>
        <View style={cityContainer}>
          <CityWeatherComponent
            startColor={Color.blueGradientEnd}
            imageSource={sunnyImage}
            title={'London'}
            date={'Friday 18,\nseptember'}
            hour={'2:38pm'}
            degree={'18°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                title: 'London',
                date: 'Friday 18, september',
              });
            }}
          />
          <View marginTop={20} />
          <CityWeatherComponent
            startColor={Color.cianoGradientEnd}
            imageSource={sunnyImage}
            title={'London'}
            date={'Friday 18,\nseptember'}
            hour={'2:38pm'}
            degree={'18°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                title: 'London',
                date: 'Friday 18, september',
              });
            }}
          />
          <View marginTop={20} />
          <CityWeatherComponent
            startColor={Color.greyGradientEnd}
            imageSource={sunnyImage}
            title={'London'}
            date={'Friday 18, september'}
            hour={'2:38pm'}
            degree={'18°'}
            onPress={() => {
              navigation.navigate('WeatherDetail');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  rowAddCity: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleStyle: {
    marginTop: 50,
    color: Color.titleColor,
    fontSize: 28,
    textAlign: 'center',
  },
  addCityStyle: {
    fontSize: 20,
    paddingLeft: 15,
    color: Color.titleColor,
  },
  cityContainer: {
    marginTop: 30,
  },
});

export default HomeScreen;
