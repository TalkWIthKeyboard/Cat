/**
 * Created by CoderSong on 17/2/28.
 */

'use strict';

let router = require('express').Router(),
  contactInformation = require('./serverRoutes/contactInformationRoute'),
  newRouter = require('./serverRoutes/newRoute'),
  productRouter = require('./serverRoutes/productRoute');

// 联系方式相关路由
router.post('/contact', contactInformation.createContact);
router.put('/contact', contactInformation.updateContact);

// 新闻相关路由
router.post('/new', newRouter.createNew);
router.put('/new/:id', newRouter.updateNew);
router.delete('/new/:id', newRouter.deleteNew);
router.get('/new/:id', newRouter.getNew);
router.get('/news/:page', newRouter.getNewByPage);
router.get('/new/lookHistory/:id', newRouter.addLookNum);

// 产品相关路由
router.post('/product', productRouter.createProduct);
router.put('/product/:id', productRouter.updateProduct);
router.delete('/product/:id', productRouter.deleteProduct);
router.get('/product/:id', productRouter.getProduct);


module.exports = router;