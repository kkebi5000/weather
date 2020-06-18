import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Weather from './Weather';
import { LinearGradient } from 'expo'; 

export default class App extends React.Component {

  state = {
    loading: true, 
    weather: null, 
  }
   
  render() {
    return (
      <View style={styles.container}>
        { 
          this.state.loading ? <Text style={styles.text}>loading...</Text> : <Weather data={this.state.weather} />
        }
      </View>
    );
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this._getWeather(position.coords); 
      }, 
      (error) => {
        console.log(error);
      }
    );
  }
  _getWeather = ({latitude, longitude}) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json()) 
    .then(json => {
      console.log(json);
      
      
      this.setState({
        weather: json,
        loading: false
      })
    });
  }
}
 
const { width } = Dimensions.get('window');

const API_KEY = '17e14415f281f48b859bd583c935eb75';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:50,
    color: 'white'
  }
});
