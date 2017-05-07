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
            avatar:'new_friend',
            userName:'点击我登陆',
            message:0,
        }
    }


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

        const userBox = (
            <TouchableOpacity onPress={()=>alert('这里写登陆')}>
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
                <HeaderBar
                    height={120}
                    right={icon}
                    left={userBox}
                />
                <View style={{flex:1}}>

                    {/*头部cell*/}
                    <View style={styles.sonBar}>
                        <View style={[styles.sonItem,{borderRightWidth:1, borderColor:'#C4E1FF',}]}>
                            <Text style={[styles.text,{marginBottom:5,}]}>10000.00</Text>
                            <Text style={styles.text}>余额</Text>
                        </View>



                        <View style={[styles.sonItem,{borderLeftWidth:1, borderColor:'#C4E1FF',}]}>
                            <Text style={[styles.text,{marginBottom:5}]}>21</Text>
                            <Text style={styles.text}>收藏</Text>
                        </View>

                    </View>

                    {/*列表list*/}
                    <View style={{flex:1}}>

                        <ScrollView>

                            <View style={{marginTop:1}}>
                                <IconCell title = '我的订单' icon="xckc" button={()=>{alert("xxx")}} extends={<Text>查看全部订单</Text>}/>

                                <View style={[styles.sonBar,{backgroundColor:'#fff',marginTop:3}]}>

                                    <View style={styles.payItem}>
                                        <TouchableOpacity onPress={()=>alert('快付钱啦')}>
                                            <View style={styles.payItem}>
                                                <Image
                                                source={{uri:'order1'}}
                                                style={{width:44,height:32}}/>
                                                <Text>待付款</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.payItem}>
                                        <TouchableOpacity>
                                            <View style={styles.payItem}>
                                                <Image
                                                    source={{uri:'order2'}}
                                                    style={{width:44,height:32}}/>
                                                <Text>待使用</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.payItem}>
                                        <TouchableOpacity>
                                            <View style={styles.payItem}>
                                                <Image
                                                    source={{uri:'order3'}}
                                                    style={{width:44,height:32}}/>
                                                <Text>待评价</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.payItem}>
                                        <TouchableOpacity>
                                            <View style={styles.payItem}>
                                                <Image
                                                    source={{uri:'order4'}}
                                                    style={{width:44,height:32}}/>
                                                <Text>退款/售后</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

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
})

