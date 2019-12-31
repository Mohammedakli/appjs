var fs = require('fs'); 



// Service  API
module.exports =  (req, res) => {
    fs.readFile('src/modules/products/service/Products.json', (err, data) => {
        if (err) throw err;
        let product = JSON.parse(data);
        res.send({
            data : product
        })
        
   });
  
    }


// file = () => {fs.readFile('src/modules/products/service/Products.json', (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });

// console.log('This is after the read call');
// }

// const router = (app, fs) => {

//     // variables
//     const dataPath = 'src/modules/products/service/Products.json';

//     // READ
//     app.get('/list', (req, res) => {
//         fs.readFile(dataPath, 'utf8', (err, data) => {
//             if (err) {
//                 throw err;
//             }

//             res.send(JSON.parse(data));
//         });
//     });







