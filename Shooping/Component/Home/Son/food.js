/**
 * Created by y5049 on 2017/5/1.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {comStyles} from '../../../js/css.js'

import HeaderBar from '../../../js/Part/HeaderBar.js'


export default class food extends Component {

    static navigationOptions = {
        title: 'Food',    //设置navigator的title
    };


    componentDidMount(){

        this.props.navigation.setParams({food:"food"});

        console.log('food',this.props.navigation.state.params);
    };

    render() {

        console.log(this.props);

        const  navigation  = this.props.navigation;

        const text = (<Text style={comStyles.text}>Food</Text>);

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
                middle = {text}
                />
                <View style={comStyles.content}>
                </View>
            </View>
        );



    }
}


