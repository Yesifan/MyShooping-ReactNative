/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {comStyles} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'

export default class Shop extends Component {

    render() {
        return (
            <View style={comStyles.box}>
                <HeaderBar
                    middle={<Text style={comStyles.text}>商家</Text>}
                />
                <View style={comStyles.content}>

                </View>
            </View>

        );
    }
}


