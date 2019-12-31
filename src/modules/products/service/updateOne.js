const fs = require('fs'); 
const data = require('./listProduit')

// module.exports =  (req, res) => {
//   let rawdata = fs.readFileSync('src/modules/products/service/Products.json');
//   const userId = req.params["id"];
//   userId = JSON.parse(rawdata);

//   fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(rawdata))
//   res.send({
//     status : 200,
//     message : 'success'
//   })
   

// }

module.exports =  (req, res) => {
    let rawdata = fs.readFileSync('src/modules/products/service/Products.json');
    let db = JSON.parse(rawdata);
    db.put(req.body)
    fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(db))
    res.send({
      status : 200,
      message : 'success'
    })
     
  
    }