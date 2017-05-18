/**
 * Created by y5049 on 2017/5/16.
 */
import React, {Component} from 'react'

import {
    Link
} from 'react-router-dom'

import styles from '../../public/stylesheets/cell.css';//导入

class Cell extends Component{

    render() {

        return (
            <div className ={ this.props.select===this.props.index ? styles.lis : styles.li }>
                <Link onClick={this.props.onPress} className ={styles.link} to={this.props.url}>{this.props.title}</Link>
            </div>
        );
    }
}

export default Cell