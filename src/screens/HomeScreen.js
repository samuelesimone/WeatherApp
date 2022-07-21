import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import CityWeatherComponent from '../components/CityWeatherComponent';
import Color from '../utility/Color';
import moment from 'moment';
import {isEmpty, isUndefined} from 'lodash';
const HomeScreen = ({navigation}) => {
  const {containerHome, rowAddCity, titleStyle, addCityStyle, cityContainer} =
    styles;
  const sunnyImage = require('../assets/images/Sunny.png');
  const [weatherLondon, setWeatherLondon] = useState({});
  const [weatherTurin, setWeatherTurin] = useState({});
  const [weatherRome, setWeatherRome] = useState({});
  const [imageWeather, setImageWeather] = useState();
  const [forecastedRome, setForecastedRome] = useState({});
  const [forecastedLondon, setForecastedLondon] = useState({});
  const [forecastedTurin, setForecastedTurin] = useState({});
  const API_KEY = '2ccd4e42f6dd936ca8b9e7a8a8752aad';
  const URL_London = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
  const URL_Turin = `https://api.openweathermap.org/data/2.5/weather?q=Turin,IT&appid=${API_KEY}&units=metric`;
  const URL_Rome = `https://api.openweathermap.org/data/2.5/weather?q=Rome,IT&appid=${API_KEY}&units=metric`;

  const URL_Forecast_Rome = `https://api.openweathermap.org/data/2.5/forecast?q=Rome,IT&appid=${API_KEY}&units=metric`;
  const URL_Forecast_Turin = `https://api.openweathermap.org/data/2.5/forecast?q=Turin,IT&appid=${API_KEY}&units=metric`;
  const URL_Forecast_London = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${API_KEY}&units=metric`;

  async function getWeather() {
    const dataLondon = await fetch(URL_London).then(res => res.json());
    setWeatherLondon([dataLondon]);
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
    const dataTurinForecasted = await fetch(URL_Forecast_Turin).then(res =>
      res.json(),
    );
    setForecastedTurin(dataTurinForecasted);
    const dataLondonForecasted = await fetch(URL_Forecast_London).then(res =>
      res.json(),
    );
    setForecastedLondon(dataLondonForecasted);
    setImageWeather(require('../assets/images/Sunny.png'));
  }

  useEffect(() => {
    getWeather();
    getForecastedWeather();
  }, []);

  const customDataMilan = require('../mocks/MilanMock.json');

  const getImageWeather = forecast => {
    if (!isEmpty(forecast)) {
      let value = forecast?.list[0]?.weather[0]?.main;

      switch (value) {
        case 'Rain':
          return require('../assets/images/ModRainSwrsDay.png');
        case 'Clear':
          return require('../assets/images/Sunny.png');
        case 'Clouds':
          return require('../assets/images/Cloudy.png');
        default:
          return require('../assets/images/Sunny.png');
      }
    } else {
      return require('../assets/images/Sunny.png');
    }
  };
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
            imageSource={getImageWeather(forecastedLondon)}
            title={weatherLondon[0]?.name}
            date={moment().format('dddd Do MMMM')}
            hour={moment().format('hh:mm a')}
            degree={parseInt(weatherLondon[0]?.main?.temp, 10) + '°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                forecast: forecastedLondon,
                date: moment().format('dddd Do MMMM'),
                startColor: Color.blueGradientStart,
                endColor: Color.blueGradientEnd,
                imageSource: getImageWeather(forecastedLondon),
              });
            }}
          />
          <View marginTop={20} />
          <CityWeatherComponent
            startColor={Color.cianoGradientStart}
            endColor={Color.cianoGradientEnd}
            imageSource={getImageWeather(forecastedTurin)}
            title={weatherTurin[0]?.name.split(' ')[2]}
            date={moment().format('dddd Do MMMM')}
            hour={moment().format('hh:mm a')}
            degree={parseInt(weatherTurin[0]?.main?.temp, 10) + '°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                forecast: forecastedTurin,
                date: moment().format('dddd Do MMMM'),
                startColor: Color.cianoGradientStart,
                endColor: Color.cianoGradientEnd,
                title: weatherTurin[0]?.name.split(' ')[2],
                imageSource: getImageWeather(forecastedTurin),
              });
            }}
          />
          <View marginTop={20} />
          <CityWeatherComponent
            startColor={Color.greyGradientStart}
            endColor={Color.greyGradientEnd}
            imageSource={getImageWeather(forecastedRome)}
            title={weatherRome[0]?.name}
            date={moment().format('dddd Do MMMM')}
            hour={moment().format('hh:mm a')}
            degree={parseInt(weatherRome[0]?.main?.temp, 10) + '°'}
            onPress={() => {
              navigation.navigate('WeatherDetail', {
                date: moment().format('dddd Do MMMM'),
                startColor: Color.greyGradientStart,
                endColor: Color.greyGradientEnd,
                forecast: forecastedRome,
                imageSource: getImageWeather(forecastedRome),
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
