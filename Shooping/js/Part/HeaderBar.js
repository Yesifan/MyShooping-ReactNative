/**
 * Created by y5049 on 2017/5/4.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import {comStyles} from '../css'
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

const HeaderBar = ({ left, middle, right }) => (

        <View style={comStyles.tabBar}>

            {/*定位*/}
            <View style={styles.leftBar}>
                {left}
            </View>

            {/*搜索框*/}
            <View style={styles.middleBar}>
                {middle}
            </View>

            {/*功能图标*/}
            <View style={styles.rightBar}>
                {right}
            </View>
        </View>

);

export default HeaderBar;

const styles = StyleSheet.create({


    leftBar: {
        flexDirection: 'row',
        marginLeft:10,

    },

    middleBar: {
        flexDirection: 'row',
    },

    rightBar: {

        flexDirection: 'row',
        marginRight:5,

    },



})