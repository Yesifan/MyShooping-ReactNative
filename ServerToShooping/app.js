var express = require('express');

var session = require('express-session');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var index = require('./routes/index');
var users = require('./routes/users');
var server = require('./routes/server');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'react/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(session({
    name: 'shooping',
    secret: 'Ye Si fan',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 30000 }
}));

//静态文件配置
app.use(express.static(path.join(__dirname, 'react/public')));


app.use('/', users);
app.use('/server', server);
app.use('/index', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
