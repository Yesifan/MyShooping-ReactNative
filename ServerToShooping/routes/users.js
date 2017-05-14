var express = require('express');
var router = express.Router();


// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '123456'
// });
//
// connection.connect();
//
// connection.query("USE yesifan");
//
// connection.query('SELECT * from myuser', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].user);
// });
//
// connection.end();



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

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send('respond with a resource');

    console.log('get1:', req.originalUrl);

});

router.post('/login', function(req, res, next) {

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
