/**
 * Created by y5049 on 2017/5/1.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';

import {comStyles,screenWidth} from '../../../js/css.js'

export default class Home extends Component {

    static navigationOptions = {
        title: 'Welcome',

    };

    constructor(props)
    {
        super(props);

    }

    render() {

        const { navigate } = this.props.navigation;

        console.log(this.props.navigation.state);


        return (
            <View style={comStyles.box}>
                <View style={comStyles.tabBar}>
                    {/*定位*/}
                    <View style={styles.leftBar}>
                        <Text style={comStyles.text}>温州</Text>
                    </View>

                    {/*搜索框*/}
                    <View style={styles.middleBar}>

                        <TextInput style={styles.textInput}
                                   underlineColorAndroid='transparent'
                                   placeholder = '商家,店铺...'
                        />

                    </View>

                    {/*功能图标*/}
                    <View style={styles.rightBar}>
                        <Image
                            source={{uri:'icon_mine_setting'}}
                            style={{height:24,width:24,marginRight:3}}
                        />

                        <Image
                            source={{uri:'icon_message'}}
                            style={{height:24,width:24}}
                        />
                    </View>
                </View>
                <View style={comStyles.content}>
                    <Text style={comStyles.title}  onPress={() => navigate('Food')}>home</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({


    leftBar: {
        flexDirection: 'row',
        marginLeft:10
    },

    middleBar: {
        flexDirection: 'row',
    },

    rightBar: {
        marginRight:5,
        flexDirection: 'row',

    },

    textInput: {
        backgroundColor: '#fff',

        fontSize: 15,
        height:35,
        width: screenWidth*0.65,

        justifyContent:'center',
        alignItems:'center',

        paddingBottom: 0,
        paddingTop:0,

        paddingLeft:10,
        borderRadius:30,

    },

})

