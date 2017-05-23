/**
 * Created by y5049 on 2017/5/9.
 */

import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');

var screenWidth = Dimensions.get('window').width;

var screenHeight = Dimensions.get('window').height;



export default class ShowBar extends Component {

    constructor(props)
    {
        super(props);

    }

    static defaultProps = {
        title:'标题',
        color:'#8DEEEE',
        width:screenWidth,
        height:180,
        RImage:{
            "LUri"  : "bg_merchant_photo_placeholder_small",
            "RTUri" : "bg_merchant_photo_placeholder_small",
            "RBUri" : "bg_merchant_photo_placeholder_small",

            "LIcon" : null,
            "RTIcon" : null,
            "RBIcon" : null
        },

        button:{
            LButton:null,
            RTButton:null,
            RBButton:null
        }
    };

    render() {
        return (

            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:6}}>
                <View style={styles.TopTitle}>
                    <View style={styles.line}/>
                    <Text style={[styles.title,{color:this.props.color}]}>{this.props.title}</Text>
                    <View style={styles.line}/>
                </View>

                <View style={[styles.cell,{width: this.props.width, height: this.props.height}]}>

                    {/*左部*/}
                    <View style={styles.leftCell}>
                        {/*左部推荐栏*/}
                        <View>
                            <Image
                                source={{uri:this.props.RImage.LIcon}}
                                style={{position:'absolute',top:0,left:0,width:76,height:76,zIndex:1}}
                            />

                            <TouchableOpacity onPress={this.props.button.LButton}>
                                <Image
                                    source={{uri:this.props.RImage.LUri}}
                                    style={{width:this.props.width/2-10,height:this.props.height-10}}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/*右部*/}
                    <View style={styles.rightCell}>

                        {/*右部上方推荐栏 设置下方边框线*/}
                        <View style={{borderBottomWidth:0.5,borderColor:'#DBDBDB'}}>
                            <Image
                                source={{uri:this.props.RImage.RTIcon}}
                                style={{position:'absolute',top:0,left:0,width:38,height:38,zIndex:1}}
                            />
                            <TouchableOpacity onPress={this.props.button.RTButton}>
                                <Image
                                    source={{uri:this.props.RImage.RTUri}}
                                    style={{width:this.props.width/2-10,height:this.props.height/2-5}}
                                />
                            </TouchableOpacity>
                        </View>
                        {/*右部下方推荐栏*/}
                        <View>
                            <Image
                                source={{uri:this.props.RImage.RBIcon}}
                                style={{position:'absolute',top:0,left:0,width:38,height:38,zIndex:1}}
                            />
                            <TouchableOpacity onPress={this.props.button.RBButton}>
                                <Image
                                    source={{uri:this.props.RImage.RBUri}}
                                    style={{width:this.props.width/2-10,height:this.props.height/2-5}}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    title: {
        fontSize:15,
    },
    cell: {
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems:'center',

        backgroundColor: '#fff',

    },

    TopTitle:{
        width:screenWidth,
        height:20.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',

    },

    line:{
        height:0.5,
        width:screenWidth/3+15,
        borderTopWidth:0.5,
        borderColor:'#DBDBDB'
    },

    leftCell: {
        flex:1,

        alignItems:'flex-end',

        marginTop:5,
        marginBottom:5,

        borderRightWidth:0.5,
        borderColor:'#DBDBDB',

    },

    rightCell: {
        flex:1,

        alignItems:'flex-start',

        marginTop:5,
        marginBottom:5,
        marginRight:5

    },



});