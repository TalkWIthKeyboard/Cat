'use strict';

const port = process.env.PORT || 3000,
  express = require('express'),
  path = require('path'),
  _ = require('underscore'),
  mongoose = require('mongoose'),
  partials = require('express-partials'),
  bodyParser = require('body-parser'),
  app = express();

mongoose.connect('mongodb://localhost:27017/Cat');

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

// 路由分流
const serverRouter = require('./routes/server-router'),
  clientRouter = require('./routes/client-router');
app.use('/server/', serverRouter);
app.use('/client/', clientRouter);

// 错误处理中间件
const errorMD = require('./services/middlewareServices/errorMDServices');
app.use(errorMD.databaseErrorMiddleWare());

module.exports = app;