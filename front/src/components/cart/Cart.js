import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'


const Cart = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        const contador = document.querySelector('.count')
        const qty = contador.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const contador = document.querySelector('.count')

        const qty = contador.valueAsNumber - 1;
        setQuantity(qty)
    }

    //Json de ejemplo
    let cartItems = [
        {
            "_id": "63513206109735e58d94addd",
            "nombre": "Nutra Nuggets Rojo",
            "precio": 76000,
            "imagen": "./images/productos/perrorojo.png",
            "inventario": 40,
        },
        {
            "_id": "63513298109735e58d94ade0",
            "nombre": "Nutra Nuggets Azul",
            "precio": 76000,
            "imagen": "./images/productos/perroazul.png",
            "inventario": 120,
        },
        {
            "_id": "635132ea109735e58d94ade3",
            "nombre": "Nutra Nuggets Verde",
            "precio": 48000,
            "imagen": "./images/productos/perroverde.png",
            "inventario": 20,
        }
        
    ]

    cartItems = Array.from(cartItems);

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />


            {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
                <Fragment>

                    <h2 className="mt-5">Su Carrito: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                            {cartItems && cartItems.map(item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.nombre}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.precio}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-light minus" onClick={decreaseQty}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                    <span className="btn btn-light plus" onClick={increaseQty}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>

                            ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h5><b>Total de la Compra </b></h5>
                                <hr />
                                <p>Subtotal :  <span className="order-summary-values">$200.000</span></p>
                                <p>I.V.A :  <span className="order-summary-values">$38.000</span></p>
                                <p><b>Total</b> : <span className="order-summary-values">$238.000</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block">Comprar!</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart