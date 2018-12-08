/** @format */

import {AppRegistry} from 'react-native';
import AppContainer from './app/TabNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
