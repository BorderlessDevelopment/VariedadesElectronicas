import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

export const Dashboard = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-3">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-9">
                    <h1 className="my-4">Dashboard</h1>

                        <Fragment>
                            <MetaData title={'Administracion'} />

                            <div className="row pr-4">
                                <div className="col-xl-12 col-sm-12 mb-3">
                                    <div className="card border-primary mb- o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Monto Total<br /> <b>$2.000.000</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pr-4">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card border-success mb-2 o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Productos<br /> <b>123</b></div>
                                        </div>
                                        <Link className="card-footer text-black clearfix small z-1" to="/admin/products">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card border-warning mb-2 o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Pedidos<br /> <b>34</b></div>
                                        </div>
                                        <Link className="card-footer text-black clearfix small z-1" to="/admin/orders">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card border-info mb-2 o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Usuarios<br /> <b>12</b></div>
                                        </div>
                                        <Link className="card-footer text-black clearfix small z-1" to="/admin/users">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card border-danger o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Agotados<br /> <b>20</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    

                </div>
            </div>

        </Fragment >
    )
}


    


export default Dashboard