/**
 * Created by y5049 on 2017/5/16.
 */
import React, {Component} from 'react'


import Button from '../Component/Button'
import List from "../Component/List";

class ShopManage extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            shop:undefined,
            visible: false,
            files:undefined,
            shopName:undefined,
            shopType:undefined,
            opacity:0,
        };
    }

    componentWillMount()
    {

        this.handleGetShop();

    }

    //通过fetch获得商家列表
    handleGetShop()
    {

        fetch('/server/readshop',{

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((resJson)=>
            {
                this.setState({shop:resJson});
                resJson.map((value)=>console.log(value));
            })
            .catch((error) => {console.error(error);});
    }



    //读取input中图片实例的钩子
    handleChange(e)
    {

        e.preventDefault();

        let target = e.target;
        let files = target.files;

        files[0].thumb = URL.createObjectURL(files[0]);

        //let file = Array.prototype.slice.call(files, 0);

        console.log('files',files);
        console.log('file',files[0]);

        this.setState({files: files[0]});
    }

    //上传商家信息的函数
    handleUpload()
    {
        let form = new FormData();

        //console.log('this.state.files',this.state.files);

        form.append("icon", this.state.files);

        form.append("shopName",this.state.shopName);

        form.append("shopType",this.state.shopType);

        fetch('/server/upload',
            {
                method: "POST",
                body: form})
            .then((res)=>{
                console.log(res);

                this.setState({visible:false});
                location.reload(true);

            });

    }

    // _upload(file) {
    //     return new Promise((resolve, reject) => {
    //         let xhr = new XMLHttpRequest()
    //         if (xhr.upload) {
    //             // 上传中
    //
    //             // 上传成功或者失败
    //             xhr.onreadystatechange = (e) => {
    //                 if (xhr.readyState === 4) {
    //                     if (xhr.status === 200) {
    //                         resolve(xhr.responseText)
    //                     }
    //                 } else {
    //                     // 上传出错处理
    //                     reject(xhr.responseText)
    //                 }
    //             }
    //         }
    //         // 开始上传
    //         xhr.open("POST", '/server/upload', true)
    //         let form = new FormData()
    //         form.append("filedata", file)
    //         xhr.send(form)
    //     })
    // }

    render() {

        const styles = {
            container: {
                display:'flex',
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#e9ecf3',

            },

            content: {
                display:'flex',
                alignItems:'center',
                height:'90%',
                width:'90%',
                borderRadius:10,
                flexDirection:'column',
            },

            header:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'flex-end',
                width:'90%',
                height:60,

            },

            table:{
                width:'90%',
                flex:1,
            },

            title:{
                fontSize:25,
                color:'#225592'
            },

            dialog:{
                display:'flex',
                flexDirection:'column',

                position:'absolute',
                width:400,
                height:280,
                margin:'auto',
                top:0,
                bottom:0,
                boxShadow:'0 0 100px #888888',
                borderRadius:30,


            },

            dialogHeader:{
                width: 'auto',
                height: 'auto',
                textAlign:'center',
                fontWeight:'bold',
                fontSize:24,
                marginTop:10,

            },

            dialogContent:{
                flex:1,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-around',
            },

            dialogBottom:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center',
                width: 'auto',
                height: 'auto',
                margin: 10,
            },

            input:{
                display:'flex',
                width:238,
                height:26
            },

            inputSpan:{
                width: 60,
                textAlign:'center',
                backgroundColor: '#00B7FF',
                border:'1px solid #00B7FF',

                color: '#fff',
                lineHeight:'24px',

                fontSize: 13,
                height: 24,
            },

            inputField:{
                flex: 1,
                border:'1px solid #00B7FF',
                fontSize: 13,
                paddingLeft: 10,
            },

            border:{
                /* border-width: 1px; */
                borderRadius:60,
                listStyle: 'none',
                /* padding: 10px; */
                border:`1px solid #00B7FF`,
                padding:'3px 10px',

                color:'#00B7FF',

                fontSize:13,

                cursor:'pointer',

                marginRight:10

                //padding: 4 14,
            },

            selectImage:{
                display:'flex',
                width:238,
                height:50,
                alignItems:'center',
                justifyContent:'center',
            }

        };

        const {shop} = this.state;

        let TITLE = ['名称','类别','客流量'];


        return (
            shop?
            <div style={styles.container}>
                <div style={styles.content}>

                    <div style={styles.header}>

                        <span style={styles.title}>商家资料</span>

                        <Button font="增加" color="#225592" click={()=>this.setState({visible:true})}/>

                    </div>

                    <hr style={{width:'92%',borderWidth:1.2,borderColor:'#225592',borderStyle:'solid',}}/>

                    <List TITLE={TITLE} listdata={this.state.shop} handleItems={(value)=>[value.name,value.type,'100000 次/天']} isImage={true} isButton={true}/>


                    {
                        //新商家入驻弹出框
                        this.state.visible?
                        <div style={styles.dialog} >
                            <span style={styles.dialogHeader}>
                                新商家入驻
                            </span>

                            <hr style={{width:'90%'}}/>

                            <div style={styles.dialogContent}>

                                <div  style={styles.input}>
                                    <span style={styles.inputSpan}>店铺名</span>
                                    <input type="text" style={styles.inputField} value={this.state.shopName} placeholder="请输入店铺名称"
                                           onChange={ (event) => this.setState({shopName: event.target.value}) }/>
                                </div>

                                <div  style={styles.input}>
                                    <span style={styles.inputSpan}>类型</span>
                                    <input type="text" style={styles.inputField} value={this.state.shopType} placeholder="请输入店铺类型"
                                           onChange={ (event) => this.setState({shopType: event.target.value}) }/>
                                </div>

                                <div style={styles.selectImage}>
                                    <span style={styles.inputSpan}>选择图标</span>
                                    <img src={this.state.files?this.state.files.thumb:null} style={{width:50,height:50,marginLeft:20}} />
                                <input
                                    style={{position:'absolute',opacity:0,width:152}}
                                    onChange={(e)=>this.handleChange(e)}
                                    type="file"
                                    name="fileSelect"
                                    accept="image/png"/>
                                </div>

                            </div>

                            <div style={styles.dialogBottom}>
                                <span style={{opacity:this.state.opacity,color:'red',padding:5,marginRight:10}}>! 信息未填完整</span>
                                <Button font="ok" color="#00B7FF" click={()=> this.state.shopType||this.state.shopName?this.handleUpload():this.setState({opacity:1})}/>
                                <Button font="close" color="#00B7FF" click={()=>this.setState({visible:false})}/>
                            </div>
                        </div>:null}



                </div>
            </div>
                :
                <div style={styles.container}><h1>loading.....</h1></div>
        );
    }
}

export default ShopManage