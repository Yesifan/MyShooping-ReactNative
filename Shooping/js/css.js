/**
 * Created by y5049 on 2017/4/30.
 */

import {
    StyleSheet,
} from 'react-native';

const Dimensions = require('Dimensions');

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const comStyles = StyleSheet.create({

    //小标题
    text:{
        fontSize: 18,
        color: '#fff',
    },

    //头部导航栏
    tabBar: {
        width: screenWidth,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',//次轴排列方向
        justifyContent: 'space-between',
        backgroundColor: '#97cbff',
    },

    //宽度等于屏幕需要内容居中的View
    box: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
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

    //下部导航栏图标
    icon: {
        height: 26,
        width: 26,
        resizeMode: 'contain'
    },

    //小红点
    dot: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',

        width:12,
        height:12,

        borderRadius:7,

        backgroundColor:'red',

        zIndex:1,
    },

});


