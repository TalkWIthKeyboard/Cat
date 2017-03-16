/**
 * Created by CoderSong on 17/3/16.
 */

'use strict';

let router = require('express').Router(),
  manageRouter = require('./manageRoutes/manageRoute');

// 管理端的页面
router.get('/index', manageRouter.manageIndexPage);
router.get('/contact', manageRouter.manageContactPage);
router.get('/news', manageRouter.manageNewPage);
router.get('/example', manageRouter.manageExamplePage);
router.get('/configure', manageRouter.manageConfigurePage);
router.get('/certificate', manageRouter.manageCertificatePage);
router.get('/download', manageRouter.manageDownloadPage);
router.get('/product', manageRouter.manageProductPage);
router.get('/aboutme', manageRouter.manageAboutMePage);
router.get('/technology', manageRouter.manageTechnologyPage);


module.exports = router;