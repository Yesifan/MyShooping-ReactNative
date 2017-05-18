/**
 * Created by y5049 on 2017/5/16.
 */
import React, {Component} from 'react'
import Item from '../Component/Item'
import Button from '../Component/Button'
import List from "../Component/List";




class ShopManage extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            shop:undefined,
        };
    }

    componentWillMount()
    {
        const shop = [];
        fetch('http://192.168.111.2:3000/server/readshop',{

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((resJson)=>
            {
                this.setState({shop:resJson});
            })
            .catch((error) => {console.error(error);});
    }

    handleItems(value)
    {
        return [value.name,value.type,'1533484 次/天']
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

        };

        const {shop} = this.state;

        let TITLE = ['名称','类别','客流量'];



        return (
            shop?
            <div style={styles.container}>
                <div style={styles.content}>

                    <div style={styles.header}>

                        <span style={styles.title}>商家资料</span>

                        <Button font="增加" color="#225592" click={()=>console.log('点击了')}/>

                    </div>

                    <hr style={{width:'92%',borderWidth:1.2,borderColor:'#225592',borderStyle:'solid',}}/>

                    <List TITLE={TITLE} listdata={this.state.shop}/>

                </div>
            </div>
                :
                <div style={styles.container}><h1>loading.....</h1></div>
        );
    }
}

export default ShopManage