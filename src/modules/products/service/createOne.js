const model= require('../model')
const fs = require('fs'); 



module.exports =  (req, res) => {
  let rawdata = fs.readFileSync('src/modules/products/service/Products.json');
 
  let db = JSON.parse(rawdata);
  
  req.body.user._id = db.length + 1;
  
  db.push(req.body.user)

  fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(db, null, 2))
  res.send({
    status : 200,
    message : 'success'
  })
   

}
