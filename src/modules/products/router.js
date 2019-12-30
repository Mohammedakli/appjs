const { Router } = require('express')
const createOne = require('./middleware/createOne')
const list = require('./service/listProduit')
const productlist = require('./service/listProduit')
const router = new Router();

router.route('/create')
    .post(createOne); 

router.route('/list')
    .get(productlist)


module.exports = router;