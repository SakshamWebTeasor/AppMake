// import 'react-native-gesture-handler';
// import {Rapid_API_Key} from 'react-native-dotenv';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import index from './App/index';
import {name as appName} from './app.json';

// export const Rapid_API_Key = Rapid_API_Key;

AppRegistry.registerComponent(appName, () => index);
