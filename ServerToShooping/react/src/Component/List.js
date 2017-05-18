/**
 * Created by y5049 on 2017/5/18.
 */
import React, {Component} from 'react'

import Item from "./Item";
import PageButton from "./PageButton";


class List extends Component{

    constructor(props)
    {
        super(props);
        this.state={

            indexList:[],//当前渲染的页面数据
            current: 1, //当前页码
            pageSize:1, //每页显示的条数
            page:[],    //页码
        };
    }

    componentWillMount(){

        const {listdata} = this.props;

        //console.log((this.state.current-1)*this.state.pageSize,this.state.current*this.state.pageSize);

        //获得总页数
        let totalPage = Math.ceil( listdata.length/this.state.pageSize);

        //获得页码
        let page = [];

        for (let i = 1; i <= totalPage; i++) {
            page.push(i);
        }

        this.setState({page:page,indexList:listdata.slice((this.state.current-1)*this.state.pageSize,this.state.current*this.state.pageSize)})

    }



    handleItems(value)
    {
        return [value.name,value.type,'1533484 次/天']
    }

    handleButton(index)
    {
        console.log('点击了'+index)
    }

    render() {

        const styles = {

            table:{
                display:'flex',
                width:'90%',
                flex:1,
                flexDirection:'column',
            },

        };

        const {listdata} = this.props; //原始数据

        //let indexList = listdata.slice(0,5); //当前页面数据

        const {TITLE} = this.props;


        let renderItem = (listData) => listData.map((shop,index)=>
            <Item items={this.handleItems(shop)} icon={shop.icon} key={index} change={()=>this.handleButton(shop.name)}/>);

        return (

                <div style={styles.table}>
                    <div style={{flex:1}}>
                    <Item items={TITLE} isTitle = {true}/>

                    {/*渲染数据*/}
                    {renderItem(this.state.indexList)}
                    <h1>这是第{this.state.current}页</h1>
                    </div>


                    <PageButton index={this.state.page} page={this.state.current}
                                {/*click让子组件更新此组件的页数与当前数据*/}
                                click={(index)=>this.setState({current:index,indexList:this.props.listdata.slice((index-1)*this.state.pageSize,index*this.state.pageSize)})}/>

                </div>




        );
    }
}

export default List
