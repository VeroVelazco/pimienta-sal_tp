const products = require ('../data/products');



module.exports = {
    index : (req, res) => {
        return res.render('index',{
            products : products 
        })
    },
    detail : (req, res) => {

        const {id} =  req.params;

        const product = products.find(product => product.id === +id);

        return res.render('detalleMenu', {
            product
        })
    },
}