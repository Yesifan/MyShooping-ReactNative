/**
 * Created by y5049 on 2017/5/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
    TouchableOpacity,
} from 'react-native';

import {connect,Provider} from 'react-redux';
import { onOff } from '../../Redux/action/action'
import { getStore } from '../../Redux/Store/configStore'

const Dimensions = require('Dimensions');

const screenWidth = Dimensions.get('window').width;


const Store = getStore();

export default class IconCell extends Component {

    constructor(props)
    {
        super(props);

        // this.state = {
        //     OnOff: false,
        // }
    }

    static defaultProps = {
        //标题
        title: 'MyScene',
        //是显示开关还是显示箭头按钮
        isSwitch: false,
        //icon
        icon:null,
        //按钮事件，默认null
        button:null,
    };

    render() {
        return (
            <Provider store={getStore()}>
                <TouchableOpacity onPress={this.props.button}>

                    <View style={styles.cell}>

                        <View style={styles.leftCell}>
                            <Image
                                source={{uri:this.props.icon}}
                                style={{width:30,height:30}}
                            />
                            <Text> {this.props.title} </Text>

                        </View>

                        <View style={styles.rightCell}>
                            {this.props.extends}

                            {
                                this.props.isSwitch?
                                    <_Switch/>
                                    :
                                    <Image
                                        source={{uri:'home_arrow'}}
                                        style={{width:20,height:30}}
                                    />
                            }

                        </View>
                    </View>
                </TouchableOpacity>
            </Provider>
        );
    }
}

class SwitchView extends Component {

    _OnOff() {
        const action = onOff();
        Store.dispatch(action);
    }

    render() {
        return (
            <Switch
                value={this.props.OnOff}
                onValueChange={this._OnOff.bind(this)}/>
        )

    }
}

const mapStateToProps = (state)=>{

    return {
        //state.XXX 必须与reducer同名

        OnOff:state.reducer.OnOff,
    }
};

const _Switch = connect(mapStateToProps)(SwitchView);

export const styles = StyleSheet.create({
    cell: {
        width: screenWidth,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems:'center',
    },

    leftCell: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:5,

    },

    rightCell: {
        flexDirection: 'row',
        alignItems:'center',
        marginRight:5,

    }

});