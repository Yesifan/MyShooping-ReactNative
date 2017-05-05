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

export default class Mine extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./icon_tabbar_mine.png')}
                style={[comStyles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={comStyles.box}>
                <HeaderBar
                    middle={<Text style={comStyles.text}>我的</Text>}
                />
                <View style={comStyles.content}>

                </View>
            </View>

        );
    }
}

