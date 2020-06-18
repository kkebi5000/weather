import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Weather = ({ data }) => {
    const id = data.weather[0].id;
    const weather = id === 800 ? WeatherGroup[0] : WeatherGroup[parseInt(id / 100)];
    return (
      <View>  
        <View style={styles.top}>
          <MaterialCommunityIcons size={150} name={weather.icon}/>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.main}>{data.weather[0].main}</Text>
          <Text style={styles.temp}>{Math.ceil(data.main.temp - 273.15)}℃</Text>
        </View>
      </View> 
    );
  }
const WeatherGroup = {
    0: {
      icon: 'weather-sunny'
    },
    2: {
      icon: 'weather-lightning'
    },
    3: {
      icon: 'weather-rainy'
    },
    5: {
      icon: 'weather-pouring'
    },
    6: {
      icon: 'weather-snowy'
    },
    7: {
      icon: 'weather-fog'
    },
    8: {
      icon: 'weather-cloudy'
    }
  }

  const styles = StyleSheet.create({
    top: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    bottom: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    main: {
      fontSize: 50,
      marginBottom:10,
      fontWeight: '600'
    },
    temp: {
      fontSize: 30
    }
  });
  
export default Weather;