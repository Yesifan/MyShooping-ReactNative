var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


    if(!req.session.user)
    {
        //打开登陆页面
        res.render('login');
    }

    res.redirect('/index')

    // res.set('Access-Control-Expose-Headers', 'access-token');

    // console.log('content-type',req.get('user-agent'));
    // console.log('get',req.sessionID);
    // console.log('get-req-session',req.session);
    // console.log('get-req-header',req.headers);
    // 输出res头
    // console.log('get-res-headers',res.connection._httpMessage._headers);
});



module.exports = router;
