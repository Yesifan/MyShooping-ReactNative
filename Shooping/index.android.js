/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import {getStore} from './Redux/Store/configStore'


import {StackRoot} from "./Main";

class Shooping extends React.Component {
    store = getStore();

    render() {
        return (
            <Provider store={this.store}>
              <StackRoot />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('Shooping', () => Shooping);
