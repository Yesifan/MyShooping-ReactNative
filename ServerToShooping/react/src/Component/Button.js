/**
 * Created by y5049 on 2017/5/17.
 */
import React, {Component} from 'react'

import config from '../../public/Json/config.json';



class Button extends Component{


    // static defaultProps = {
    //     isRadius: true,
    // };

    handleOver(ref,bg){ref.style.color='#fff'; ref.style.backgroundColor=bg};

    handleOut(ref,bg){ref.style.color=bg; ref.style.backgroundColor='#fff'}


    render() {
        const styles = {
            border:{
                /* border-width: 1px; */
                borderRadius: this.props.noRadius?0:60,
                listStyle: 'none',
                 /* padding: 10px; */
                border:`1px solid ${this.props.color}`,
                padding:'3px 10px',

                color:this.props.color,

                fontSize:15,

                cursor:'pointer',

                marginRight:10

                //padding: 4 14,
            },
        };

        return (
                <li style={styles.border} ref='mybutton'
                    onMouseOver = {()=>this.handleOver( this.refs.mybutton ,this.props.color )}
                    onMouseOut =  {()=>this.handleOut ( this.refs.mybutton ,this.props.color )}
                    onClick={this.props.click}> {this.props.font} </li>
        );
    }
}

export default Button
