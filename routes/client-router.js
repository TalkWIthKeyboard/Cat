/**
 * Created by CoderSong on 17/2/28.
 */

'use strict';

let router = require('express').Router(),
  pageRouter = require('./clientRoutes/pageRoute'),
  newRouter = require('./serverRoutes/newRoute');

// 联系方式相关路由

// 新闻相关路由
router.get('/new/lookHistory/:id', newRouter.addLookNum);

// 页面路由
router.get('/index', pageRouter.mainPage);
router.get('/aboutMe', pageRouter.aboutMePage);
router.get('/aboutMe/businessCulture', pageRouter.businessCulturePage);
router.get('/aboutMe/businessJoin', pageRouter.businessJoin);
router.get('/productShow', pageRouter.productShow);

module.exports = router;