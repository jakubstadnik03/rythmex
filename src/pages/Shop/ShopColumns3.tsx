import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartSidebar2 from '../../Common/Shop/CartSidebar2';

//import images
import shopprev1 from "../../assets/images/shop/shop-prev-1.jpg";
import shopprev2 from "../../assets/images/shop/shop-prev-2.jpg";
import shopprev3 from "../../assets/images/shop/shop-prev-3.jpg";
import shopprev4 from "../../assets/images/shop/shop-prev-4.jpg";
import shopprev5 from "../../assets/images/shop/shop-prev-5.jpg";
import shopprev6 from "../../assets/images/shop/shop-prev-6.jpg";
import shopprev7 from "../../assets/images/shop/shop-prev-7.jpg";
import shopprev8 from "../../assets/images/shop/shop-prev-8.jpg";
import shopprev9 from "../../assets/images/shop/shop-prev-9.jpg";

const ShopColumns3 = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Shop</h1>
                            <div className="hs-line-4 font-alt black">
                                Choose the best products in our shop
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Shop</Link>&nbsp;/&nbsp;<span>Columns</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            <section className="page-section">
                <Container className="relative">

                    <Row>

                        <Col sm={8}>

                            <div className="clearfix mb-40">

                                <div className="left section-text mt-10">
                                    Showing 1–12 of 23 results
                                </div>

                                <div className="right">
                                    <form method="post" action="#" className="form">
                                        <select className="input-md round">
                                            <option>Default sorting</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </form>
                                </div>

                            </div>

                            <Row className="multi-columns-row">

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">

                                        <Link to="/shop-single"><img src={shopprev1} alt="" /></Link>

                                        <div className="intro-label">
                                            <span className="badge badge-danger bg-red">Sale</span>
                                        </div>

                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">G-Star Polo Applique Jersey</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <del>$150.00</del>
                                        &nbsp;
                                        <strong>$94.75</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev2} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Only & Sons Pique Polo Shirt</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$28.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev3} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Longline Long Sleeve</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$39.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev4} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Polo Shirt With Floral Sleeves</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$85.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">

                                        <Link to="/shop-single"><img src={shopprev5} alt="" /></Link>

                                        <div className="intro-label">
                                            <span className="badge badge-danger bg-red">Sale</span>
                                        </div>

                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">G-Star Polo Applique Jersey</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <del>$150.00</del>
                                        &nbsp;
                                        <strong>$94.75</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev6} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Only & Sons Pique Polo Shirt</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$28.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev7} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Longline Long Sleeve</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$39.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev8} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Polo Shirt With Floral Sleeves</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$85.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>

                                <Col md={4} lg={4} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev9} alt="" /></Link>
                                    </div>

                                    <div className="post-prev-title font-alt align-center">
                                        <Link to="/shop-single">Only & Sons Pique Polo Shirt</Link>
                                    </div>

                                    <div className="post-prev-text align-center">
                                        <strong>$28.99</strong>
                                    </div>

                                    <div className="post-prev-more align-center">
                                        <a href="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                    </div>

                                </Col>



                            </Row>

                            <div className="pagination">
                                <Link to="#"><i className="fa fa-angle-left"></i></Link>
                                <Link to="#" className="active">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <a className="no-active">...</a>
                                <Link to="#">9</Link>
                                <Link to="#"><i className="fa fa-angle-right"></i></Link>
                            </div>

                        </Col>

                        <CartSidebar2 />
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default ShopColumns3;
