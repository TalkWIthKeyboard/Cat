'use strict';

const port = process.env.PORT || 3000,
  express = require('express'),
  path = require('path'),
  _ = require('underscore'),
  mongoose = require('mongoose'),
  ueditor = require('ueditor'),
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
  clientRouter = require('./routes/client-router'),
  manageRouter = require('./routes/manage-router');
app.use('/manage/', manageRouter);
app.use('/server/', serverRouter);
app.use('/client/', clientRouter);

// 错误处理中间件
// const errorMD = require('./services/middlewareServices/errorMDServices');
// app.use(errorMD.databaseErrorMiddleWare());


app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public')), function (req, res, next) {
  // ueditor 客户端发起上传图片请求
  if (req.query.action === 'uploadimage') {
    let foo = req.ueditor,
      imgname = req.ueditor.filename,
      img_url = '/images/ueditor/';

    // 输入要保存的地址
    res.ue_up(img_url);
    // IE8下载需要设置返回头尾text/html 不然json返回文件会被直接下载打开
    res.setHeader('Content-Type', 'text/html');
  }
  // 客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images/ueditor/';
    res.ue_list(dir_url);
  }
  // 客户端发起其他请求
  else {
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/php/config.json');
  }
});

module.exports = app;