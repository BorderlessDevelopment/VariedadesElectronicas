import React, { Fragment } from 'react'

export const Home = () => {
    return (
        <Fragment>
            <h2 id="Encabezado_productos">Ultimos Productos</h2>

            {/*Producto 1*/}
            <section id="Productos" className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutranugets.png" alt="nutranugets_azul"></img>
                            <div className="card-body d-flex flex-column">
                                <h4 id="Titulo_productos"><a href="http://localhost:3000">Nutranugets Azul</a></h4>

                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutranugetsamarillo.png" alt="nutranugets_amarillo"></img>
                            <div className="card-body d-flex flex-column">
                                <h4 id="Titulo_productos"><a href="http://localhost:3000">Nutranugets Amarillo</a></h4>

                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 6 reviews</span>
                                </div>
                                <p className='card-text'>$27.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutranugetsrojo.png" alt="nutranugets_Rojo"></img>
                            <div className="card-body d-flex flex-column">
                                <h4 id="Titulo_productos"><a href="http://localhost:3000">Nutranugets Rojo</a></h4>

                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 6 reviews</span>
                                </div>
                                <p className='card-text'>$48.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img className="card-img-top mx-auto" src="./images/nutranugetsverde.png" alt="nutranugets_verde"></img>
                            <div className="card-body d-flex flex-column">
                                <h4 id="Titulo_productos"><a href="http://localhost:3000">Nutranugets verde</a></h4>

                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 6 reviews</span>
                                </div>
                                <p className='card-text'>$28.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </Fragment>
    )
}
export default Home