/**
 * Created by y5049 on 2017/5/13.
 */
import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {render} from 'react-dom';
import Greeter from './Component/Greeter';
import Header from './Component/Header';
import Cell from './Component/Cell';

import ShopManage from './Page/ShopManage';


import styles from '../public/stylesheets/main.css';//使用require导入css文件

class Main extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            select: 0,
        };
    }


    render() {

        const style = {
            main: {
                display:'flex',
                flexDirection:'column',
                flex:1
            },
            content: {
                display:'flex',
                flexDirection:'row',
                flex:1
            },
        };

        return (
            <div style={style.main}>
                <Header/>
                <Router>
                    <div style={style.content} >
                        <div style={{flex:2,backgroundColor:'#fff',flexDirection:'column',}}>

                            <div className ={styles.liM}> <h1 className ={styles.linkM}>菜单列表</h1> </div>
                            <hr style={{width:'75%',borderWidth:1.2,borderColor:'#225592',borderStyle:'solid',margin:0}}/>

                            {/*菜单列表*/}
                            <Cell url="/index"       title="商家列表" index={0} onPress={()=>this.setState({select:0})} select = {this.state.select}/>

                            <Cell url="/index/order" title="订单列表" index={1} onPress={()=>this.setState({select:1})} select = {this.state.select}/>

                            <Cell url="/index/ad" title="广告列表" index={2} onPress={()=>this.setState({select:2})} select = {this.state.select}/>



                        </div>

                        <div style={{flex:8,backgroundColor:'blue'}}>

                            <Route exact path="/index" component={ShopManage} />
                            <Route path="/index/order" component={Greeter} />
                            <Route path="/index/ad" component={About} />

                        </div>

                    </div>
                </Router>
            </div>
        );
    }
}

const About = () => (
    <div>
        <h2 style={{margin:0}}>About</h2>
    </div>
);

render(<Main />, document.getElementById('root'));
