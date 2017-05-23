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
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

import {comStyles,screenWidth} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'
import Swiper from '../../js/Part/Swiper'
import TopView from './Son/com/TopListView'
import ShowBar from './Son/com/ShowBar'
import {Go} from '../../Redux/action/action'

import TopMenu from '../../Data/TopMenu.json'
import Adv from '../../Data/Adv.json'
import RImage from '../../Data/RecommendImage.json'



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

    //返回菜单栏
    renderScrollItem(){

        // 组件数组
        let itemArr = [];
        //载入MenuJson
        let dataArr = TopMenu.data;

        //console.log(dataArr);
        // 遍历创建组件
        for(let i=0; i<dataArr.length; i++){
            itemArr.push( <TopView dataArr={dataArr[i]}/> );
        }

        return itemArr;

    }

    //返回广告
    renderAdvItem(){

        // 组件数组
        let itemArr = [];
        //载入MenuJson
        let dataArr = Adv.adv;

        //点击事件
        let advButton = [()=>this.props.navigation.navigate('Food'),()=>alert('Hi')];

        //console.log(Image);
        // 遍历创建组件
        for(let i=0; i<dataArr.length; i++){

            itemArr.push(
                <TouchableOpacity onPress={advButton[i]}>
                    <View style={styles.advView}>
                        <Image source={{uri:dataArr[i].image}} style={{width:80,height:80}}/>

                        <Text style={styles.advText}>{dataArr[i].text}</Text>
                    </View>
                </TouchableOpacity>);
        }

        return itemArr;
    }

    render() {

        const { navigation } = this.props;

        //ShowBar的点击事件
        const ShowButton = {
            LButton:null,
            RTButton:()=>navigation.dispatch(Go({routeName:'Food',params:{shop:'chickenShop',food:'Chicken'}})),
            RBButton:null
        };

        //console.log(this.props);

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
                <ScrollView
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                    onStartShouldSetResponderCapture={(evt) => true}
                    onMoveShouldSetResponderCapture={(evt) => true}>

                <View style={styles.content}>

                    {/*顶部菜单栏*/}
                    <_Swiper
                        view={this.renderScrollItem()}
                        height={155}/>

                    {/*广告栏*/}
                    <__Swiper
                        view={this.renderAdvItem()}
                        center={false}
                        width={screenWidth-20}
                        height={96}
                        marginTop={10}
                        autoPlay={true}
                        time={4000}
                        Code="_SELECT"/>

                    {/*推荐栏*/}
                    <ShowBar
                        title="热门推荐"
                        RImage={RImage}
                        button={ShowButton}
                    />

                    <ShowBar
                        title="有好货"
                        RImage={RImage}
                        button={ShowButton}
                    />

                </View>
                </ScrollView>
            </View>


        );
    }
}

//把两个Swiper的state分开 这些应该没必要用redux把
const _mapStateToProps = (state)=>{
    //console.log('navigation',state);
    return {
        //state.XXX 必须与reducer同名
        select:state.reducer.select,
    }
};

const __mapStateToProps = (state)=>{
    //console.log('navigation',state);
    return {
        //state.XXX 必须与reducer同名
        select:state.reducer._select,
    }
};

const _Swiper = connect(_mapStateToProps)(Swiper);

const __Swiper = connect(__mapStateToProps)(Swiper);


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

    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
        alignItems: 'center',
    },

    advView:{
        width:screenWidth,
        flexDirection:'row',
        alignItems:'center',
        margin:8
    },

    advText:{
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        marginLeft:25,
    }

});



