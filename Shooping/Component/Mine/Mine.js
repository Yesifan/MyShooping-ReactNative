/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import {comStyles,screenWidth} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'
import IconCell from '../../js/Part/IconCell'



export default class Mine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //用户头像
            avatar:'new_friend',
            //用户名字
            userName:'点击我登陆',
            //余额
            money:10000.00,
            //收藏
            collect:21,
        }
    }


    //TabNavigation导航栏选项
    static navigationOptions = {
        tabBarLabel: '我的',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <View>
                {/*小红点*/}
                <View style={[comStyles.dot,{top:1, right:1}]}>
                    <Text style={{color:'#fff',fontSize:7}}>14</Text>
                </View>
                <Image
                    source={require('./icon_tabbar_mine.png')}
                    style={[comStyles.icon, {tintColor: tintColor}]}
                />
            </View>
        ),
    };


    render() {

        //用户头像和名字 包含登陆按钮及个人设置按钮
        const userBox = (
            <TouchableOpacity onPress={()=>alert('这里写登陆，登陆后改成跳转设置按钮')}>
                <View style={styles.userBox}>

                    {/*头像*/}
                    <Image
                        source={{uri:this.state.avatar}}
                        style={[styles.avatar]}
                    />

                    {/*名字*/}
                    <Text style={comStyles.text}>{this.state.userName}</Text>
                </View>
            </TouchableOpacity>
        );

        //向右箭头按钮 也应该写一个跳转按钮
        const icon = (
            <TouchableOpacity>
                <Image
                    source={{ uri:'icon_cell_rightarrow' }}
                    style={{ width:16,height:26,marginLeft:5,marginTop:20,tintColor:'#fff' }}
                />
            </TouchableOpacity>
        );

        return (
            <View style={comStyles.box}>
                {/*头部标题*/}
                <HeaderBar
                    height={120}
                    right={icon}
                    left={userBox}
                />

                {/*头部cell*/}
                <View style={styles.sonBar}>

                    <TouchableOpacity style={{flex:1}} onPress = {() => this.setState({money: this.state.money - 100})}>
                        <HeaderItem title = "余额" number = {this.state.money}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress = {() => alert("我的收藏有21个")}>
                        <HeaderItem title = "收藏" number = {this.state.collect}  />
                    </TouchableOpacity>
                </View>

                {/*列表list ScrollView*/}
                <View style={{flex:1}}>
                    <View style={{flex:1}}>

                        <ScrollView>

                            {/*我的订单 和 下层列表*/}
                            <View style={{marginTop:1}}>
                                <IconCell title = '我的订单' icon="xckc" button={()=>{alert("xxx")}} extends={<Text>查看全部订单</Text>}/>

                                <View style={[styles.sonBar,{backgroundColor:'#fff',marginTop:3}]}>

                                    <PayItem uri="order1" title="待付款" button={()=>alert("快付钱")}/>

                                    <PayItem uri="order2" title="待使用" button={()=>alert("快买东西啦")}/>

                                    <PayItem uri="order3" title="待评价" button={()=>alert("快评价")}/>

                                    <PayItem uri="order4" title="退款/售后" button={()=>alert("就你事情多")}/>

                                </View>
                            </View>

                            {/*下面都是普通ScrollVIew*/}
                            <View style={{marginTop:10}}>
                                <IconCell title = "我的VIP" icon="avatar_vip" button={()=>{alert("xxx")}} extends={ <Text>剩余30天</Text> }/>
                                <IconCell title = '我的收藏' icon="avatar_grassroot" button={()=>{alert("xxx")}}/>
                                <IconCell title = '我的足迹' icon="zlam" button={()=>{alert("xxx")}}/>
                            </View>

                            <View style={{marginTop:10}}>
                                <IconCell title = '积分商城' icon="avatar_vgirl" button={()=>{alert("xxx")}}/>
                            </View>

                            <View style={{marginTop:10}}>
                                <IconCell title = "今日推荐" icon="rm" button={()=>{alert("xxx")}}
                                          // 显示NEW图标
                                          extends={
                                              <Image
                                                source={{ uri:'me_new' }}
                                                style={{ width:24,height:13, }}
                                              />}
                                />

                                <IconCell title = '优惠卷' icon="shfw" button={()=>{alert("xxx")}}/>
                            </View>

                            <View style={{marginTop:10}}>
                                <IconCell title = "我要合作" icon="cnxh" button={()=>{alert("xxx")}} extends={ <Text>轻松开店，招财进宝！</Text> }/>
                            </View>

                        </ScrollView>

                    </View>
                </View>
            </View>

        );
    }
}

//组成头部Cell的Item
class HeaderItem extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        return(
                <View style={[styles.sonItem,{borderRightWidth:1, borderColor:'#C4E1FF'}]}>
                    <Text style={[styles.text,{marginBottom:5,}]}>{this.props.number}</Text>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
        );
    }

}

//组成我的订单下半部分的Item
class PayItem extends Component {

    constructor(props) {
        super(props);

    }

    render(){

        return(
            <View style={styles.payItem}>
                <TouchableOpacity onPress={this.props.button}>
                    <View style={styles.payItem}>
                        <Image
                            source={{uri:this.props.uri}}
                            style={{width:44,height:32}}/>
                        <Text>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    text: {
        color:'#fff',

    },

    userBox:{
        flexDirection:'row',

        alignItems:'center',
        marginTop:20

    },

    avatar:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },

    //头部下半部分
    sonBar:{
        width:screenWidth,
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#ACD6FF',

    },

    sonItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

        marginTop:2,
        marginBottom:2,

    },

    payItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
});

