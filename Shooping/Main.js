/**
 * Created by y5049 on 2017/4/30.
 */

import React from 'react';
import { View,Image,Text } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';

import Home from './Component/Home/Home';
import Shop from "./Component/Shop/Shop";
import More from "./Component/More/More";
import Mine from "./Component/Mine/Mine";

import food from './Component/Home/Son/food';
import aboutMe from './Component/More/Son/AboutMe';

import {comStyles} from './js/css.js'


const StackHome = StackNavigator(
    {
        Home: { screen: Home },
    },

    {
        headerMode: 'none',
    }
);

const StackShop = StackNavigator(
    {
        Shop: { screen: Shop },
    },

    {
        headerMode: 'none',
    }
);

const StackMine= StackNavigator(
    {
        Mine: { screen: Mine },
    },

    {
        headerMode: 'none',
    }
);

const StackMore = StackNavigator(
    {
        More: { screen: More },

        AboutMe: { screen: aboutMe},
    },

    {
        headerMode: 'none',
    }
);


//四个主页面的Tab导航
const Main = TabNavigator({
    Home: { screen: StackHome,
        navigationOptions: {
            tabBarLabel: '主页',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={{uri:'icon_tabbar_homepage'}}
                    style={[comStyles.icon, {tintColor: tintColor}]}
                />
            ),
        }},

    Shop: { screen: StackShop,
        navigationOptions: {
            tabBarLabel: '商家',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={{uri:'icon_tabbar_merchant_normal'}}
                    style={[comStyles.icon, {tintColor: tintColor}]}
                />
            ),
        } },

    Mine: { screen: StackMine,
        navigationOptions: {
            tabBarLabel: '我的',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
                <View>
                    {/*小红点*/}
                    <View style={[comStyles.dot,{top:1, right:1}]}>
                        <Text style={{color:'#fff',fontSize:7}}>14</Text>
                    </View>

                    <Image
                        source={{uri:'icon_tabbar_mine'}}
                        style={[comStyles.icon, {tintColor: tintColor}]}
                    />
                </View>
            ),
        } },

    More: { screen: StackMore,
        navigationOptions: {
            tabBarLabel: '更多',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={{uri:'icon_tabbar_misc'}}
                    style={[comStyles.icon, {tintColor: tintColor}]}
                />
            ),
        } },
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
            marginBottom: -5,

        },
    },
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    animationEnabled: false, // 切换页面时不显示动画
}

);

const StackRoot = StackNavigator(
    {
        Main: { screen: Main },
        Food: { screen: food },
    },

    {
        headerMode: 'none',
    }
);



export default StackRoot;
