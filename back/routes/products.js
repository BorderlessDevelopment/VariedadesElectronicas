const express = require('express')
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct}=require('../controllers/productsController') //Traemos la respuesta jeison desde el controller


router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct) //Establecemos la ruta 
router.route('/producto/:id').get(getProductById) //Ruta para consultar por id del producto
router.route('/producto/:id').put(updateProduct) //Ruta para actualizar producto
router.route('/producto/:id').delete(deleteProduct) //Ruta para actualizar producto



module.exports = router;
