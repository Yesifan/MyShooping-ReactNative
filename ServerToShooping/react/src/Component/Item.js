/**
 * Created by y5049 on 2017/5/16.
 */
import React, {Component} from 'react'
import Button from "./Button";


class Item extends Component{





    render() {


        const styles = {
            item:{
                display:'flex',
                flex:1,
                height:30,
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',


            },

            titleItem:{
                display:'flex',
                flex:1,
                height:40,

                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',

                backgroundColor:'#e7f2fe',

                marginBottom:5,

                paddingLeft:40,

                paddingRight:124,

            },

            items:{
                flex:1,
                justifyContent:'space-between',
                flexDirection:'row',

                marginLeft:10,


            },

            titleItems:{
                flex:1,
                justifyContent:'space-between',
                flexDirection:'row',

                fontSize:20,
                marginLeft:10,

            },

            image:{
                width:30,
                height:30,
                marginLeft:10
            },

            buttonBox:{
                display:'flex',
                flexDirection:'row',

            },

        };


        let renderItems = (items)=> items.map(
            (item,index)=> <span  key={index} style={this.props.isTitle?styles.titleItems:styles.items}>{item}</span> );

        return (
            <span>
                <span style={this.props.isTitle?styles.titleItem:styles.item}>
                    {this.props.isTitle? null : <img style={styles.image} src={this.props.icon?require('../../public/images/' + this.props.icon + ".png"):require('../../public/images/icon_shop.png')} />}

                    {renderItems(this.props.items)}

                    {this.props.isTitle? null :
                        <span style={styles.buttonBox}>
                            <Button font="更改" color="#9932CC" click={this.props.change}/>
                            <Button font="删除" color="#FF4040" click={this.props.delete}/>
                        </span>}

                </span>

                {this.props.isTitle?null:<hr style={{width:'100%',borderBottomWidth:0,borderColor:'#F2F2F2',marginTop:0}}/>}

            </span>
        );
    }
}

export default Item
