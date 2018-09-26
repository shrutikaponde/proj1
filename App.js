/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Movies from "./app/components/Movies";
import { createStackNavigator } from "react-navigation";

const RouteMapper= createStackNavigator(
  {
    Movies : {
      screen: Movies
    }
  },
  {
    initialRouteName : 'Movies' 
  }
)

export default class App extends Component {
  render() {
    return <RouteMapper/>;
  }
}
