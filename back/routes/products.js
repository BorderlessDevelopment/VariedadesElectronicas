const express = require('express')
const router=express.Router();

const {getProducts, newProduct}=require('../controllers/productsController') //Traemos la respuesta jeison desde el controller


router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta

module.exports = router;
