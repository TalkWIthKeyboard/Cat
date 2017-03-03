/**
 * Created by CoderSong on 17/2/28.
 */

'use strict';

let router = require('express').Router(),
  contactInformation = require('./serverRoutes/contactInformationRoute'),
  newRouter = require('./serverRoutes/newRoute');

// 联系方式相关路由

// 新闻相关路由
router.get('/new/lookHistory/:id', newRouter.addLookNum);


module.exports = router;