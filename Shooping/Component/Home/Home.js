/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';

import {
    Text,
    View,
    Image,
} from 'react-native';

import {comStyles} from '../../js/css.js'

import { StackNavigator } from 'react-navigation';

import home from './Son/home';
import food from './Son/food';

const Home = StackNavigator(
    {
        Home: { screen: home },
        Food: { screen: food },
    },

    {
        headerMode: 'none',
    }
)

export default Home ;



