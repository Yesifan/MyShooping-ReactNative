/**
 * Created by y5049 on 2017/5/14.
 */
const express = require('express');
var session = require('express-session');
const router = express.Router();

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


//登陆验证
router.post('/login', function(req, res, next) {
    const _user = req.body.user;
    const name = _user.name;
    const password = _user.password;

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


module.exports = router;
