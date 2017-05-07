/**
 * Created by y5049 on 2017/5/6.
 */


import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import {comStyles} from '../../../js/css.js'

import HeaderBar from '../../../js/Part/HeaderBar.js'

export default class AboutMe extends Component {




    render() {
        const  navigation  = this.props.navigation;

        const title = (<Text style={comStyles.text}>关于我们</Text>);

        const icon = (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={{uri:'navigationbar_arrow_up'}}
                    style={{height:26,width:14,paddingLeft:5}}
                />
            </TouchableOpacity>
        );

        return (
            <View style={comStyles.box}>
                <HeaderBar
                    left = {icon}
                    middle = {title}
                />
                <View style={comStyles.content}>
                    <Text style={styles.title} >制作人员</Text>
                    <Text style={styles.text} >叶思凡</Text>
                    <Text style={styles.text} >E-mail:504936436@qq.com</Text>
                    <Text style={styles.text} >温州大学瓯江学院14计算机与科学</Text>
                    {/*<Image source={{uri:'wechat'}} style={{width:150,height:150,marginBottom:30}}/>*/}

                </View>
            </View>

        );
    }
}

export const styles = StyleSheet.create({

    //导航栏上标题
    text:{
        fontSize: 18,
        textAlign: 'center',
        marginTop:5
    },

    title: {
        fontSize: 21,
        textAlign: 'center',
        margin: 10,
        fontWeight:'bold'
    },


})

