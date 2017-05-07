/**
 * Created by y5049 on 2017/5/7.
 */
'use strict';

import React, {Component} from 'react';

import {

    TouchableWithoutFeedback,
    ScrollView,
    Animated,
    View,
    StyleSheet,
} from 'react-native';

const Dimensions = require('Dimensions');

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

export default class Swiper extends Component{

    constructor(props) {
        super(props);
        this.state = {
            images : [
                {
                    color:'#dfe24a',
                    index:1,
                },
                {
                    color:'#68eaf9',
                    index:2,
                },
                {
                    color:'#ef9af9',
                    index:3,
                }
            ],// 使用颜色代替图片

            isNeedRun: true,

            select:1

        };

        this._index = 0;// 当前正在显示的图片
        this.x = 0;
        this._max = this.state.images.length;// 图片总数
    }



    render(){

        // 图片列表 哪里来的Key啊 不就一个map吗
        let images = this.state.images.map((images) => {
            return (
                <TouchableWithoutFeedback>
                    <View style={{width:screenWidth,height:200,backgroundColor:images.color}}/>
                </TouchableWithoutFeedback>);
        });

        // 小圆点指示器
        let circles = this.state.images.map((images) => {
            return (<View style={ (images.index == this.state.select) ? styles.circleSelected : styles.circle}/>);
        });

        // 小圆点位置居中显示
        let imageLength = this.state.images.length;
        let circleLength = 6 * imageLength + 5 * 2 * imageLength;
        let center = (screenWidth - circleLength) / 2;

        return(
            <View style={{height:200,width:screenWidth}}>
                <ScrollView horizontal={true}
                            //不显示滚动条
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}


                            //onTouchStart={()=>this._onTouchStart()}

                            onScrollEndDrag={(e)=>this._onTouchEnd(e)}

                            // scrollEventThrottle={1000}
                            // onScroll={()=>this._onTouchEnd()}
                            // onScroll={(e)=>{this._onScroll(e)}}

                            ref={(scrollView) => { this._scrollView = scrollView;}}>
                    <Animated.View style={{flexDirection:'row'}}>{images}</Animated.View>
                </ScrollView>

                <View style={{flexDirection:'row',position:'absolute',top:180,left:center}}>
                    {circles}
                </View>


            </View>
        );

    }

    _onTouchEnd(e)
    {
        this.x = e.nativeEvent.contentOffset.x;

        if((this.x - screenWidth * this._index) > 100)
        {
            console.log("我大于100了吗"+(this.x - screenWidth * this._index));
            this._index = this._index + 1;
            this.setState({select:this._index+1});
        }
        else
        {
            if((this.x - screenWidth * this._index) < -100)
            {
                console.log("我小于-100了吗"+(this.x - screenWidth * this._index));
                this._index = this._index - 1;
                this.setState({select:this._index+1});
            }
        }

        //三目运算符
        //((this.x - screenWidth * this._index) > 100)? this._index = this._index + 1:((this.x - screenWidth * this._index) < -100)? this._index = this._index - 1:null;

        //移动
        this._scrollView.scrollTo({x:this._index * screenWidth, y: 0,animated: true});

        //console.log(e.nativeEvent.contentOffset.x);
    }


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
    },
    circleContainer: {
        position:'absolute',
        left:0,
        top:120,
    },
    circle: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'#f4797e',
        marginHorizontal:5,
    },
    circleSelected: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'#ffffff',
        marginHorizontal:5,
    }
});

