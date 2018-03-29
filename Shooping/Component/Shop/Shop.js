/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import config from '../../js/config';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';



import {comStyles} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'
import ShopItem from './Son/com/ShopItem'
import TouchableItem from "react-navigation/src/views/TouchableItem";

export default class Shop extends Component {
    constructor(props)
    {
        super(props);

        this.state=({
            shop:[],
        })
    }

    componentWillMount()
    {

        this.handleGetShop();
    }

    handleGetShop()
    {
        console.log(config.domain);
        fetch(config.domain+'/server/readshop',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((resJson)=>
            {
                this.setState({shop:resJson});
                resJson.map((value)=>console.log(value));
            })
            .catch((error) => {console.error('网络错误',error);});
    }

    render() {
        let {navigation} = this.props;
        let renderItem = this.state.shop.map((value,index)=> {
            return (
                <ShopItem callback={()=>navigation.navigate('Group',{title:value.name})} id={value.id} key={index} name={value.name} type={value.type} icon={value.icon}/>
            )
        });

        return (
            <View style={comStyles.box}>
                <HeaderBar
                    middle={<Text style={comStyles.text}>商家</Text>}
                />

                <View style={comStyles.content}>

                    <ScrollView>

                    {renderItem}

                    </ScrollView>

                </View>
            </View>

        );
    }
}


