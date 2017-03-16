/**
 * Created by CoderSong on 17/2/28.
 */

'use strict';

let router = require('express').Router(),
  contactInformation = require('./serverRoutes/contactInformationRoute'),
  newRouter = require('./serverRoutes/newRoute'),
  productRouter = require('./serverRoutes/productRoute'),
  successExampleRouter = require('./serverRoutes/successExampleRoute'),
  certificateRouter = require('./serverRoutes/certificateRoute'),
  configureRouter = require('./serverRoutes/configureRoute'),
  downloadRouter = require('./serverRoutes/downloadRoute');

// 联系方式相关路由
router.post('/contact', contactInformation.createContact);
router.put('/contact', contactInformation.updateContact);

// 新闻相关与技术支持路由
router.post('/new', newRouter.createNew);
router.put('/new/:id', newRouter.updateNew);
router.delete('/new/:id', newRouter.deleteNew);
router.get('/new/:id', newRouter.getNew);
router.get('/new/lookHistory/:id', newRouter.addLookNum);

// 产品相关路由
router.post('/product', productRouter.createProduct);
router.put('/product/:id', productRouter.updateProduct);
router.delete('/product/:id', productRouter.deleteProduct);
router.get('/product/:id', productRouter.getProduct);
router.get('/product/series/:series/page/:page', productRouter.getProductBySeriesAndPage);

// 成功案例相关路由
router.post('/example', successExampleRouter.createSuccessExample);
router.put('/example/:id', successExampleRouter.updateSuccessExample);
router.delete('/example/:id', successExampleRouter.deleteSuccessExample);
router.get('/example/:id', successExampleRouter.getSuccessExample);

// 资质证书相关路由
router.post('/certificate', certificateRouter.createCertificate);
router.put('/certificate/:id', certificateRouter.updateCertificate);
router.delete('/certificate/:id', certificateRouter.deleteCertificate);
router.get('/certificate/:id', certificateRouter.getCertificate);

// 系统配置相关路由
router.post('/configure', configureRouter.createConfigure);
router.put('/configure/:id', configureRouter.updateConfigure);
router.delete('/configure/:id', configureRouter.deleteConfigure);
router.get('/configure/:id', configureRouter.getConfigure);
router.get('/configure/key/:key', configureRouter.getConfigureByKey);

// 下载文件相关路由
router.post('/download', downloadRouter.createDownload);
router.put('/download/:id', downloadRouter.updateDownload);
router.delete('/download/:id', downloadRouter.deleteDownload);
router.get('/download/:id', downloadRouter.getDownload);

module.exports = router;