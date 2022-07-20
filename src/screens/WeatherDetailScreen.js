import * as React from 'react';
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
  } = styles;

  const {title, date, temp, startColor, endColor} = route.params;

  const goBack = () => {
    navigation.pop();
  };
  return (
    <LinearGradient colors={[startColor, endColor]} style={containerDetail}>
      <View style={rowTitle}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require('../assets/images/Arrow.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 32,
            color: Color.white,
          }}>
          {title}
        </Text>
        <Image source={require('../assets/images/Plus.png')} />
      </View>
      <View style={dateStyle}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            color: Color.white,
            fontSize: 20,
          }}>
          {date}
        </Text>
      </View>
      <Text style={typeWeatherText}>Sunny</Text>
      <View style={weatherRow}>
        <Image source={require('../assets/images/Sunny.png')} />
        <Text style={{fontSize: 110, marginLeft: 42, color: Color.white}}>
          {temp}
        </Text>
      </View>
      <View style={arrowTemperatureStyle}>
        <View />
      </View>
      <ScrollView horizontal={true}>
        <View style={carouselRow}>
          <View style={carouselStyle}>
            <Text style={{fontSize: 22, color: Color.white}}>Saturday</Text>
            <Text style={{fontSize: 36, color: Color.white}}>18°</Text>
            <Image source={require('../assets/images/Sunny.png')} />
          </View>
          <View style={carouselStyle}>
            <Text style={{fontSize: 22, color: Color.white}}>Saturday</Text>
            <Text style={{fontSize: 36, color: Color.white}}>18°</Text>
            <Image source={require('../assets/images/Sunny.png')} />
          </View>
          <View style={carouselStyle}>
            <Text style={{fontSize: 22, color: Color.white}}>Saturday</Text>
            <Text style={{fontSize: 36, color: Color.white}}>18°</Text>
            <Image source={require('../assets/images/Sunny.png')} />
          </View>
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
