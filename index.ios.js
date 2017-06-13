/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry, Text} from 'react-native';
import React,{Component} from 'react';

//import HomeScreen from './src/components/HomeScreen1';
//import HomeScreen from './src/components/HomeScreen';
import HomeScreen from './src/components/HomeScreen';

export default class YouVido extends Component {
    render() {
        return (
              <HomeScreen />);
    
    }
}


AppRegistry.registerComponent('YouVido', () => YouVido);
