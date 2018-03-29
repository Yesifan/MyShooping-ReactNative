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

});



module.exports = router;
