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
import Greeter from './Greeter';
import LoginBox from './LoginBox';

import '../public/stylesheets/main.css';//使用require导入css文件

class Main extends Component{
    render() {

        const styles = {
            content: {
                display:'flex',
                flexDirection:'row',
                flex:1
            },
            li:{
                margin:5
            }
        };

        return (
            <Router>
                <div style={styles.content} >
                    <div style={{flex:2,backgroundColor:'#f0f0f0',}}>
                        <ul>
                            <li style={styles.li}><Link to="/">login</Link></li>
                            <li style={styles.li}><Link to="/main">Home</Link></li>
                            <li style={styles.li}><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <div style={{flex:8,backgroundColor:'blue'}}>
                        <Route exact path="/" component={LoginBox}/>
                        <Route path="/main" component={Greeter}/>
                        <Route path="/about" component={About}/>
                    </div>

                </div>
            </Router>
        );
    }
}

const About = ({match }) => (
    <div>
        <h2>{match.url}</h2>
    </div>
);

render(<Main />, document.getElementById('root'));
