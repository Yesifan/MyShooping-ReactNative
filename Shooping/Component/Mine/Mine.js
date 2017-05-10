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

import { NavigationActions } from 'react-navigation'

import {comStyles,screenWidth} from '../../js/css.js'
import HeaderBar from '../../js/Part/HeaderBar'
import IconCell from '../../js/Part/IconCell'



export default class Mine extends Component {

    // static navigationOptions = {
    //
    //     tabBarLabel: '我的',
    //     //通过focused来判断是否选中
    //     tabBarIcon: ({ focused,props }) =>
    //         focused?
    //             <View>
    //                 {/*小红点*/}
    //                 <View style={[comStyles.dot,{top:1, right:1}]}>
    //                     <Text style={{color:'#fff',fontSize:7}}>14</Text>
    //                 </View>
    //
    //                 <Image
    //                     source={{uri:'icon_tabbar_mine_selected'}}
    //                     style={[comStyles.icon]}
    //                 />
    //             </View> :
    //             <View>
    //                 {/*小红点*/}
    //                 <View style={[comStyles.dot,{top:1, right:1}]}>
    //                     <Text style={{color:'#fff',fontSize:7}}>{props}</Text>
    //                 </View>
    //
    //                 <Image
    //                     source={{uri:'icon_tabbar_mine'}}
    //                     style={[comStyles.icon]}
    //                 />
    //             </View>
    // };
    constructor(props) {
        super(props);

        this.state = {
            event:14,

            avatar:'new_friend',
            userName:'点击我登陆',

            money:10000,
            collect:21,
        };
    }

    componentWillMount()
    {
        this.props.navigation.setParams({event:this.state.event});
        console.log("装载完成", this.props.navigation.state.params);
    }
    // 组件装载完成
    componentDidMount(){

        console.log("Mine", this.props.navigation.state.params);
    }

    render() {

        const {navigation} = this.props;

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

                        <TouchableOpacity style={{flex:1}} onPress = {()=>this.setState({money:this.state.money - 200})}>
                            <ShowItem number = {`${this.state.money}`} title="余额"/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex:1}} onPress = {()=>alert("您有"+this.state.collect+"个收藏")}>
                            <ShowItem number = {`${this.state.collect}`} title="收藏"/>
                        </TouchableOpacity>

                    </View>

                    {/*列表list*/}
                    <View style={{flex:1}}>

                        <ScrollView>

                            <View style={{marginTop:1}}>
                                <IconCell title = '我的订单' icon="xckc" button={()=>{alert("xxx")}} extends={<Text>查看全部订单</Text>}/>

                                <View style={[styles.sonBar,{backgroundColor:'#fff',marginTop:3}]}>

                                    <PayItem uri="order1" title="待付款" button={() => alert("付钱啦！")}/>

                                    <PayItem uri="order2" title="待使用" button={() => alert("付钱啦！")}/>

                                    <PayItem uri="order3" title="待评价" button={() => alert("付钱啦！")}/>

                                    <PayItem uri="order4" title="退款/售后" button={() => alert("就你事情多！")}/>
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



    // 组件即将卸载
    componentWillUnmount(){
    }
}

class ShowItem extends Component {
    render(){
        return(
            <View style={[styles.sonItem,{borderRightWidth:1, borderColor:'#C4E1FF',}]}>
                <Text style={styles.text}>{this.props.number}</Text>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

class PayItem extends Component {
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
        )
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


