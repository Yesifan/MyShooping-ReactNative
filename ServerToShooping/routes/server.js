/**
 * Created by y5049 on 2017/5/14.
 */
const express = require('express');
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

        connection.query("USE yesifan");

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
router.post('/signup', function(req, res, next) {

    const _user = req.body.user;

    const name = _user.name;
    const password = _user.password;

    select('SELECT id FROM myuser WHERE user="'+name+'" and password="'+password+'";')
        .then(function (data) {

            console.log(data.rows[0]);

            res.json({
                id:data.rows[0].id,
                state:true
            })
        })
        .catch(function(err){
            res.json({state:false});
            console.log('err',err)
        })

});

module.exports = router;
