import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MainScreen from './Components/MainScreen';
AppRegistry.registerComponent('instagram', () =>point);

export default class App extends React.Component {
 render() {
  return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createAppContainer(
  createStackNavigator({
    main:{
      screen: MainScreen
    }
  })
)
