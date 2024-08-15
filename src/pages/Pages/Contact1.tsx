import React, { useState } from 'react';
import sectionBg from "../../assets/images/full-width-images/section-bg-25.jpg";
import JarallaxSection from '../../Common/JarallaxSection';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact1 = () => {

    const [openMap, setOpenMap] = useState(true);

    const handleClick = () => {
        setOpenMap(!openMap);
    };
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-70 parallax-3">
                <div className="relative container align-left">
                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Contact</h1>
                            <div className="hs-line-4 font-alt">
                                We’re always open to talk to good people
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Contact</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </JarallaxSection>

            <section className="page-section" id="contact">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Have a questions?
                    </h2>

                    <div className="row mb-60 mb-xs-40">

                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="row">


                                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Call Us
                                        </div>
                                        <div className="ci-text">
                                            +61 3 8376 6284
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Address
                                        </div>
                                        <div className="ci-text">
                                            245 Quigley Blvd, Ste K
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                                    <div className="contact-item">
                                        <div className="ci-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ci-title font-alt">
                                            Email
                                        </div>
                                        <div className="ci-text">
                                            <a href="mailto:support@srbthemes.pro">support@srbthemes.pro</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">

                            <form className="form contact-form" id="contact_form">
                                <div className="clearfix">

                                    <div className="cf-left-col">


                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" required aria-required="true" />
                                        </div>


                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" required aria-required="true" />
                                        </div>

                                    </div>

                                    <div className="cf-right-col">


                                        <div className="form-group">
                                            <textarea name="message" id="message" className="input-md round form-control" style={{ height: "88px" }} placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix">

                                    <div className="cf-left-col">
                                        <div className="form-tip pt-20">
                                            <i className="fa fa-info-circle"></i> All the fields are required
                                        </div>

                                    </div>

                                    <div className="cf-right-col">


                                        <div className="align-right pt-10">
                                            <button className="submit_btn btn btn-mod btn-medium btn-round" id="submit_btn" aria-controls="result">Submit Message</button>
                                        </div>

                                    </div>
                                </div>
                                <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="google-map">

                <Link to="#" className={`map-section ${!openMap ? "js-active" : ""}`}>

                    <div className="map-toggle">
                        <div className="mt-icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="mt-text font-alt">
                            <div
                                className="mt-open"
                                onClick={handleClick}
                                style={{ display : openMap ? "block" : "none" }}
                            >
                                Open the map
                                <i className="fa fa-angle-down"></i>
                            </div>
                            <div
                                className="mt-close"
                                onClick={handleClick}
                                style={{ display : openMap ? "none" : "block" }}
                            >
                                Close the map
                                <i className="fa fa-angle-up"></i>
                            </div>
                        </div>
                    </div>
                </Link>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24572.368311964965!2d-75.602613!3d39.65993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3d191cf13%3A0xf4674106f987fe3a!2zMjQ1IFF1aWdsZXkgQmx2ZCBTdGUgSywgTmV3IENhc3RsZSwgREUgMTk3MjAsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1584450290276!5m2!1suk!2sua" width="600" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen aria-hidden="false" loading="lazy"></iframe>
            </div>
        </React.Fragment>
    );
};

export default Contact1;
