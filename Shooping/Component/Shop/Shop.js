/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';



import {comStyles} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'
import ShopItem from './Son/com/ShopItem'

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

        fetch('http://192.168.111.2:3000/server/readshop',{

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
            .catch((error) => {console.error(error);});
    }



    render() {
        let renderItem = this.state.shop.map((value,index)=>
            <ShopItem id={value.id} name={value.name} type={value.type} icon={value.icon}/>);


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


