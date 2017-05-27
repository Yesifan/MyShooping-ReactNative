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
            pageSize:10, //每页显示的条数
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

        //this.props.handleItems 数据提取函数


        const styles = {

            table:{
                display:'flex',
                width:'90%',
                flex:1,
                flexDirection:'column',
            },

        };

        const {TITLE} = this.props;

        //items：读取一个数组
        let renderItem = (listData) => listData.map((shop,index)=>
            <Item items={this.props.handleItems(shop)} icon={shop.icon} key={index} change={()=>this.handleButton(shop.name)}
                  isTitle={this.props.isTitle} isImage={this.props.isImage} isButton={this.props.isButton}/>);

        return (
                <div style={styles.table}>
                    <div style={{flex:1}}>
                    <Item items={TITLE} isTitle = {true}/>

                    {/*渲染数据*/}
                    {renderItem(this.state.indexList)}
                    </div>

                    <PageButton index={this.state.page} page={this.state.current}
                                click={(index)=>this.setState({current:index,indexList:this.props.listdata.slice((index-1)*this.state.pageSize,index*this.state.pageSize)})}/>

                </div>
        );
    }
}

export default List
