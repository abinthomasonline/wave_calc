/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import AppStyle from './style/App.style';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={AppStyle.rootContainer}>
        <View style={AppStyle.commonContainer}></View>
        <View style={AppStyle.middleContainer}>
          <View style={AppStyle.inputContainer}></View>
          <View style={AppStyle.inputContainer}></View>
        </View>
        <View style={AppStyle.buttonContainer}></View>
      </View>
    );
  }
}