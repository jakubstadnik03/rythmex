import React from 'react';
import { Col, Container, Nav, Row, Tab, TabContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SlideshowLightbox } from 'lightbox.js-react';
import '../../../node_modules/lightbox.js-react/dist/index.css';

//import images
import shopPrev1 from "../../assets/images/shop/shop-prev-1.jpg";
import shopPrev2 from "../../assets/images/shop/shop-prev-2.jpg";
import shopPrev3 from "../../assets/images/shop/shop-prev-3.jpg";
import shopPrev4 from "../../assets/images/shop/shop-prev-4.jpg";

const ShopSingle = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Single Product</h1>
                            <div className="hs-line-4 font-alt black">
                                Choose the best products in our shop
                            </div>
                        </Col>

                        <div className="col-md-4 mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Shop</Link>&nbsp;/&nbsp;<span>Single</span>
                            </div>

                        </div>
                    </Row>
                </div>
            </section>

            <section className="page-section">
                <Container className="relative">
                    <Row className="mb-60 mb-xs-30">
                        <Col md={4} className="mb-md-30">
                            <div className="post-prev-img">
                                <Link to={shopPrev1} className="lightbox-gallery-3 mfp-image"><img src={shopPrev1} alt="" /></Link>
                                <div className="intro-label">
                                    <span className="badge badge-danger bg-red">Sale</span>
                                </div>
                            </div>

                            <div>
                                <SlideshowLightbox className="container post-prev-img mx-auto mb-8 d-flex flex-wrap mx-auto">
                                    <img src={shopPrev2} alt="" className='rounded object-cover p-2' style={{ width: "8%" }} />
                                    <img src={shopPrev3} alt="" className='rounded object-cover p-2' style={{ width: "8%" }} />
                                    <img src={shopPrev4} alt="" className='rounded object-cover p-2' style={{ width: "8%" }} />
                                </SlideshowLightbox>
                            </div>
                        </Col>














                        <Col sm={8} md={5} className="mb-xs-40">

                            <h3 className="mt-0">Religion Jersey Polo Shirt</h3>

                            <hr className="mt-0 mb-30" />

                            <Row>
                                <Col xs={6} className="lead mt-0 mb-20">

                                    <del className="section-text">$50.00</del>
                                    <strong>$25.99</strong>

                                </Col>
                                <Col xs={6} className="align-right section-text">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    &nbsp;(3 reviews)
                                </Col>
                            </Row>

                            <hr className="mt-0 mb-30" />

                            <div className="section-text mb-30">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dui id dui suscipit pharetra vitae quis urna. Ut scelerisque quam quis erat tincidunt, vel vehicula turpis bibendum.
                            </div>

                            <hr className="mt-0 mb-30" />

                            <div className="mb-30">
                                <form method="post" action="#" className="form">
                                    <input type="number" className="input-lg round" min="1" max="100" defaultValue="1" />
                                    <Link to="#" className="btn btn-mod btn-large btn-round">Add to Cart</Link>
                                </form>
                            </div>

                            <hr className="mt-0 mb-30" />

                            <div className="section-text small">
                                <div>SKU: 2134</div>
                                <div>Category: <Link to=""> Polo shirts</Link></div>
                                <div>Tags: <Link to="">polo shirt</Link>, <Link to="">men</Link></div>
                            </div>
                        </Col>

                        <Col sm={4} md={3} className="mb-xs-40">
                            <div className="alt-service-wrap">
                                <div className="alt-service-item">
                                    <div className="alt-service-icon">
                                        <i className="fa fa-paper-plane-o"></i>
                                    </div>
                                    <h3 className="alt-services-title font-alt">Free Shipping</h3>
                                    Vivamus neque orci, ultricies blandit ultricies vel, semper..
                                </div>
                            </div>

                            <div className="alt-service-wrap">
                                <div className="alt-service-item">
                                    <div className="alt-service-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <h3 className="alt-services-title font-alt">14 days moneyback</h3>
                                    Vivamus neque orci, ultricies blandit ultricies vel, semper..
                                </div>
                            </div>

                            <div className="alt-service-wrap">
                                <div className="alt-service-item">
                                    <div className="alt-service-icon">
                                        <i className="fa fa-gift"></i>
                                    </div>
                                    <h3 className="alt-services-title font-alt">100% Original</h3>
                                    Vivamus neque orci, ultricies blandit ultricies vel, semper..
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <TabContainer defaultActiveKey="one">
                        <Nav as="ul" role="tablist" className="nav nav-tabs tpl-tabs animate">
                            <Nav.Item as="li" role="presentation">
                                <Nav.Link eventKey="one" href="#one">Description</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" role="presentation">
                                <Nav.Link eventKey="two" href="#two">Parameters</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" role="presentation">
                                <Nav.Link eventKey="three" href="#three">Reviews (3)</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content className="tpl-tabs-cont">
                            <Tab.Pane eventKey="one" role="tabpanel" id="one">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                                    Aliquam tortor leo, pharetra non congue sit amet, bibendum sit amet enim. Nullam sit amet malesuada justo.
                                </p>
                                <p>
                                    Nunc vulputate semper erat, non iaculis sapien congue sit amet. Duis non nulla volutpat, dignissim leo sit amet, porta nunc. Donec placerat fermentum metus ac scelerisque. In id sollicitudin nulla. Suspendisse potenti. Integer aliquam orci
                                    aliquam eros posuere ornare. Fusce augue felis, maximus non lacus vitae, ullamcorper dignissim leo. Ut congue feugiat turpis at aliquam. Donec eros neque, accumsan sed venenatis volutpat, tempor at metus.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="two" role="tabpanel" id="two">

                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                Parameter
                                            </th>
                                            <th>
                                                Value
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Size
                                            </td>
                                            <td>
                                                Small, Medium & Large
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Color
                                            </td>
                                            <td>
                                                Black & White
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Waist
                                            </td>
                                            <td>
                                                25cm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Length
                                            </td>
                                            <td>
                                                50cm
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </Tab.Pane>
                            <Tab.Pane eventKey="three" role="tabpanel" id="three">

                                <div className="mb-60 mb-xs-30">
                                    <ul className="media-list text comment-list clearlist">


                                        <li className="media comment-item">
                                            <a className="pull-left" href="#"><img className="media-object comment-avatar" src="images/user-avatar.png" alt="" /></a>
                                            <div className="media-body">
                                                <div className="comment-item-data">
                                                    <div className="comment-author">
                                                        <Link to="#">Emma Johnson</Link>
                                                    </div>
                                                    Feb 9, 2014, at 10:37<span className="separator">&mdash;</span>

                                                    <span>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </span>

                                                </div>
                                                <p>
                                                    Donec fermentum turpis et finibus commodo. Sed dictum laoreet mi, vitae dignissim purus interdum at. Sed a est at purus cursus elementum ut sed lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                                                </p>
                                            </div>
                                        </li>



                                        <li className="media comment-item">
                                            <a className="pull-left" href="#"><img className="media-object comment-avatar" src="images/user-avatar.png" alt="" /></a>
                                            <div className="media-body">
                                                <div className="comment-item-data">
                                                    <div className="comment-author">
                                                        <Link to="#">John Doe</Link>
                                                    </div>
                                                    Feb 9, 2014, at 10:3<span className="separator">&mdash;</span>
                                                    <span>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </span>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                                                </p>
                                            </div>
                                        </li>


                                    </ul>
                                </div>


                                <div>

                                    <h4 className="blog-page-title font-alt">Add Review</h4>


                                    <form method="post" action="#" id="form" className="form">

                                        <div className="row mb-20 mb-md-10">

                                            <div className="col-md-6 mb-md-10">

                                                <input type="text" name="name" id="name" className="input-md form-control" placeholder="Name *" maxLength={100} required aria-required="true" />
                                            </div>

                                            <div className="col-md-6">

                                                <input type="email" name="email" id="email" className="input-md form-control" placeholder="Email *" maxLength={100} required aria-required="true" />
                                            </div>

                                        </div>

                                        <div className="mb-20 mb-md-10">

                                            <select className="input-md form-control">
                                                <option>-- Select one --</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>


                                        <div className="mb-30 mb-md-10">
                                            <textarea name="text" id="text" className="input-md form-control" rows={6} placeholder="Comment" maxLength={400}></textarea>
                                        </div>


                                        <button type="submit" className="btn btn-mod btn-medium btn-round">
                                            Send Review
                                        </button>

                                    </form>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </TabContainer>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Related Products
                    </h2>

                    <Row className="multi-columns-row">
                        <Col md={3} lg={3} className="mb-60 mb-xs-40">

                            <div className="post-prev-img">

                                <Link to="/shop-single"><img src={shopPrev1} alt="" /></Link>

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
                                <Link to="/shop-single"><img src={shopPrev2} alt="" /></Link>
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
                                <Link to="/shop-single"><img src={shopPrev3} alt="" /></Link>
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
                                <Link to="/shop-single"><img src={shopPrev4} alt="" /></Link>
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
                </div>
            </section>
        </React.Fragment>
    );
};

export default ShopSingle;
