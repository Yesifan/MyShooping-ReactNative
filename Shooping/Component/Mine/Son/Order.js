/**
 * Created by y5049 on 2017/5/26.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

import {comStyles} from '../../../js/css.js'

import HeaderBar from '../../../js/Part/HeaderBar.js'
import IconCell from '../../../js/Part/IconCell'


export default class Order extends Component {

    constructor(props)
    {
        super(props);

        this.state=({
            order:[]
        })
    }

    componentWillMount()
    {
        const { params } = this.props.navigation.state;

        this.handleGetOrder(params.user_ID);
    }

    handleGetOrder(id)
    {

        fetch('http://192.168.111.2:3000/server/readorder',{

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                user_ID:id
            })})
            .then((response) => response.json())
            .then((resJson)=>
            {
                //console.log('res',resJson);

                this.setState({order:resJson});

            })
            .catch((error) => {console.error(error);});
    }

    render() {

        const  navigation  = this.props.navigation;

        const text = (<Text style={comStyles.text}>我的订单</Text>);

        const icon = (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={{uri:'navigationbar_arrow_up'}}
                    style={{height:26,width:14,paddingLeft:5}}
                />
            </TouchableOpacity>
        );

        const timeText = (time)=>
        {
            let date = new Date(time).toLocaleString();

            return <Text>{date}</Text>
        };
        return (
            <View style={comStyles.box}>
                <HeaderBar
                    left = {icon}
                    middle = {text}
                />
                <View style={comStyles.content}>
                    <ScrollView>

                        <View style={{marginTop:10}}>
                            {this.state.order.map((value,index) =>
                                <IconCell key={index} title={value.shopname}
                                          extends={ timeText(value.time) } />)}
                        </View>

                    </ScrollView>
                </View>
            </View>
        );

    }
}