import {isUndefined} from 'lodash';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../utility/Color';

const WeatherDetailScreen = ({navigation, route}) => {
  const {
    containerDetail,
    rowTitle,
    dateStyle,
    weatherRow,
    arrowTemperatureStyle,
    carouselStyle,
    carouselRow,
    typeWeatherText,
    cityStyle,
    dateText,
    tempText,
    dateItemTxt,
    tempItemTxt,
    noData,
  } = styles;

  const {startColor, endColor, forecast} = route.params;
  const [weekWeather, setWeekWeather] = useState();
  const goBack = () => {
    navigation.pop();
  };

  const getWeekTemp = () => {
    let temps = [];

    if (forecast !== undefined) {
      //I create an array of object that at the end will contain the weekWeather
      forecast.list.map(item => {
        temps.push({
          date: moment((item?.dt_txt).toString().split(' ')[0]).format('dddd'),
          temp: parseInt(item?.main?.temp) + '°',
        });
      });
      const weekWeatherUnique = getUniqueListBy(temps, 'date');
      setWeekWeather(weekWeatherUnique);
    }
  };
  useEffect(() => {
    getWeekTemp();
  }, []);

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
  }

  return (
    <LinearGradient colors={[startColor, endColor]} style={containerDetail}>
      <View style={rowTitle}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require('../assets/images/Arrow.png')} />
        </TouchableOpacity>
        <Text style={cityStyle}>{forecast?.city?.name}</Text>
        <Image source={require('../assets/images/Plus.png')} />
      </View>
      <View style={dateStyle}>
        <Text style={dateText}>{moment().format('dddd Do MMMM')}</Text>
      </View>
      <Text style={typeWeatherText}>
        {!isUndefined(forecast)
          ? forecast?.list[0]?.weather[0]?.main
          : 'No Available'}
      </Text>
      <View style={weatherRow}>
        <Image source={require('../assets/images/Sunny.png')} />

        <Text style={tempText}>
          {parseInt(forecast?.list[0]?.main?.temp, 10)}
        </Text>
      </View>
      <View style={arrowTemperatureStyle}>
        <View />
      </View>
      <ScrollView horizontal={true}>
        <View style={carouselRow}>
          {!isUndefined(weekWeather) ? (
            weekWeather.map(item => {
              return (
                <View style={carouselStyle}>
                  <Text style={dateItemTxt}>{item?.date}</Text>
                  <Text style={tempItemTxt}>{parseInt(item?.temp) + '°'}</Text>
                  <Image source={require('../assets/images/Sunny.png')} />
                </View>
              );
            })
          ) : (
            <Text style={noData}>No data</Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    backgroundColor: Color.cianoGradientEnd,
  },
  cityStyle: {
    fontSize: 32,
    color: Color.white,
    fontFamily: 'poppins_semibold',
  },
  dateText: {
    textAlign: 'center',
    marginTop: 10,
    color: Color.white,
    fontSize: 20,
    fontFamily: 'poppins_medium',
  },
  tempItemTxt: {
    fontSize: 36,
    color: Color.white,
    fontFamily: 'poppins_semibold',
  },
  dateItemTxt: {
    fontSize: 22,
    color: Color.white,
    fontFamily: 'poppins_semibold',
    paddingHorizontal: 12,
  },

  tempText: {
    fontSize: 110,
    marginLeft: 42,
    color: Color.white,
    fontFamily: 'poppins_bold',
  },
  noData: {
    fontSize: 36,
    color: Color.white,
  },
  rowTitle: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateStyle: {},
  typeWeatherText: {
    textAlign: 'center',
    marginTop: 20,
    color: Color.white,
    fontSize: 20,
    fontFamily: 'poppins_light',
  },
  weatherRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowTemperatureStyle: {
    height: 2,
    backgroundColor: Color.white,
    marginHorizontal: 20,
  },
  carouselRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  carouselStyle: {
    marginTop: 45,
    marginLeft: 15,

    width: 148,
    height: 232,
    borderRadius: 20,
    blurRadius: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default WeatherDetailScreen;
