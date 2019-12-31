const { Router } = require('express');
const basicsRouter = require('../modules/basics/router');
const list = require('../modules/products/router'); 

const router = new Router();

// Service  API
router.use('/api', basicsRouter);
router.use('/api', list)

module.exports = router;