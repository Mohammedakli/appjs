const fs = require('fs')
//const _ = require("lodash")
module.exports =  (req, res) => {
  let data = fs.readFileSync('src/modules/products/service/Products.json');
  let Products = JSON.parse(data);
  let product = Products.find((_product)=>{
    return _product._id = req.params["id"]
  })
  console.log(product)
  console.log(Products.indexOf(product))
  console.log(Products[Products.indexOf(product)])
  Products[Products.indexOf(product)] = {...Products[Products.indexOf(product)], ...req.body}

  console.log(Products)
  fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(product, null, 2))
 return res.json(Products)

  }