var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {


    // if(!req.session.user)
    // {
    //     //打开登陆页面
    //     res.redirect('/')
    // }

    // console.log(req.session);
    // console.log(req.cookies);

    //console.log(req.session);

    //打开主页面index
    res.render('index');

    //res.render('index', { title: 'Express' });

});



// router.get('/:every', function(req, res, next) {
//     res.redirect('/index')
// });

module.exports = router;
