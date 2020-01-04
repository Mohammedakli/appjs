const fs = require('fs')

module.exports = (req, res) => {
  console.log(req.body); 
    let data = fs.readFileSync('src/modules/products/service/Products.json');
    let Products = JSON.parse(data);
    let indexOfProduct = Products.map((Element) => Element._id).indexOf(Number(req.params["id"]))
    
    
    Products[indexOfProduct] = {
        ...Products[indexOfProduct],
        ...req.body.user
    }
    
    fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(Products,null,2))
  return res.json(Products)

}