const fs = require('fs'); 


module.exports =  (req, res) => {
    console.log(req.params["id"])
  let rawdata = fs.readFileSync('src/modules/products/service/Products.json');
  const userId = req.params["id"] ;
    JSON.parse(req.body.rawdata)
  delete rawdata[userId];
  
  fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(rawdata, null, 2))
  res.send({
    status : 200,
    message : 'success',
    data : rawdata
  })
   

}