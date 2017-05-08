/**
 * Created by y5049 on 2017/5/8.
 */

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
} from 'react-native';


const Dimensions = require('Dimensions');

export const width = Dimensions.get('window').width;

// 全局的变量
let cols = 5;
let cellW = 60;
let cellH = 60;
let vMargin = (width - cellW * cols) / (cols + 1);

export default class TopListView extends Component {

    constructor(props)
    {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr),
        };
    };

    static defaultProps = {
        dataArr: []
    };


    render() {
        return (<ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    }

    // 具体的cell
    renderRow(rowData) {
        return(
            //onPress={rowData.button}
            <TouchableOpacity>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowData.image}} style={{width: 47, height: 47}}/>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:width
    },

    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:12,
        color:'gray'
    }
});
