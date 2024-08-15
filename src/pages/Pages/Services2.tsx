import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sectionBg from "../../assets/images/full-width-images/section-bg-15.jpg";
import JarallaxSection from '../../Common/JarallaxSection';
import Cta from '../../Common/MainDemo/Cta';
import { Link } from 'react-router-dom';

const Services2 = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-70 parallax-3">
                <div className="relative container align-left">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Services</h1>
                            <div className="hs-line-4 font-alt">
                                We provide the best digital solutions
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<a href="#">Pages</a>&nbsp;/&nbsp;<span>Services</span>
                            </div>
                        </Col>
                    </Row>

                </div>
            </JarallaxSection>

            <section className="page-section">
                <Container className="relative">
                    <Row className="multi-columns-row alt-features-grid">
                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-circle-compass"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">Branding</h3>
                                <div className="alt-features-descr align-left">
                                    Lorem ipsum dolor sit amet, c-r adipiscing elit.
                                    In maximus ligula semper metus pellentesque mattis.
                                    Maecenas  volutpat, diam enim.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-presentation"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">Marketing</h3>
                                <div className="alt-features-descr align-left">
                                    Proin fringilla augue at maximus vestibulum.
                                    Nam pulvinar vitae neque et porttitor. Praesent sed
                                    nisi eleifend, lorem fermentum orci sit amet, iaculis libero.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-browser"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">Web Design</h3>
                                <div className="alt-features-descr align-left">
                                    Curabitur iaculis accumsan augue, nec finibus mauris pretium eu.
                                    Duis placerat ex gravida nibh tristique porta. Nulla facilisi.
                                    Suspendisse ultricies eros blandit.
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-camera"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">Photography</h3>
                                <div className="alt-features-descr align-left">
                                    Cras luctus interdum sodales. Quisque quis odio dui. Sedes sit
                                    amet neque malesuada, lobortis  commodo magna ntesque pharetra
                                    metus vivera sagittis.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-tools-2"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">Development</h3>
                                <div className="alt-features-descr align-left">
                                    Fusce aliquet quam eget neque ultrices elementum. Nulla posuere
                                    felis id arcu blandit sagittis. Eleifender vestibulum purus, sit
                                    amet vulputate risus.
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={4} lg={4}>
                            <div className="alt-features-item align-center">
                                <div className="alt-features-icon">
                                    <span className="icon-anchor"></span>
                                </div>
                                <h3 className="alt-features-title font-alt">Support</h3>
                                <div className="alt-features-descr align-left">
                                    Pulvinar vitae neque et porttitor. Integer non dapibus diam, ac
                                    eleifend lectus. Praesent sed nisi eleifend, fermentum orci sit
                                    amet, iaculis libero interdum.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Cta />

            <section className="page-section" id="about">
                <div className="container relative">

                    <div className="section-text mb-60 mb-sm-40">
                        <div className="row">

                            <div className="col-sm-6 mb-sm-50 mb-xs-30">

                                <h4 className="mt-0 font-alt">Work process</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam.
                                    Aliquam elementum tellus non erat porttitor mollis. Morbi viverra sollicitudin nisl eu sodales.
                                </p>
                                <p>
                                    Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.
                                </p>
                            </div>

                            <div className="col-sm-6 mb-sm-50 mb-xs-30">

                                <dl className="accordion">
                                    <dt>
                                        <Link
                                            to="#"
                                            className={openIndex === 0 ? 'active' : ''}
                                            onClick={() => handleToggle(0)}>1. Discussion</Link>
                                    </dt>
                                    <dd style={{ display: openIndex === 0 ? 'block' : 'none' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
                                    </dd>
                                    <dt>
                                        <Link
                                            to="#"
                                            className={openIndex === 1 ? 'active' : ''}
                                            onClick={() => handleToggle(1)}>2. Design</Link>
                                    </dt>
                                    <dd style={{ display: openIndex === 1 ? 'block' : 'none' }}>
                                        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                    </dd>
                                    <dt>
                                        <Link
                                            className={openIndex === 2 ? 'active' : ''}
                                            to="#"
                                            onClick={() => handleToggle(2)}>3. Development</Link>
                                    </dt>
                                    <dd style={{ display: openIndex === 2 ? 'block' : 'none' }}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                                    </dd>
                                </dl>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
};

export default Services2;
