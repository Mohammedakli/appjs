const model= require('../model')
const connect = require('../../../client/mongodb')
const collections = require('../../../enums/collections')

module.exports = (productToCreate) => {
    return model.validate(productToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(productToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
}
