import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text,  View, Dimensions, Navigator,TextInput} from 'react-native';
import MapView from 'react-native-maps';
import flagImg from './assets/flag-blue-resized.png';
import flagRed from './assets/flag-pink-resized.png';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class Component1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      error: null,
      region:{
        latitude: LATITUDE,
        longitude: LATITUDE,
        latitudeDelta:  0.0922,
        longitudeDelta:  0.0421
      }

    };

  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) =>
    {
      this.setState({
        latitude: position.coords.latitude,
         longitude: position.coords.longitude,
         latitudeDelta: null,
         longitudeDelta: null,
         region:{
           latitude:position.coords.latitude,
           longitude:position.coords.longitude,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }
      });
    }, (error) =>
    this.setState({
      error: error.message
    }),
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    },);
  }

  render() {
    return (
      <View style={styles.container}>
       <MapView
         provider={this.props.provider}
         style={styles.map}
         region={this.state.region}
         onPress={this.onMapPress}
         loadingEnabled
         loadingIndicatorColor="#666666"
         loadingBackgroundColor="#eeeeee"
       >
         <MapView.Marker
           coordinate={{
             latitude: this.state.region.latitude + SPACE,
             longitude: this.state.region.longitude + SPACE,
           }}
           centerOffset={{ x: -18, y: -60 }}
           anchor={{ x: 0.69, y: 1 }}
           opacity={0.6}
           image={flagImg}
         />
         <MapView.Marker
           coordinate={{
             latitude: this.state.region.latitude - SPACE,
             longitude: this.state.region.longitude - SPACE,
           }}
           centerOffset={{ x: -42, y: -60 }}
           anchor={{ x: 0.84, y: 1 }}
           image={flagRed}
         >
           <MapView.Callout>
             <View>
               <Text>This is a plain view</Text>
             </View>
           </MapView.Callout>
         </MapView.Marker>
       </MapView>
       <View style={styles.buttonContainer}>
         <View style={styles.bubble}>
           <Text>Map with Loading</Text>
           <TextInput
            style={{height: 40}}
            placeholder="Search"
             onChangeText={(text) => this.setState({text})} />
         </View>
       </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
