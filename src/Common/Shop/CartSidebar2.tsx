import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import shopprev5 from "../../assets/images/shop/previews/shop-prev-5.jpg";
import shopprev4 from "../../assets/images/shop/previews/shop-prev-4.jpg";
import shopprev1 from "../../assets/images/shop/previews/shop-prev-1.jpg";
import shopprev2 from "../../assets/images/shop/previews/shop-prev-2.jpg";
import shopprev3 from "../../assets/images/shop/previews/shop-prev-3.jpg";

const CartSidebar2 = () => {
    return (
        <React.Fragment>
            <Col sm={4} md={3} className="offset-md-1 sidebar">

                <div className="widget">

                    <h5 className="widget-title font-alt">Cart</h5>

                    <div className="widget-body">
                        <ul className="clearlist widget-posts">

                            <li className="clearfix">
                                <Link to="#"><img src={shopprev5} alt="" className="widget-posts-img" /></Link>
                                <div className="widget-posts-descr">
                                    <a href="#" title="">Polo Shirt With Argyle Print</a>
                                    <div>
                                        1 x $25.99
                                    </div>
                                    <div>
                                        <Link to="#"><i className="fa fa-times"></i> Remove</Link>
                                    </div>
                                </div>
                            </li>

                            <li className="clearfix">
                                <Link to="#"><img src={shopprev4} alt="" className="widget-posts-img" /></Link>
                                <div className="widget-posts-descr">
                                    <a href="#" title="">Shirt With Mesh Sleeves</a>
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
                                <a href="#" className="btn btn-mod btn-border btn-small btn-round">View Cart</a>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="widget">

                    <h5 className="widget-title font-alt">Filter by price</h5>

                    <div className="widget-body">
                        <form method="post" action="#" className="form">

                            <div className="row mb-20">
                                <div className="col-6">
                                    <input type="text" name="price-from" id="price-from" className="input-md round form-control" placeholder="From, $" maxLength={100} />
                                </div>

                                <div className="col-6">
                                    <input type="text" name="price-to" id="price-to" className="input-md round form-control" placeholder="To, $" maxLength={100} />
                                </div>
                            </div>

                            <button className="btn btn-mod btn-medium btn-full btn-round">Filter</button>

                        </form>
                    </div>

                </div>

                <div className="widget">

                    <h5 className="widget-title font-alt">Shop Categories</h5>

                    <div className="widget-body">
                        <ul className="clearlist widget-menu">
                            <li>
                                <a href="#" title="">Branding</a>
                                <small>
                                    - 7
                                </small>
                            </li>
                            <li>
                                <a href="#" title="">Design</a>
                                <small>
                                    - 15
                                </small>
                            </li>
                            <li>
                                <a href="#" title="">Development</a>
                                <small>
                                    - 3
                                </small>
                            </li>
                            <li>
                                <a href="#" title="">Photography</a>
                                <small>
                                    - 5
                                </small>
                            </li>
                            <li>
                                <a href="#" title="">Other</a>
                                <small>
                                    - 1
                                </small>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="widget">

                    <h5 className="widget-title font-alt">Bestsellers</h5>

                    <div className="widget-body">
                        <ul className="clearlist widget-posts">

                            <li className="clearfix">
                                <Link to="#"><img src={shopprev1} alt="" className="widget-posts-img" /></Link>
                                <div className="widget-posts-descr">
                                    <a href="#" title="">Polo Shirt With Argyle Print</a>
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
                                <Link to="#"><img src={shopprev2} alt="" className="widget-posts-img" /></Link>
                                <div className="widget-posts-descr">
                                    <a href="#" title="">Polo Slim Fit Pique Badge Logo</a>
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
                                <Link to="#"><img src={shopprev3} alt="" className="widget-posts-img" /></Link>
                                <div className="widget-posts-descr">
                                    <a href="#" title="">Esprit Pique Polo Shirt</a>
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

                            <li className="clearfix">
                                <Link to="#"><img src={shopprev4} alt="" className="widget-posts-img" /></Link>
                                <div className="widget-posts-descr">
                                    <a href="#" title="">Polo Shirt With Argyle Print</a>
                                    <div>
                                        $15.99
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

                        </ul>
                    </div>

                </div>


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

            </Col>
        </React.Fragment>
    );
};

export default CartSidebar2;
