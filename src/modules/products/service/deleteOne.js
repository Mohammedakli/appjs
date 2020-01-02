const fs = require('fs'); 


module.exports =  (req, res) => {
  let data = fs.readFileSync('src/modules/products/service/Products.json');
  let Products = JSON.parse(data);
  Products = Products.filter((Element) => Element._id!==Number(req.params["id"]))
  console.log(Products)
  fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(Products))
  res.send({
    status : 200,
    message : 'success',
    data : Products
  })
   

}