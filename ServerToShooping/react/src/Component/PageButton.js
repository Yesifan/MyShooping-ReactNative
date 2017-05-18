/**
 * Created by y5049 on 2017/5/18.
 */
import React, {Component} from 'react'
//导入

class PageButton extends Component{

    render() {
        const styles={
            span:{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                marginBottom:10,
            },
        };

        let renderButton = (list) => list.map((index)=>
            this.props.page===index?
            <Button font={index} key={index} color="#225592" select={true}/>:
                <Button font={index} key={index} color="#225592" click={()=>this.props.click(index)}/>);

        return (
            <span style={styles.span}>
                {renderButton(this.props.index)}
            </span>
        );
    }
}

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
                listStyle: 'none',
                /* padding: 10px; */
                border:`1px solid ${this.props.color}`,
                padding:'1px 2px',

                color:this.props.color,

                fontSize:15,

                cursor:'pointer',

                marginRight:10

                //padding: 4 14,
            },
            select:{
                listStyle: 'none',
                /* padding: 10px; */
                border:`1px solid ${this.props.color}`,
                padding:'1px 2px',

                color:'#fff',
                backgroundColor:this.props.color,

                fontSize:15,

                marginRight:10,

            }
        };

        return (
            this.props.select?
                <li style={styles.select} ref='mybutton'
                    onMouseOut  = {()=>this.handleOver( this.refs.mybutton ,this.props.color )}
                    onMouseOver =  {()=>this.handleOut ( this.refs.mybutton ,this.props.color )}
                    > {this.props.font} </li>
                :
                <li style={styles.border} ref='mybutton'
                    onMouseOver = {()=>this.handleOver( this.refs.mybutton ,this.props.color )}
                    onMouseOut  =  {()=>this.handleOut ( this.refs.mybutton ,this.props.color )}
                    onClick={this.props.click}> {this.props.font} </li>
        );
    }
}


export default PageButton