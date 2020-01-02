const fs = require('fs')
//const _ = require("lodash")
module.exports = (req, res) => {
    let data = fs.readFileSync('src/modules/products/service/Products.json');
    let Products = JSON.parse(data);
    let indexOfProduct = Products.map((Element) => Element._id).indexOf(Number(req.params["id"]))
    
    
    Products[indexOfProduct] = {
        ...Products[indexOfProduct],
        ...req.body
    }
    
    fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(Products))
  return res.json(Products)

}