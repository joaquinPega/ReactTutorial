import React, { Component } from 'react';
import {  AppRegistry,  Text,  View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
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
