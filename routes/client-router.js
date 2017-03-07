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
router.get('/aboutMe/businessJoin', pageRouter.businessJoinPage);

router.get('/productShow/page/:page', pageRouter.productShowPage);

router.get('/news/companyNew/page/:page', pageRouter.companyNewPage);
router.get('/news/dynamic/page/:page', pageRouter.dynamicPage);
router.get('/news/productNew/page/:page', pageRouter.productNewsPage);

router.get('/technology/page/:page', pageRouter.technologyPage);
router.get('/download/page/:page', pageRouter.downloadPage);

router.get('/success/page/:page', pageRouter.successExamplePage);
router.get('/certificate/page/:page', pageRouter.certificatePage);

router.get('/contact', pageRouter.contactPage);




module.exports = router;