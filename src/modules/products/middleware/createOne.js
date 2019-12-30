const createOne = require('../service/createOne');

module.exports = (req,res) =>{
    console.log(req.body)
    const productToCreate = req.body;
    
    createOne(productToCreate)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            next(err)
        })
}