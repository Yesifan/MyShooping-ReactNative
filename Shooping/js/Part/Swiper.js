/**
 * Created by y5049 on 2017/5/7.
 *
 * 一个bug:当你手指在此控件上 然后拉动了母View时 计时器会停止
 */
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { select,swiper } from '../../Redux/action/action'
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';


const Dimensions = require('Dimensions');

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

export default class Swiper extends Component{

    constructor(props) {
        super(props);
        // this.state = {
        //     select:1,
        // };

        this._index = 0;// 当前正在显示的图片
        this.x = 0;
        this.length = 0;
    }

    static defaultProps = {

        height:120,
        width:screenWidth,
        marginTop:0,

        time:2000,
        autoPlay:false,

        center:true,
        color:'#FFF',
        Code:'SELECT',
    };

    //遍历方法
    //     view:(()=>{
    //         // 组件数组
    //         let itemArr = [];
    //         //载入MenuJson
    //         let dataArr = ['red','blue'];
    //         console.log(dataArr.length);
    //         // 遍历创建组件
    //         for(var i=0; i<dataArr.length; i++){
    //             itemArr.push( <View key={i} style={{backgroundColor:dataArr[i],width:screenWidth,height:120}}/> );
    //         }
    //         return itemArr;})
    //
    //另一种遍历方法 直接用map遍历
    // -        let images = this.props.images.map((images) => {
    //     -            return (
    //         -                <TouchableWithoutFeedback>
    //             -                    <View style={{width:screenWidth,height:200,backgroundColor:images.color}}/>
    //             -                </TouchableWithoutFeedback>);
    //     -        });


    //默认渲染的页面
    renderScrollItem(){

        // 组件数组
        let itemArr = [];
        //载入MenuJson
        let dataArr = ['orange','blue'];

        // 遍历创建组件
        for(var i=0; i<dataArr.length; i++){
            itemArr.push( <View key={i} style={{backgroundColor:dataArr[i],width:screenWidth,height:120}}/> );
        }
        return itemArr;
    }

    renderCircles(imageLength){

        //组件数组
        var circlesArr = [];

        for(var i = 0; i<imageLength; i++)
        {
            circlesArr.push(
                <View style={ (i+1 == this.props.select) ? styles.circleSelected : styles.circle}/>
            )

        }

        return circlesArr;

    }

    render(){

        //是否可以读取到view 否则的话渲染默认页面
        let itemArr = this.props.view?this.props.view:this.renderScrollItem();

        this.length = itemArr.length;

        // 小圆点位置显示计算
        let circleLength = 6 * this.length + 5 * 2 * this.length;
        let center = (screenWidth - circleLength) / 2;

        return(
            <View style={{height:this.props.height,width:this.props.width,backgroundColor:'#fff',marginTop:this.props.marginTop,}}>
                <ScrollView
                    //横向滚动
                    horizontal={true}
                    //不显示滚动条
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}

                    onTouchStart = {this.props.autoPlay? ()=>this._onTouchStart() : null}
                    onTouchEnd = {this.props.autoPlay? ()=>this._onTouchEnd() : null}
                    onScrollEndDrag={(e)=>this._onScrollEndDrag(e)}
                    ref={(scrollView) => { this._scrollView = scrollView;}} >

                    <View style={{flexDirection:'row'}}>
                        {itemArr}
                    </View>
                </ScrollView>

                <View style={{flexDirection:'row',position:'absolute',bottom:2,right:this.props.center?center:10}}>
                    {this.renderCircles(this.length)}
                </View>
            </View>
        );
    }



    // 当手指按到scrollView时停止定时任务
    _onTouchStart(){
        // 当手指按到scrollView时停止定时任务
        clearInterval(this._timer);

        console.log("_onTouchStart");
    }

    //onTouchEnd仅在点击屏幕却未滑动时触发
    _onTouchEnd()
    {
        this._runFocusImage();

        console.log("_onTouchEnd");
    }

    _onScrollEndDrag(e)
    {
        this.x = e.nativeEvent.contentOffset.x;

        if((this.x - screenWidth * this._index) > 100)
        {
            //console.log("我大于100了吗"+(this.x - screenWidth * this._index));
            this._index++;

            this.props.dispatch(swiper({type:this.props.Code,index:this._index+1}))
        }
        else
        {
            if((this.x - screenWidth * this._index) < -100)
            {
                //console.log("我小于-100了吗"+(this.x - screenWidth * this._index));
                this._index--;

                this.props.dispatch(swiper({type:this.props.Code,index:this._index+1}))
            }
        }


        //移动
        this._scrollView.scrollTo({x:this._index * screenWidth, y: 0,animated: true});

        //重新打开定时器
        this._runFocusImage();

        console.log("_onScrollEndDrag");
    }


    //定时器
    _runFocusImage(){
        // 只有一个或者 autoPlay==false 则不启动定时任务
        if(this.length <= 1 || !this.props.autoPlay){
            return;
        }

        //莫名其妙的定时函数
        this._timer = setInterval(()=>{
                this._index++;

                if(this._index >= this.length){
                    this._index = 0;
                }

                //dispatch
                this.props.dispatch(swiper({type:this.props.Code,index:this._index+1}));

                this._scrollView.scrollTo({x:this._index * screenWidth, y: 0,animated: true});
            }, 10000);
    }

    // 组件装载完成
    componentDidMount(){
        //console.log(this.props.view);
        this._runFocusImage();
    }

    // 组件即将卸载
    componentWillUnmount(){
        //if autoPlay==true
        if(this.props.autoPlay)
        {
            clearInterval(this._timer);
        }
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

    //平时的样式
    circle: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'#bbbbbb',
        marginHorizontal:5,
    },
    //选中的样式
    circleSelected: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'red',
        marginHorizontal:5,
    }
});


