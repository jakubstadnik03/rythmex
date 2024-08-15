import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cta from '../../Common/MainDemo/Cta';

const Pricing2 = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-dark-lighter">
                <div className="relative container align-left">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Pricing</h1>
                            <div className="hs-line-4 font-alt">
                                We&rsquo;re always open to&nbsp;talk to&nbsp;good people
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Pricing</span>
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>

            <section className="page-section">
                <div className="container">

                    <div className="row mb-70 mb-xs-40">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="section-text align-center">
                                Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor.
                                Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec
                                mollis lorem vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur vehicula porttitor rutrum.
                            </div>
                        </div>
                    </div>

                    <div className="row multi-columns-row">
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="pricing-item">
                                <div className="pricing-item-inner">
                                    <div className="pricing-wrap">
                                        <div className="pricing-icon">
                                            <i className="fa fa-paper-plane-o"></i>
                                        </div>
                                        <div className="pricing-title">
                                            Start
                                        </div>
                                        <div className="pricing-features font-alt">
                                            <ul className="sf-list pr-list">
                                                <li>1 Gb Storage</li>
                                                <li>3 Domain Names</li>
                                                <li>5 FTP Users</li>
                                                <li>Free Support</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-num">
                                            <sup>$</sup>199
                                        </div>

                                        <div className="pr-per">
                                            per month
                                        </div>


                                        <div className="pr-button">
                                            <Link to="#" className="btn btn-mod">Buy Now</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="pricing-item">
                                <div className="pricing-item-inner">
                                    <div className="pricing-wrap">
                                        <div className="pricing-icon">
                                            <i className="fa fa-gift"></i>
                                        </div>
                                        <div className="pricing-title">
                                            Standard
                                        </div>
                                        <div className="pricing-features font-alt">
                                            <ul className="sf-list pr-list">
                                                <li>3 Gb Storage</li>
                                                <li>5 Domain Names</li>
                                                <li>7 FTP Users</li>
                                                <li>Free Support</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-num">
                                            <sup>$</sup>239
                                        </div>

                                        <div className="pr-per">
                                            per month
                                        </div>
                                        <div className="pr-button">
                                            <Link to="#" className="btn btn-mod">Buy Now</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="pricing-item">
                                <div className="pricing-item-inner">
                                    <div className="pricing-wrap">
                                        <div className="pricing-icon">
                                            <i className="fa fa-desktop"></i>
                                        </div>


                                        <div className="pricing-title">
                                            Optima
                                        </div>
                                        <div className="pricing-features font-alt">
                                            <ul className="sf-list pr-list">
                                                <li>5 Gb Storage</li>
                                                <li>9 Domain Names</li>
                                                <li>15 FTP Users</li>
                                                <li>Free Support</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-num">
                                            <sup>$</sup>399
                                        </div>

                                        <div className="pr-per">
                                            per month
                                        </div>
                                        <div className="pr-button">
                                            <Link to="#" className="btn btn-mod">Buy Now</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="pricing-item">
                                <div className="pricing-item-inner">
                                    <div className="pricing-wrap">
                                        <div className="pricing-icon">
                                            <i className="fa fa-suitcase"></i>
                                        </div>
                                        <div className="pricing-title">
                                            VIP
                                        </div>
                                        <div className="pricing-features font-alt">
                                            <ul className="pr-list">
                                                <li>15 Gb Storage</li>
                                                <li>Unlimit Domain Names</li>
                                                <li>Unlimit FTP Users</li>
                                                <li>Free Support</li>
                                            </ul>
                                        </div>

                                        <div className="pricing-num">
                                            <sup>$</sup>579
                                        </div>

                                        <div className="pr-per">
                                            per month
                                        </div>

                                        <div className="pr-button">
                                            <Link to="#" className="btn btn-mod">Buy Now</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <Cta />
        </React.Fragment>
    );
};

export default Pricing2;
