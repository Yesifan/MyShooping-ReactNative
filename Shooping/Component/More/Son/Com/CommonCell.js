/**
 * Created by y5049 on 2017/5/4.
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

var Dimensions = require('Dimensions');

var screenWidth = Dimensions.get('window').width;

var screenHeight = Dimensions.get('window').height;



export default class More extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            OnOff: false,
        }
    }
    static defaultProps = {
        title: 'MyScene',
        isSwitch: false,
    };

    render() {
        return (
            <TouchableOpacity onPress={this.props.button}>
                <View style={styles.cell}>

                    <View style={styles.leftCell}>
                        <Text> {this.props.title} </Text>
                    </View>

                    <View style={styles.rightCell}>
                        {this.props.isSwitch?
                            <Switch
                                value={this.state.OnOff}
                                onValueChange={() => {this.setState({OnOff: !this.state.OnOff})}}
                            />
                            :
                            <Image
                                source={{uri:'home_arrow'}}
                                style={{width:20,height:30}}
                            />
                        }

                    </View>
                </View>
             </TouchableOpacity>
        );
    }
}

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
        marginLeft:5,

    },

    rightCell: {
        flexDirection: 'row',
        marginRight:5,

    }



})
