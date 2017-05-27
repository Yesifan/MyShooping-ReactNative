/**
 * Created by y5049 on 2017/4/30.
 */

import React, { PropTypes }from 'react';
import { View,Image,Text } from 'react-native';
import { TabNavigator,StackNavigator,addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Home from './Component/Home/Home';
import Shop from "./Component/Shop/Shop";
import More from "./Component/More/More";
import Mine from "./Component/Mine/Mine";

import food from './Component/Home/Son/food';
import aboutMe from './Component/More/Son/AboutMe';
import Login from "./Component/Mine/Son/Login";

import {comStyles} from './js/css.js';
import './js/storage';
import Order from "./Component/Mine/Son/Order";

//警告屏蔽
console.ignoredYellowBox = ['Warning: Each child in an array or iterator should have a unique "key" prop.','Remote debugger is in a background tab which may cause apps to perform slowly.','Remote debugger is in a background tab which may cause apps to perform slowly','Debugger and device times have drifted by more than 60s. Please correct this by running'];



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
        Mine: { screen: Mine},
        Order:{ screen: Order},
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
    SHome: { screen: StackHome,
        navigationOptions: {
            tabBarLabel: '主页',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({focused}) => (
                    focused?
                        <Image
                            source={{uri:'icon_tabbar_homepage_selected'}}
                            style={[comStyles.icon]}
                        />:
                        <Image
                            source={{uri:'icon_tabbar_homepage'}}
                            style={[comStyles.icon]}
                        />
            ),
        }},

    SShop: { screen: StackShop,
        navigationOptions: {
            tabBarLabel: '商家',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({focused}) => (
                focused?
                    <Image
                        source={{uri:'icon_tabbar_merchant_selected'}}
                        style={[comStyles.icon]}
                    />:
                    <Image
                        source={{uri:'icon_tabbar_merchant_normal'}}
                        style={[comStyles.icon]}
                    />
            ),
        } },

    SMine: { screen: StackMine,
        navigationOptions: ()=>{

        //const { state } = navigation;

        //console.log('Main-Mine',this);

        return {
            tabBarLabel: '我的',
            //通过focused来判断是否选中
            tabBarIcon: ({focused}) => (
                focused ?
                    <View>
                        {/*小红点*/}
                        {/*<View style={[comStyles.dot, {top: 1, right: 1}]}>*/}
                            {/*<Text style={{color: '#fff', fontSize: 7}}>14</Text>*/}
                        {/*</View>*/}

                        <Image
                            source={{uri: 'icon_tabbar_mine_selected'}}
                            style={[comStyles.icon]}
                        />
                    </View> :
                    <View>

                        {/*小红点*/}
                        {/*<View style={[comStyles.dot, {top: 1, right: 1}]}>*/}
                            {/*<Text style={{color: '#fff', fontSize: 7}}></Text>*/}
                        {/*</View>*/}

                        <Image
                            source={{uri: 'icon_tabbar_mine'}}
                            style={[comStyles.icon]}
                        />
                    </View>
            ),
        }
        }
        },

    SMore: { screen: StackMore,
        navigationOptions: {
            tabBarLabel: '更多',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({focused}) => (
                focused?
                    <Image
                        source={{uri:'icon_tabbar_misc_selected'}}
                        style={[comStyles.icon]}
                    />:
                    <Image
                        source={{uri:'icon_tabbar_misc'}}
                        style={[comStyles.icon]}
                    />
            ),


        } },
},

{
    tabBarOptions: {
        activeTintColor: '#ED5100', // 文字和图片选中颜色
        inactiveTintColor: '#BBBBBB', // 文字和图片默认颜色
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
    swipeEnabled:false, //无法在两个便签间滑动
}

);


export const StackRoot = StackNavigator(
    {
        Main: { screen: Main },
        Food: { screen: food },
        Login: { screen: Login},
    },
    {
        headerMode: 'none',
    }
);


const AppWithNavigationState = ({ dispatch, nav }) => (
    <StackRoot navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);
