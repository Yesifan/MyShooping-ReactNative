/**
 * Created by y5049 on 2017/4/30.
 */

import React from 'react';
import { Image, StyleSheet,} from 'react-native';
import { TabNavigator } from 'react-navigation';


import Home from './Component/Home/Home'
import Shop from "./Component/Shop/Shop";
import More from "./Component/More/More";
import Mine from "./Component/Mine/Mine";

import {comStyles} from './js/css.js'



const Main = TabNavigator({
    Home: { screen: Home,
        navigationOptions: {
            tabBarLabel: '主页',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./Component/Home/icon_tabbar_homepage.png')}
                    style={[comStyles.icon, {tintColor: tintColor}]}
                />
            ),
        }},
    Shop: { screen: Shop },
    Mine: { screen: Mine },
    More: { screen: More },
},

{
    tabBarOptions: {
        activeTintColor: '#000', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 15, // 文字大小
            marginBottom: -1,
        },
        iconStyle: {
            marginBottom: -8,
        },
    },
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    animationEnabled: false, // 切换页面时不显示动画
}

);


export default Main;
