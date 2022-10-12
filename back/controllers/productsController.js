
const producto= require('../models/productos')
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));


//Ver la lista de productos en la ruta /api/productos
exports.getProducts = async(req, res, next) => {
    const productos = await producto.find();    
    res.status(200).json({
        success: true,
        count: productos.length,
        productos
    })
}

//Ver un producto por id en la ruta /api/producto/:id
exports.getProductById = async(req, res, next) => {
    const product = await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        })
    }
    res.status(200).json({
        success: true,
        mensaje:'Aquí encuentras informacion del producto',
        product
    })
}

//Update un producto en la ruta /api/producto/:id
exports.updateProduct = async(req, res, next) => {
    let product = await producto.findById(req.params.id) //Let es una variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        })
    }
    product=await producto.findByIdAndUpdate(req.params.id, req.body,{//Si el objeto existe, entonces se ejecuta la actualizacion
        new: true, //Se valida solo los nuevos datos
        runValidators: true
    });
    res.status(200).json({//Respuesta de la actualizacion
        success: true,
        message: 'Producto actualizado exitosamente',
        product
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

//Eliminar un producto en la ruta /api/producto/:id
exports.deleteProduct = async(req, res, next) => {
    const product = await producto.findById(req.params.id) 
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si no existe el objeto, return finaliza el proceso
            success: false,
            message: 'Producto no encontrado'
        })
    }
    await product.remove();
    res.status(200).json({
        success: true, 
        message: 'Producto Eliminado'
    })
}


//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); //LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('63456a8d9163cb9dbbcaa235'); //Probamos el metodo con un id

