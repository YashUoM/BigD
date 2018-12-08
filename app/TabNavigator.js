import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from './home';
import Login from './login';
import Registration from './registration';
import PredictionRequest from './predictionRequest';
import UploadImage from './UploadImage';
import Answers from './Answers';

const Tabs = createMaterialBottomTabNavigator({
    
    UploadImage:UploadImage,
    Answers:Answers,
    PredictionRequest:PredictionRequest
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#7a7d82',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        }
    },
}
);

const StackNavigator = createStackNavigator({
    
    Home: {
        screen:Home
    },
    Login: {
        screen:Login
    },
    Registration:{
        screen: Registration
    },
   Tabs:{
       screen:Tabs
   }
    
},
    {
        navigationOptions:{
            headerMode:'none',
            //headerLeft:null
    
        }
    }

);

const AppContainer = createAppContainer(StackNavigator);




export default AppContainer;