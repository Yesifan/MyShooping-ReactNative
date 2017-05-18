/**
 * Created by y5049 on 2017/5/15.
 */
import React, {Component} from 'react'
import styles from '../../public/stylesheets/header.css';//导入

class Header extends Component{
    render() {

        return (
            <div className={styles.header}>

                    <span className={styles.title}>后台管理系统</span>
                    <span className={styles.welcome}>欢迎你</span>


                    <a className={styles.a}>安全退出</a>

            </div>
        );
    }
}

export default Header