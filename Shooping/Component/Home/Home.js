/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';



import {comStyles,screenWidth} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'
import Swiper from '../../js/Part/Swiper'


export default class Home extends Component {

    static navigationOptions = {
        title: 'Welcome',

    };

    constructor(props)
    {
        super(props);
    }

    componentWillMount()
    {

    }

    render() {

        const { navigate } = this.props.navigation;

        console.log(this.props.navigation.state);

        //这里要写下拉栏
        const left = (<Text style={comStyles.text}>温州</Text>);

        //这里输入框
        const middle = (
            <TextInput style={styles.textInput}
                       underlineColorAndroid='transparent'
                       placeholder = '商家,店铺...'
            />);

        //这里应该两按钮
        const right = (
            <View style={styles.rightBar}>
                <TouchableOpacity>
                    <Image
                        source={{uri:'icon_mine_setting'}}
                        style={{height:24,width:24,marginRight:3,tintColor:'#fff'}}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={{uri:'icon_message'}}
                        style={{height:24,width:24,tintColor:'#fff'}}
                    />
                </TouchableOpacity>
            </View>);


        return (
            <View style={comStyles.box}>

                <HeaderBar
                   left={left}
                   middle={middle}
                   right={right}
                />

                <View style={comStyles.content}>

                    <Text style={comStyles.title}  onPress={() => navigate('Home')}>home</Text>

                    <View style={{borderWidth:1}}>
                        <Swiper/>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    rightBar: {
        flexDirection: 'row',
        marginRight:5,
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

    wrapper: {

    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },

    image: {
        width:screenWidth,
        flex: 1
    }

})



