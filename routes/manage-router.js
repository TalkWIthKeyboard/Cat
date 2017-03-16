/**
 * Created by CoderSong on 17/3/16.
 */

'use strict';

let router = require('express').Router(),
  manageRouter = require('./manageRoutes/manageRoute');

router.get('/test', manageRouter.managerIndexPage);


module.exports = router;