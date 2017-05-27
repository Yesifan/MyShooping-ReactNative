/**
 * Created by y5049 on 2017/5/16.
 */
import React, {Component} from 'react'


import Button from '../Component/Button'
import List from "../Component/List";

export default class OrderManage extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            order:undefined,
        };
    }

    componentWillMount()
    {

        this.handleGetShop();

    }

    //通过fetch获得商家列表
    handleGetShop()
    {

        fetch('http://192.168.111.2:3000/server/readorder',{

            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((resJson)=>
            {
                this.setState({order:resJson});
                resJson.map((value)=>console.log(value));
            })
            .catch((error) => {console.error(error);});
    }

    handleItems(value)
    {
        let date = new Date(value.time).toLocaleString();
        //let time = date(value.time);
        return [value.shopname,value.customer,date]
    }
    render() {

        const styles = {
            container: {
                display:'flex',
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#e9ecf3',

            },

            content: {
                display:'flex',
                alignItems:'center',
                height:'90%',
                width:'90%',
                borderRadius:10,
                flexDirection:'column',
            },

            header:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'flex-end',
                width:'90%',
                height:60,

            },

            table:{
                width:'90%',
                flex:1,
            },

            title:{
                fontSize:25,
                color:'#225592'
            },

            dialog:{
                display:'flex',
                flexDirection:'column',

                position:'absolute',
                width:400,
                height:280,
                margin:'auto',
                top:0,
                bottom:0,
                boxShadow:'0 0 100px #888888',
                borderRadius:30,


            },

            dialogHeader:{
                width: 'auto',
                height: 'auto',
                textAlign:'center',
                fontWeight:'bold',
                fontSize:24,
                marginTop:10,

            },

            dialogContent:{
                flex:1,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-around',
            },

            dialogBottom:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center',
                width: 'auto',
                height: 'auto',
                margin: 10,
            },

            input:{
                display:'flex',
                width:238,
                height:26
            },

            inputSpan:{
                width: 60,
                textAlign:'center',
                backgroundColor: '#00B7FF',
                border:'1px solid #00B7FF',

                color: '#fff',
                lineHeight:'24px',

                fontSize: 13,
                height: 24,
            },

            inputField:{
                flex: 1,
                border:'1px solid #00B7FF',
                fontSize: 13,
                paddingLeft: 10,
            },

            border:{
                /* border-width: 1px; */
                borderRadius:60,
                listStyle: 'none',
                /* padding: 10px; */
                border:`1px solid #00B7FF`,
                padding:'3px 10px',

                color:'#00B7FF',

                fontSize:13,

                cursor:'pointer',

                marginRight:10

                //padding: 4 14,
            },

            selectImage:{
                display:'flex',
                width:238,
                height:50,
                alignItems:'center',
                justifyContent:'center',
            }

        };

        const {order} = this.state;

        let TITLE = ['商店','顾客','时间'];

        // const order = [
        //     {'shop':'KFC','customer':'叶思凡','time':'15:30'},
        //     {'shop':'蓝天点心','customer':'叶思凡','time':'17:30'},
        //     {'shop':'麦当劳','customer':'叶思凡','time':'20:30'}];

        return (
            order?
                <div style={styles.container}>
                    <div style={styles.content}>

                        <div style={styles.header}>

                            <span style={styles.title}>订单列表</span>

                        </div>

                        <hr style={{width:'92%',borderWidth:1.2,borderColor:'#225592',borderStyle:'solid',}}/>

                        <List TITLE={TITLE} listdata={order} handleItems={(value)=>this.handleItems(value)}/>

                    </div>
                </div>
                :
                <div style={styles.container}><h1>loading.....</h1></div>
        );
    }
}

