/**
 * Created by y5049 on 2017/5/13.
 */
import React, {Component} from 'react'

import config from '../public/Json/config.json';



class Greeter extends Component{
    render() {
        const styles = {
            padding:10,
            backgroundColor:'#BEBEBE',
            margin:0
        };
        return (
            <div style={{backgroundColor:'#7B7B7B'}}>
                <h1 style={styles}>
                {config.greetText}!!!
                </h1>
            </div>
    );
    }
}

export default Greeter
