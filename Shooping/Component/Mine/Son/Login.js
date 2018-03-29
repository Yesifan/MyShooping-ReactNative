/**
 * Created by y5049 on 2017/5/23.
 */
import React, { Component } from 'react';
import config from '../../../js/config';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import {connect} from 'react-redux';

import { loginUser } from '../../../Redux/action/action'
import {comStyles,screenWidth} from '../../../js/css.js'

import HeaderBar from '../../../js/Part/HeaderBar.js'


class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state=({
            username:undefined,
            password:undefined,
            opacity:0,
        });
    }

    static navigationOptions = {
        title: 'Login',    //设置navigator的title
    };


    componentDidMount(){

    };

    handleLogin(user,password)
    {
        fetch(config.domain+'/server/userlogin',
            {
                //允许接收cookie
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        name: user,
                        password: password,
                    }
                })})
            .then((response) => response.json())
            .then((resJson) => {
                console.log(resJson);

                //如果返回true则将用户信息存入AsyncStorage
                resJson.state?
                    storage.save({
                    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
                    data: {
                        userid: resJson.id,
                        nickname:resJson.nickname,
                        avatar:'new_friend',
                        token: resJson.token,
                    },

                    // 如果不指定过期时间，则会使用defaultExpires参数
                    // 如果设为null，则永不过期
                    expires: 1000 * 3600 * 24 * 7
                }) : this.setState({opacity:1}) ;
            })
            .then(()=>{
                storage.load({
                        key: 'loginState',

                        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                        autoSync: false,

                        // syncInBackground(默认为true)意味着如果数据过期，
                        // 在调用sync方法的同时先返回已经过期的数据。
                        // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
                        syncInBackground: true,

                        // 你还可以给sync方法传递额外的参数
                        // syncParams: {
                        //     extraFetchOptions: {
                        //         // 各种参数
                        //     },
                        //     someFlag: true,
                        // },

                    })
                    .then(ret => {
                        // 如果找到数据，则在then方法中返回
                        // 只能在then这个方法内继续处理ret数据
                        //console.log(ret);

                        //登陆后将用户信息发送给redux
                        this.props.dispatch(loginUser(ret));

                        //然后跳转
                        this.props.navigation.navigate('Mine');
                        //console.log(this.props.user);
                    })
                    .catch(err => {
                        //如果没有找到数据且没有sync方法，
                        //或者有其他异常，则在catch中返回
                        console.warn(err.message);
                        switch (err.name) {
                            case 'NotFoundError':
                                console.log(err);
                                break;
                            case 'ExpiredError':
                                console.log(err);
                                break;
                    }})})
            .catch((error) => {console.error(error);});


    }

    render() {


        const  navigation  = this.props.navigation;

        const text = (<Text style={comStyles.text}>登陆</Text>);

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

                <View style={[comStyles.content,{justifyContent:'flex-start',padding:10}]}>
                    <View style={Styles.image}>
                        <Image
                            source={{uri:'icon_shop'}}
                            style={{height:100,width:100,borderRadius:100}}
                        />
                    </View>

                    <View style={Styles.input}>

                        <TextInput style={Styles.inputUser}
                                   underlineColorAndroid='transparent'
                                   placeholder = '用户名'
                                   onChangeText={(input) => this.setState({username: input})}/>

                        <TextInput style={Styles.inputPw}
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'
                                   placeholder = '密码'
                                   onChangeText={(input) => this.setState({password: input})}/>

                    </View>

                    <Text style={{color:'red',fontWeight:'bold',opacity:this.state.opacity}}>密码或者用户名错误</Text>

                    <View>
                        <TouchableOpacity onPress={()=>this.handleLogin(this.state.username,this.state.password)}>
                            <View style={Styles.button}>
                                <Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>登 录</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );

    }
}

const mapStateToProps = (state)=>{
    //console.log('navigation',state);
    return {
        user:state.reducer.user,
        avatar : state.reducer.user.avatar,
        nickname : state.reducer.user.nickname,
        id : state.reducer.user.id,
    }
};

//继承了Store的控件
const _Login = connect(mapStateToProps)(Login);

export default _Login;

const Styles = StyleSheet.create({
    image:{
      margin:10
    },

    input:{
        margin:10
    },

    button:{
        width:screenWidth*0.85,
        height:45,
        backgroundColor:'#63B8FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop:20
    },

    inputUser:{
        width:screenWidth*0.9,
        height:35,
        borderWidth:0.5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingLeft:20,
        paddingBottom: 0,
        paddingTop:0,
        fontSize:15

    },

    inputPw:{
        width:screenWidth*0.9,
        height:35,
        borderWidth:0.5,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingLeft:20,
        paddingBottom: 0,
        paddingTop:0,
        fontSize:15
    },

});