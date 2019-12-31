const { Router } = require('express')

const list = require('./service/listProduit')
const productlist = require('./service/listProduit')
const createOne = require('./service/createOne')
const updateOne = require('./service/updateOne')
const deleteOne = require('./service/deleteOne')
const router = new Router();

router.route('/create')
    .post(createOne); 

router.route('/list')
    .get(productlist)

router.route('/users/:id')
    .put(updateOne)

router.route('/users/:id')
    .delete(deleteOne)    


module.exports = router;