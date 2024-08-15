import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JarallaxSection from '../../Common/JarallaxSection';
import sectionBg from "../../assets/images/full-width-images/section-bg-10.jpg";

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
import shopprev10 from "../../assets/images/shop/shop-prev-10.jpg";
import shopprev11 from "../../assets/images/shop/shop-prev-11.jpg";
import shopprev12 from "../../assets/images/shop/shop-prev-12.jpg";
import user from "../../assets/images/user-avatar.png";
import previews5 from "../../assets/images/shop/previews/shop-prev-5.jpg";
import previews4 from "../../assets/images/shop/previews/shop-prev-4.jpg";
import previews3 from "../../assets/images/shop/previews/shop-prev-3.jpg";
import previews2 from "../../assets/images/shop/previews/shop-prev-2.jpg";
import previews1 from "../../assets/images/shop/previews/shop-prev-1.jpg";

const ShopColumns4 = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-30">
                <Container className="relative align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Shop</h1>
                            <div className="hs-line-4 font-alt">
                                Choose the best products in our shop
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Shop</Link>&nbsp;/&nbsp;<span>Columns</span>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </JarallaxSection>




            <section className="page-section">
                <div className="container relative">

                    <Row>
                        <Col sm={12}>
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
                                <Col md={3} lg={3} className="mb-60 mb-xs-40">
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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

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
                                        <Link to="#" className="btn btn-mod btn-gray btn-round"><i className="fa fa-shopping-cart"></i> Add to cart</Link>
                                    </div>

                                </Col>



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev10} alt="" /></Link>
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



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev11} alt="" /></Link>
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



                                <Col md={3} lg={3} className="mb-60 mb-xs-40">

                                    <div className="post-prev-img">
                                        <Link to="/shop-single"><img src={shopprev12} alt="" /></Link>
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
                    </Row>

                </div>
            </section>

            <hr className="mt-0 mb-0" />

            <section className="page-section">
                <div className="container relative">

                    <Row className="multi-columns-row">

                        <Col sm={6} md={3} lg={3}>


                            <div className="widget">

                                <h5 className="widget-title font-alt">Cart</h5>

                                <div className="widget-body">
                                    <ul className="clearlist widget-posts">


                                        <li className="clearfix">
                                            <Link to="#"><img src={previews5} alt="" className="widget-posts-img" /></Link>
                                            <div className="widget-posts-descr">
                                                <Link to="#" title="">Polo Shirt With Argyle Print</Link>
                                                <div>
                                                    1 x $25.99
                                                </div>
                                                <div>
                                                    <Link to="#"><i className="fa fa-times"></i> Remove</Link>
                                                </div>
                                            </div>
                                        </li>



                                        <li className="clearfix">
                                            <Link to="#"><img src={previews4} alt="" className="widget-posts-img" /></Link>
                                            <div className="widget-posts-descr">
                                                <Link to="#" title="">Shirt With Mesh Sleeves</Link>
                                                <div>
                                                    1 x $30.00
                                                </div>
                                                <div>
                                                    <Link to="#"><i className="fa fa-times"></i> Remove</Link>
                                                </div>
                                            </div>
                                        </li>


                                    </ul>

                                    <div className="clearfix mt-20">

                                        <div className="left mt-10">
                                            Subtotal: <strong>$35.00</strong>
                                        </div>

                                        <div className="right">
                                            <Link to="#" className="btn btn-mod btn-border btn-small btn-round">View Cart</Link>
                                        </div>

                                    </div>

                                    <div>

                                    </div>

                                </div>

                            </div>


                        </Col>

                        <Col sm={6} md={3} lg={3}>


                            <div className="widget">

                                <h5 className="widget-title font-alt">Tags</h5>

                                <div className="widget-body">
                                    <div className="tags">
                                        <Link to="#">Design</Link>
                                        <Link to="#">Portfolio</Link>
                                        <Link to="#">Digital</Link>
                                        <Link to="#">Branding</Link>
                                        <Link to="#">Theme</Link>
                                        <Link to="#">Clean</Link>
                                        <Link to="#">UI & UX</Link>
                                        <Link to="#">Love</Link>
                                    </div>
                                </div>

                            </div>



                            <div className="widget">

                                <h5 className="widget-title font-alt">Text widget</h5>

                                <div className="widget-body">
                                    <div className="widget-text clearfix">

                                        <img src={user} alt="" width="70" className="img-circle left img-left" />
                                        Consectetur adipiscing elit. Quisque magna ante eleifend eleifend.
                                        Purus ut dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non sem.
                                        Quisque magna ante eleifend eleifend.
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3}>
                            <div className="widget">
                                <h5 className="widget-title font-alt">Categories</h5>

                                <div className="widget-body">
                                    <ul className="clearlist widget-menu">
                                        <li>
                                            <Link to="#" title="">Branding</Link>
                                            <small>
                                                - 7
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Design</Link>
                                            <small>
                                                - 15
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Development</Link>
                                            <small>
                                                - 3
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Photography</Link>
                                            <small>
                                                - 5
                                            </small>
                                        </li>
                                        <li>
                                            <Link to="#" title="">Other</Link>
                                            <small>
                                                - 1
                                            </small>
                                        </li>
                                    </ul>
                                </div>

                            </div>



                            <div className="widget">

                                <h5 className="widget-title font-alt">Filter by price</h5>

                                <div className="widget-body">
                                    <form method="post" action="#" className="form">

                                        <Row className="mb-20">
                                            <Col sx={6}>
                                                <input type="text" name="price-from" id="price-from" className="input-md round form-control" placeholder="From, $" maxLength={100} />
                                            </Col>

                                            <Col sx={6}>
                                                <input type="text" name="price-to" id="price-to" className="input-md round form-control" placeholder="To, $" maxLength={100} />
                                            </Col>
                                        </Row>

                                        <button className="btn btn-mod btn-medium btn-full btn-round">Filter</button>

                                    </form>
                                </div>

                            </div>


                        </Col>

                        <Col sm={6} md={3} lg={3}>
                            <div className="widget">

                                <h5 className="widget-title font-alt">Bestsellers</h5>

                                <div className="widget-body">
                                    <ul className="clearlist widget-posts">


                                        <li className="clearfix">
                                            <Link to="#"><img src={previews1} alt="" className="widget-posts-img" /></Link>
                                            <div className="widget-posts-descr">
                                                <Link to="#" title="">Polo Shirt With Argyle Print</Link>
                                                <div>
                                                    <del>
                                                        50.00
                                                    </del>&nbsp;
                                                    $25.99
                                                </div>
                                                <div>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <Link to="#"><img src={previews2} alt="" className="widget-posts-img" /></Link>
                                            <div className="widget-posts-descr">
                                                <Link to="#" title="">Polo Slim Fit Pique Badge Logo</Link>
                                                <div>
                                                    $75.00
                                                </div>
                                                <div>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                        </li>



                                        <li className="clearfix">
                                            <Link to="#"><img src={previews3} alt="" className="widget-posts-img" /></Link>
                                            <div className="widget-posts-descr">
                                                <Link to="#" title="">Esprit Pique Polo Shirt</Link>
                                                <div>
                                                    $30.99
                                                </div>
                                                <div>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                        </li>


                                    </ul>
                                </div>

                            </div>


                        </Col>

                    </Row>

                </div>
            </section>
        </React.Fragment>
    );
};

export default ShopColumns4;
