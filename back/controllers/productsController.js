
const producto= require('../models/productos')

//Ver la lista de productos en la ruta /api/productos
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'En esta ruta ud podrá ver todos los productos'
    })
}

//Crear nuevo producto en la ruta /api/producto/nuevo
exports.newProduct =async(req, res, next) => {
    const product = await producto.create(req.body);
    
    res.status(201).json({
        success: true,
        product
    })
}