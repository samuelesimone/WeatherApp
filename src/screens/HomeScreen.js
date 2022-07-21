import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import CityWeatherComponent from '../components/CityWeatherComponent';
import Color from '../utility/Color';

const HomeScreen = ({navigation}) => {
  const {containerHome, rowAddCity, titleStyle, addCityStyle, cityContainer} =
    styles;
  const sunnyImage = require('../assets/images/Sunny.png');
  const [weatherMilan, setWeatherMilan] = useState({});
  const [weatherTurin, setWeatherTurin] = useState({});
  const [weatherRome, setWeatherRome] = useState({});
  const [forecastedRome, setForecastedRome] = useState({});
  const API_KEY = '2ccd4e42f6dd936ca8b9e7a8a8752aad';
  const URL_Milan = `https://api.openweathermap.org/data/2.5/weather?q=Milan,IT&appid=${API_KEY}&units=metric`;
  const URL_Turin = `https://api.openweathermap.org/data/2.5/weather?q=Turin,IT&appid=${API_KEY}`;
  const URL_Rome = `https://api.openweathermap.org/data/2.5/weather?q=Rome,IT&appid=${API_KEY}`;

  const URL_Forecast_Rome = `https://api.openweathermap.org/data/2.5/forecast?q=Rome,IT&appid=${API_KEY}&units=metric`;

  async function getWeather() {
    const dataMilan = await fetch(URL_Milan).then(res => res.json());
    setWeatherMilan([dataMilan]);
    const dataTurin = await fetch(URL_Turin).then(res => res.json());
    setWeatherTurin([dataTurin]);
    const dataRome = await fetch(URL_Rome).then(res => res.json());
    setWeatherRome([dataRome]);
  }

  async function getForecastedWeather() {
    const dataRomeForecasted = await fetch(URL_Forecast_Rome).then(res =>
      res.json(),
    );
    setForecastedRome(dataRomeForecasted);
  }

  useEffect(() => {
    //getWeather();
    getForecastedWeather();
  }, []);

  const customDataMilan = require('../mocks/MilanMock.json');

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
            startColor={Color.blueGradientStart}
            endColor={Color.blueGradientEnd}
            imageSource={sunnyImage}
            title={customDataMilan.name}
            date={'Friday 18,\nseptember'}
            hour={'2:38pm'}
            degree={customDataMilan.main.temp + '°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                title: customDataMilan.name,
                date: 'Friday 18, september',
                temp: customDataMilan.main.temp + '°',
                startColor: Color.blueGradientStart,
                endColor: Color.blueGradientEnd,
              });
            }}
          />
          <View marginTop={20} />
          <CityWeatherComponent
            startColor={Color.cianoGradientStart}
            endColor={Color.cianoGradientEnd}
            imageSource={sunnyImage}
            title={'London'}
            date={'Friday 18,\nseptember'}
            hour={'2:38pm'}
            degree={'18°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                title: 'London',
                date: 'Friday 18,september',
                temp: customDataMilan.main.temp + '°',
                startColor: Color.cianoGradientStart,
                endColor: Color.cianoGradientEnd,
              });
            }}
          />
          <View marginTop={20} />
          <CityWeatherComponent
            startColor={Color.greyGradientStart}
            endColor={Color.greyGradientEnd}
            imageSource={sunnyImage}
            title={'London'}
            date={'Friday 18,\nseptember'}
            hour={'2:38pm'}
            degree={'18°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                startColor: Color.greyGradientStart,
                endColor: Color.greyGradientEnd,
                forecast: forecastedRome,
              });
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
    alignItems: 'center',
  },
  titleStyle: {
    marginTop: 50,
    color: Color.titleColor,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'poppins_semibold',
  },
  addCityStyle: {
    fontSize: 20,
    paddingLeft: 15,
    color: Color.titleColor,
    fontFamily: 'poppins_semibold',
  },
  cityContainer: {
    marginTop: 30,
  },
});

export default HomeScreen;
