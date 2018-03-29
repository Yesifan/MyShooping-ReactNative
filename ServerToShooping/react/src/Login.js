/**
 * Created by y5049 on 2017/5/13.
 */
import React, {Component} from 'react'

import {render} from 'react-dom';

import styles from '../public/stylesheets/login.css';//导入

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100) // fake async
    },

    fetchLogin(user,password,go,warning) {
        fetch('/server/login',
            {
                //允许接收cookie
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        name: user,
                        password: password,
                    }
                })})
            .then((response) => response.json())
            .then((resJson) => {
                console.log(resJson);
                this.isAuthenticated = true;

                //如果返回true则跳转
                resJson.state? setTimeout(go, 100) : setTimeout(warning, 100);
                 })
            .catch((error) => {console.error(error);});
    }

};


class LoginBox extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            redirectToReferrer: false,
            opacity:0,
            user: undefined,
            password: undefined,
        };
    }

    render() {
        //const { from } = this.props.location.state || { from: { pathname: 'main' } };
        const { user,password } = this.state;

        return (
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',flex:1}}>

                <h1>登 陆</h1>

                <div className={styles.login}>

                    <div className={styles.input} style={{marginTop:50}}>
                        <span className={styles.inputItem}>用户名</span>

                        <input type="text" className={styles.inputField} value={user} placeholder="这里输入用户名"
                               onChange={ (event) => this.setState({user: event.target.value}) }/>

                    </div>
                    <div className={styles.input} style={{marginTop:30}}>
                        <span className={styles.inputItem}>密码</span>

                        <input type='password' className={styles.inputField} value={password} placeholder="这里输入密码"
                               onChange={ (event) => this.setState({password: event.target.value}) }/>

                    </div>

                    <span className={styles.warning} style={{opacity:this.state.opacity}}>! 密码或用户名错误</span>

                    <button className={styles.inputButton}
                            onClick={
                                () => {
                                fakeAuth.fetchLogin(user,password,
                                    () => window.location.href='/index',()=>this.setState({opacity:1}))}
                            }>登 陆</button>

                    <div className={styles.bottomBox}>
                        <a className={styles.link} href="/index">忘记密码</a>
                        <span className={styles.dotted}>|</span>
                        <a className={styles.link} href="/index">注册</a>
                    </div>

                </div>

            </div>
        );
    }
}


render(<LoginBox />, document.getElementById('login'));