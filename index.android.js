import React, { Component } from 'react';
import {  AppRegistry,  Text,  View} from 'react-native';
import StaticMap from './app/components/Component1/StaticMap';

export default class Tutorial1 extends Component {
  render() {
    return (
      <View>
        <StaticMap/>
      </View>
    );
  }
}


AppRegistry.registerComponent('Tutorial1', () => Tutorial1);
