/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Splash from './src/components/Splash';
import Login from './src/components/Login';

export default class basic_app_react extends Component {

  renderScene(route, navigator){
    switch(route.id){
      //case 'component1': return (<Component1 navigator={navigator} title="Component1" />)
      case 'splash': return (<Splash navigator={navigator} title="Splash" />)
      case 'login': return (<Login navigator={navigator} res={route.res} title="Login" />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'splash'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromTop}
      />
    );
  }
}

AppRegistry.registerComponent('basic_app_react', () => basic_app_react);
