const { Router } = require('express')

const list = require('./service/listProduit')
const productlist = require('./service/listProduit')
const createOne = require('./service/createOne')
const router = new Router();

router.route('/create')
    .post(createOne); 

router.route('/list')
    .get(productlist)


module.exports = router;