const model= require('../model')
const fs = require('fs'); 


module.exports =  (req, res) => {
  let rawdata = fs.readFileSync('src/modules/products/service/Products.json');
  let db = JSON.parse(rawdata);
  db.push(req.body)
  fs.writeFileSync('src/modules/products/service/Products.json', JSON.stringify(db))
  res.send({
    status : 200,
    message : 'success'
  })
   

}

// readFile(data => {
//   const newUserId = Object.keys(data).length + 1;

//   // add the new user
//   data[newUserId] = JSON.parse(req.body.data);

//   writeFile(JSON.stringify(data, null, 2), () => {
//       res.status(200).send('new user added');
//   });
// },
//   true);
// });