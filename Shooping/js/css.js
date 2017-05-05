/**
 * Created by y5049 on 2017/4/30.
 */

import {
    StyleSheet,
} from 'react-native';

var Dimensions = require('Dimensions');

export var screenWidth = Dimensions.get('window').width;

export var screenHeight = Dimensions.get('window').height;


export const comStyles = StyleSheet.create({

    //小标题
    text:{
        fontSize: 18,
        color: '#05c0ad',
    },

    //头部导航栏
    tabBar: {
        width: screenWidth,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',//次轴排列方向
        justifyContent: 'space-between',
        backgroundColor: '#7FFFD4',
    },

    box: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    icon: {
        height: 26,
        width: 26,
        resizeMode: 'contain'
    }

})


