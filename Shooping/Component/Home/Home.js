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
import TopMenu from '../../Data/TopMenu.json'
import TopView from './Son/com/TopListView'



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

    renderScrollItem(){

        // 组件数组
        let itemArr = [];
        //载入MenuJson
        let dataArr = TopMenu.data;
        console.log(dataArr.length);
        // 遍历创建组件
        for(var i=0; i<dataArr.length; i++){
            itemArr.push( <TopView dataArr={dataArr[i]}/> );
        }

        return itemArr;

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

                <View style={styles.content}>

                    <Swiper
                        view={this.renderScrollItem()}
                        height={155}/>

                    <Text style={comStyles.title}  onPress={() => navigate('Food')}>home</Text>
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

    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
        alignItems: 'center',
    }

})



