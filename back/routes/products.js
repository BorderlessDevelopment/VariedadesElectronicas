const express = require('express')
const router=express.Router();

const {getProducts}=require('../controllers/productsController') //Traemos la respuesta jeison desde el controller

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts

module.exports = router;
