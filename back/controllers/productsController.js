exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'En esta ruta ud podrá ver todos los productos'
    })
}