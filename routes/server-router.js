/**
 * Created by CoderSong on 17/2/28.
 */

'use strict';

let router = require('express').Router(),
  contactInformation = require('./serverRoutes/contactInformationRoute'),
  newRouter = require('./serverRoutes/newRoute');

// 联系方式相关路由
router.post('/contact',contactInformation.createContact);
router.put('/contact',contactInformation.updateContact);
// 新闻相关路由
router.post('/new', newRouter.createNew);
router.put('/new', newRouter.updateNew);
router.delete('/new', newRouter.deleteNew);


module.exports = router;