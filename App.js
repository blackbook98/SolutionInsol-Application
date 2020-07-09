/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Navigator from './Routes/MainStack';


export default class Application extends Component {
  
   render() {
      return <Navigator/>
          
          
    }
}

