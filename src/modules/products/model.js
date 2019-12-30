const joi = require('@hapi/joi')

const createModel = joi.object().keys({
    name: joi.string().required(),
    type : joi.string().required(),
    price : joi.number().required(),
    rating : joi.number().required(),
    warranty_years: joi.number().required(),
    available: joi.boolean().required(),
})

module.exports = {
    createModel
}