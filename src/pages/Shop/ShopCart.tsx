import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

//import images
import prev5 from "../../assets/images/shop/previews/shop-prev-5.jpg";
import prev3 from "../../assets/images/shop/previews/shop-prev-3.jpg";

const ShopCart = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">

                    <Row>
                        <div className="col-md-8">
                            <h1 className="hs-line-11 font-alt mb-0">Shopping Cart</h1>
                        </div>

                        <div className="col-md-4 mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <a href="#">Home</a>&nbsp;/&nbsp;<a href="#">Shop</a>&nbsp;/&nbsp;<span>Cart</span>
                            </div>

                        </div>
                    </Row>
                </div>
            </section>

            <section className="page-section">
                <div className="container">

                    <Row>
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">

                            <div className="table-responsive">
                                <table className="table table-striped shopping-cart-table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Photo
                                            </th>
                                            <th>
                                                Product
                                            </th>
                                            <th>
                                                Q-ty
                                            </th>
                                            <th>
                                                Total
                                            </th>
                                            <th>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="#"><img src={prev5} alt="" /></Link>
                                            </td>
                                            <td>
                                                <a href="#" title="">Polo Shirt With Argyle Print</a>
                                            </td>
                                            <td>
                                                <form className="form">
                                                    <input type="number" className="input-sm" style={{ width: "60px" }} min="1" max="100" defaultValue="1" />
                                                </form>
                                            </td>
                                            <td>
                                                $25.99
                                            </td>
                                            <td>
                                                <Link to="#"><i className="fa fa-times"></i> <span className="d-none d-sm-inline-block">Remove</span></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="#"><img src={prev3} alt="" /></Link>
                                            </td>
                                            <td>
                                                <a href="#" title="">Shirt With Mesh Sleeves</a>
                                            </td>
                                            <td>
                                                <form className="form">
                                                    <input type="number" className="input-sm" style={{ width: "60px" }} min="1" max="100" defaultValue="1" />
                                                </form>
                                            </td>
                                            <td>
                                                $30.00
                                            </td>
                                            <td>
                                                <Link to="#"><i className="fa fa-times"></i> <span className="d-none d-sm-inline-block">Remove</span></Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr />

                            <Row>
                                <Col sm={8}>
                                    <form action="#" className="form">
                                        <input placeholder="Coupon code" className="input-sm mb-10" style={{ width: "250px" }} type="text" pattern=".{3,100}" required />
                                        &nbsp;<button type="submit" className="btn btn-mod btn-round btn-gray btn-small mb-10">Apply Coupon</button>
                                    </form>
                                </Col>
                                <div className="col-sm-4 text align-right">

                                    <div>
                                        <Link to="#" className="btn btn-mod btn-gray btn-round btn-small">Update Cart</Link>
                                    </div>

                                </div>
                            </Row>

                            <hr className="mt-10 mb-60" />

                            <Row>
                                <div className="col-sm-6">

                                    <h3 className="small-title font-alt">Calculate Shipping</h3>

                                    <form action="#" className="form">

                                        <div className="mb-10">
                                            <select className="input-md form-control">
                                                <option>Select Country</option>
                                                <option>France</option>
                                                <option>Ukraine</option>
                                                <option>USA</option>
                                            </select>
                                        </div>

                                        <div className="mb-10">
                                            <input placeholder="State" className="input-md form-control" type="text" pattern=".{3,100}" />
                                        </div>

                                        <div className="mb-10">
                                            <input placeholder="Postcode / Zip" className="input-md form-control" type="text" pattern=".{3,100}" />
                                        </div>

                                    </form>

                                </div>
                                <div className="col-sm-6 text align-right pt-10">


                                    <div>
                                        Cart subtotal: <strong>$45.95</strong>
                                    </div>

                                    <div className="mb-10">
                                        Shipping: <strong>$30.00</strong>
                                    </div>

                                    <div className="lead mt-0 mb-30">
                                        Order Total: <strong>$75.99</strong>
                                    </div>

                                    <div>
                                        <Link to="#" className="btn btn-mod btn-round btn-large">Proceed to Checkout</Link>
                                    </div>

                                </div>
                            </Row>
                        </div>
                    </Row>

                </div>
            </section>
        </React.Fragment>
    );
};

export default ShopCart;
