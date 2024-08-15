import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import prev1 from "../../assets/images/shop/shop-prev-1.jpg";
import prev2 from "../../assets/images/shop/shop-prev-2.jpg";
import prev3 from "../../assets/images/shop/shop-prev-3.jpg";
import prev4 from "../../assets/images/shop/shop-prev-4.jpg";

const BestSeller = () => {
    return (
        <React.Fragment>
            <section className="page-section">
                <Container className="relative">

                    <h2 className="section-title font-alt align-left mb-70 mb-sm-40">
                        Bestsellers
                        <Link to="/shop-columns-3col" className="section-more right">Our Shop <i className="fa fa-angle-right"></i></Link>
                    </h2>

                    <Row className="multi-columns-row">
                        <Col md={3} lg={3} className="mb-60 mb-xs-40 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">
                            <div className="post-prev-img">
                                <Link to="/shop-single"><img src={prev1} alt="" /></Link>
                                <div className="intro-label">
                                    <span className="badge badge-danger bg-red">Sale</span>
                                </div>
                            </div>
                            <div className="post-prev-title font-alt align-center">
                                <Link to="/shop-single">G-Star Polo Applique Jersey</Link>
                            </div>
                            <div className="post-prev-text align-center">
                                <del>
                                    $150.00
                                </del>
                                &nbsp;<strong>$94.75</strong>
                            </div>
                            <div className="post-prev-more align-center">
                                <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                            </div>
                        </Col>

                        <Col md={3} lg={3} className="mb-60 mb-xs-40 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="post-prev-img">
                                <Link to="/shop-single"><img src={prev2} alt="" /></Link>
                            </div>
                            <div className="post-prev-title font-alt align-center">
                                <Link to="/shop-single">Only & Sons Pique Polo Shirt</Link>
                            </div>
                            <div className="post-prev-text align-center">
                                <strong>$28.99</strong>
                            </div>
                            <div className="post-prev-more align-center">
                                <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                            </div>
                        </Col>

                        <Col md={3} lg={3} className="mb-60 mb-xs-40 wow fadeIn" data-wow-delay="0.3s" data-wow-duration="2s">
                            <div className="post-prev-img">
                                <Link to="/shop-single"><img src={prev3} alt="" /></Link>
                            </div>
                            <div className="post-prev-title font-alt align-center">
                                <Link to="/shop-single">Longline Long Sleeve</Link>
                            </div>
                            <div className="post-prev-text align-center">
                                <strong>$39.99</strong>
                            </div>
                            <div className="post-prev-more align-center">
                                <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                            </div>
                        </Col>

                        <Col md={3} lg={3} className="mb-60 mb-xs-40 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="post-prev-img">
                                <Link to="/shop-single"><img src={prev4} alt="" /></Link>
                            </div>
                            <div className="post-prev-title font-alt align-center">
                                <Link to="/shop-single">Polo Shirt With Floral Sleeves</Link>
                            </div>
                            <div className="post-prev-text align-center">
                                <strong>$85.99</strong>
                            </div>
                            <div className="post-prev-more align-center">
                                <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>

            <hr className="mt-0 mb-0 "/>
        </React.Fragment>
    );
};

export default BestSeller;
