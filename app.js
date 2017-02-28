'use strict';

let port = process.env.PORT || 3000,
  express = require('express'),
  path = require('path'),
  _ = require('underscore'),
  mongoose = require('mongoose'),
  partials = require('express-partials'),
  bodyParser = require('body-parser'),
  app = express();


// 设置view的路径
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(partials());

// bodyParser 解析req.body的内容
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 静态文件的路径
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

// 监听端口
app.listen(port);

let modules = require('./routes/module-router');
app.use('/', modules);


module.exports = app;