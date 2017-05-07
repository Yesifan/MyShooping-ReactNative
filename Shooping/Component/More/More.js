/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import CommonCell from '../../js/Part/IconCell'
import HeaderBar from '../../js/Part/HeaderBar'

import {comStyles} from '../../js/css.js'


export default class More extends Component {


    render() {
        const { navigation } = this.props;

        return (
            <View style={comStyles.box}>
                <HeaderBar
                    middle={<Text style={comStyles.text}>更多</Text>}
                />
                <View style={comStyles.content}>

                    <ScrollView>

                        <View style={{marginTop:10}}>
                            <CommonCell title = "收货地址" button={()=>{alert("xxx")}}/>
                            <CommonCell title = "消息提醒"/>
                        </View>

                        <View style={{marginTop:15}}>
                            <CommonCell title = "清空缓存"/>
                            <CommonCell title = "问卷调查"/>
                            <CommonCell title = "支付帮助"/>
                            <CommonCell title = "省流量模式" isSwitch = {true}/>
                        </View>

                        <View style={{marginTop:15}}>
                            <CommonCell title = "关于我们" button={()=>navigation.navigate('AboutMe')}/>
                            <CommonCell title = "问题反馈" />
                            <CommonCell title = "联系我们" />
                        </View>

                    </ScrollView>

                </View>
            </View>

        );
    }
}


