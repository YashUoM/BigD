/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View} from 'react-native';

import { AppContainer } from './app/TabNavigator';
export default class App extends Component {

  handleNavigationChange(){
    console.log('success');
  }
  render() {
    return (
      <View style={styles.container}>
   <AppContainer
  onNavigationStateChange={this.handleNavigationChange}
  uriPrefix="/app"
/>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

