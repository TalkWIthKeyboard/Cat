/**
 * Created by CoderSong on 17/3/16.
 */

'use strict';

let router = require('express').Router(),
  manageRouter = require('./manageRoutes/manageRoute');

// 管理端的页面
router.get('/index', manageRouter.manageIndexPage);
router.get('/contact', manageRouter.manageContactPage);
router.get('/aboutme', manageRouter.manageAboutMePage);

router.get('/example/page/:page', manageRouter.manageExamplePage);
router.get('/configure/page/:page', manageRouter.manageConfigurePage);
router.get('/certificate/page/:page', manageRouter.manageCertificatePage);
router.get('/download/page/:page', manageRouter.manageDownloadPage);
router.get('/product/page/:page', manageRouter.manageProductPage);
router.get('/technology/page/:page', manageRouter.manageTechnologyPage);
router.get('/news/page/:page', manageRouter.manageNewsPage);
router.get('/dynamic/page/:page', manageRouter.manageDynamicPage);
router.get('/product/page/:page', manageRouter.manageProductPage);


module.exports = router;