/**
 * Created by y5049 on 2017/5/21.
 */

import React, { Component, PropTypes  } from 'react';
import config from '../../../../js/config';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import {getStore} from '../../../../Redux/Store/configStore'


const Dimensions = require('Dimensions');

const screenWidth = Dimensions.get('window').width;


//const Store = getStore();

export default class ShopItem extends Component {

    constructor(props)
    {
        super(props);

    }

    static defaultProps = {
        //标题
        name: '第一家店',
        icon:'icon_shop',
        type:'中餐',

    };

    handleUpOrder(shopname)
    {
        fetch(config.domain+'/server/buy',
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    shopname:shopname,
                    customer:getStore().getState().reducer.user.nickname,
                }),})
            .then(()=>{
                console.log('SUCCESS');})
            .catch((err)=>console.log(err))

    }

    buttonHandle(shop)
    {
        //console.log();
        this.handleUpOrder(shop.name);
        shop.callback();
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>this.buttonHandle(this.props)}>

                <View style={styles.cell}>

                    <View style={styles.leftCell}>
                        <Image
                            source={{uri:`${config.domain}/images/${this.props.icon?this.props.icon:'icon_shop'}.png`}}
                            style={{width:50,height:50}}
                        />

                    </View>

                    <View style={styles.rightCell}>

                        <View style={styles.topLine}>
                            <Text style={styles.titleText}>{this.props.name}</Text>
                        </View>

                        <View style={styles.middleLine}>
                            <Text>星星星</Text>
                            <Text style={{marginLeft:2}}>月售:1000</Text>
                        </View>

                        <View style={styles.bottomLine}>
                            <Text>15￥起送</Text>
                            <Text>{this.props.type}</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export const styles = StyleSheet.create({
    cell: {
        width: screenWidth,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
        alignItems:'center',
        padding:5,
        backgroundColor:'#fff'
    },

    leftCell: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:5,

        // borderColor:'#fff',
        // borderWidth:1

    },

    rightCell: {
        flexDirection: 'column',
        justifyContent:'flex-start',
        marginRight:5,
        flex:1,

        paddingLeft:10

    },

    topLine:{
        flex:3,
        flexDirection:'row',

        alignItems:'center',
    },

    middleLine:{
        flex:2,
        flexDirection:'row',

    },

    bottomLine:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between'

    },

    titleText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#000'
    }

});