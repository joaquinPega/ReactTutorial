import React, { Component } from 'react';
import {  AppRegistry,  Text,  View} from 'react-native';
import StaticMap from './app/components/Component1/StaticMap';
import Component1 from './app/components/Component1/Component1'

export default class Tutorial1 extends Component {
  render() {
    return (
        <Component1/>
    );
  }
}


AppRegistry.registerComponent('Tutorial1', () => Tutorial1);
