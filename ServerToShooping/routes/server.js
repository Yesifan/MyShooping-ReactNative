/**
 * Created by y5049 on 2017/5/14.
 */
const express = require('express');
const session = require('express-session');
const router = express.Router();
const multiparty = require('multiparty');
const fs = require("fs");

function select(sql) {
    var promise = new Promise(function(resolve,reject) {

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456'
        });

        connection.connect();
        connection.query("USE shooping");

        connection.query(sql, function(err, rows, fields) {
            if (err||rows.length === 0) {
                console.log('err',err);

                reject({status: 0});
            }else {
                resolve({
                    status: 1,
                    rows:rows
                })
            }
        });
        connection.end();
    });

    return promise;
}


//admin登陆验证
router.post('/login', function(req, res, next) {
    let _user = req.body.user;
    let name = _user.name;
    let password = _user.password;

    select('SELECT id FROM admin WHERE username="'+name+'" and password="'+password+'";')
        .then(function (data) {
            //验证成功
            req.session.user = {user:{name:name,id:data.rows[0].id}};

            console.log(req.session.user);
            console.log(req.sessionID);
            console.log(req.cookies);

            res.json({
                id:data.rows[0].id,
                state:true,
                token:Date.now()
            })
        })
        .catch(function(err){
            res.json({state:false});
            console.log('err',err)
        })

});

//user登陆验证
router.post('/userlogin', function(req, res, next) {
    let _user = req.body.user;
    let name = _user.name;
    let password = _user.password;

    select('SELECT id,nickname FROM user WHERE username="'+name+'" and password="'+password+'";')
        .then(function (data) {
            //验证成功

            console.log(data.rows[0]);
            res.json({
                id:data.rows[0].id,
                nickname:data.rows[0].nickname,
                state:true,
                token:Date.now()
            })
        })
        .catch(function(err){
            res.json({state:false});
            console.log('err',err)
        })

});

//商店列表读取
router.get('/readshop', function(req, res, next) {

    select('SELECT * FROM shop;')
        .then(function (data) {
            //验证成功
            res.send(data.rows);
            // res.json({
            //     shop:data.rows,
            //     state:true,
            // })
        })
        .catch(function(err){
            res.json({state:false});
            console.log('err',err)
        })

});

//订单读取应该加权限验证
router.post('/readorder', function(req, res, next) {

    let user_ID = req.body.user_ID;

    console.log(req.body);

    let sql = user_ID? `select myorder.shopname,myorder.time 
            from myorder join user 
            on myorder.customer=user.nickname
            where user.id = ${user_ID};` :
        `select myorder.shopname,myorder.time,myorder.customer 
            from myorder join user 
            on myorder.customer=user.nickname;`;

    select(sql)
        .then(function (data) {
            //验证成功
            //console.log(new Date(data.rows[0].time));

            res.send(data.rows);
        })
        .catch(function(err){
            res.json({state:false});
            console.log('err',err)
        })

});

//注册新商家信息录入数据库
router.post('/upload', function(req, res, next) {
    // 生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form();

    //设置文件存储路径
    form.uploadDir = './react/public/images';

    // 上传完成后处理
    form.parse(req, function(err, fields, files) {

        var shopName = fields.shopName;
        var shopType = fields.shopType;
        var iconname;

        try {
            let img = files.icon[0];

            // console.log('fields',fields.name);
            //
            // console.log('files',files);
            //
            // console.log('files',files.filedata[0].path);

            //重命名图片
            var _dateSymbol = new Date().toLocaleDateString().split('-').join('');
            var _timeSymbol = new Date().getTime().toString();

            iconname = "shopIcon" + _dateSymbol + _timeSymbol;

            let dstPath = './react/public/images/' + iconname + '.'
                + img.originalFilename.split('.')[1];

            fs.rename(img.path, dstPath, function (err) {
                if (err) {

                    reject(err)
                } else {
                    select('INSERT INTO shop (name,type,icon) values ("'+shopName+'","'+shopType+'","'+iconname+'");')
                        .then(function () {
                            //验证成功
                            //res.send(data.rows);
                            res.json({
                                state:true,
                            })
                        })
                        .catch(function(err){
                            res.json({state:false});
                            console.log('err',err)
                        });
                    console.log('rename ok!');
                }
            });
        }
        catch (e) {
            select('INSERT INTO shop (name,type) values ("'+shopName+'","'+shopType+'");')
                .then(function () {
                    //验证成功
                    // res.send(data.rows);
                    res.json({
                        state:true,
                    })
                })
                .catch(function(err){
                    res.json({state:false});
                    console.log('err',err)
                });
        }




    });


});

//订单信息
router.post('/buy', function(req, res, next) {


    var shopName = req.body.shopname;
    var customer = req.body.customer;
    var time = new Date().toLocaleString();

    select('INSERT INTO myorder (shopname,customer,time) values ("'+shopName+'","'+customer+'","'+time+'");')
        .then(function () {

            res.json({
                state:true,
            })
        })
        .catch(function(err){
            res.json({state:false});
            console.log('err',err)
        });

});

module.exports = router;
