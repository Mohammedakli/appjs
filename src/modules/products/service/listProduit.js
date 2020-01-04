var fs = require('fs'); 




module.exports =  (req, res) => {
    fs.readFile('src/modules/products/service/Products.json', (err, data) => {
        if (err) throw err;
        let product = JSON.parse(data);
        res.send({
            data : product
        })
        
   });
  
    }










