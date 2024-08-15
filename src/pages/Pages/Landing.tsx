import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sectionBg from "../../assets/images/full-width-images/section-bg-23.jpg";
import JarallaxSection from '../../Common/JarallaxSection';

//import images
import promo from "../../assets/images/promo-2.png";
import promo3 from "../../assets/images/promo-3.png";
import promo4 from "../../assets/images/promo-4.png";
import fullproject2 from "../../assets/images/portfolio/full-project-2.jpg";
import fullproject4 from "../../assets/images/portfolio/full-project-4.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WhyChoose from '../../Common/AboutUs/WhyChoose';
import Cta from '../../Common/MainDemo/Cta';


const Landing = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-30 parallax-3">
                <div className="relative container align-left">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Landing Page</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Landing Page</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </JarallaxSection>

            <section className="page-section" id="about">
                <Container className="relative">

                    <Row>
                        <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">
                            <div className="section-text align-center">
                                <blockquote>
                                    <p>
                                        Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor.
                                        Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis
                                        lorem vehicula.
                                    </p>
                                </blockquote>

                                <div className="local-scroll">
                                    <Link to="#start" className="btn btn-mod btn-border btn-medium btn-round mb-10">See More</Link>
                                    <span className="d-none d-sm-inline-block">&nbsp;&nbsp;&nbsp;</span>
                                    <Link to="http://themeforest.net/user/theme-guru/portfolio" className="btn btn-mod btn-medium btn-round mb-10">Buy Now</Link>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section" id="start">
                <Container className="relative">

                    <Row>
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 align-center">
                            <h3 className="font-alt mb-70 mb-sm-40">We provide best digital services</h3>
                            <div className="section-text mb-80 mb-xs-40">
                                Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
                            </div>
                        </div>
                    </Row>

                    <div className="alt-service-grid">
                        <Row>
                            <Col sm={6} md={3} lg={3} className="col-sm-6 col-md-3 col-lg-3 pt-60 pt-sm-0">

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-gift"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Branding</h3>
                                        Lorem ipsum dolor sit amet,  elit. Vitae gravida nibh. Morbi dignissim nunc at risus convallis.
                                    </div>
                                </div>

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-desktop"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Web Design</h3>
                                        Vivamus neque orci, ultricies blandit ultricies vel, semper interdum elit, non placerat suscipit.
                                    </div>
                                </div>

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-bug"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Logo Design</h3>
                                        Lorem ipsum dolor sit amet,  elit. Vitae gravida nibh. Morbi dignissim nunc at risus convallis.
                                    </div>
                                </div>

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-heart"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Illustrations</h3>
                                        Semper interdum ultricies elit, non placerat nisi suscipit nunc at risus convallis.
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} lg={6} className="d-none d-sm-none d-md-block">

                                <div className="alt-services-image">
                                    <img src={promo} alt="" />
                                </div>

                            </Col>

                            <Col sm={6} md={3} lg={3} className="pt-60 pt-sm-0">

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-cogs"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Development</h3>
                                        Morbi dignissim nunc at risus convallis. Semper interdum ultricies elit, non placerat nisi suscipit.
                                    </div>
                                </div>

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-camera"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Photography</h3>
                                        Lorem ipsum dolor sit amet,  elit. Vitae gravida nibh. Morbi dignissim nunc at risus convallis.
                                    </div>
                                </div>

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-area-chart"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Marketing</h3>
                                        Neque orci, ultricies blandit ultricies vel, semper interdum ultricies elit, non placerat nisi suscipit.
                                    </div>
                                </div>

                                <div className="alt-service-wrap mb-60 mb-sm-30">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className="fa fa-life-ring"></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">Support</h3>
                                        Lorem ipsum dolor sit amet,  elit. Vitae gravida nibh dignissim nunc risus convallis.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <hr className="mt-0 mb-0" />

            <section className="page-section">
                <Container className="relative">

                    <Row>

                        <Col md={7} className="mb-sm-40">

                            <div className="work-full-media mt-0 white-shadow">
                                <div className="work-full-media mt-0 white-shadow wow fadeInUp">
                                    <Swiper
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={true}
                                        loop={true}
                                        fadeEffect={{
                                            crossFade: true,
                                        }}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper">
                                        <SwiperSlide>
                                            <div className="clearlist work-full-slider owl-carousel">
                                                <img src={promo3} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="clearlist work-full-slider owl-carousel">
                                                <img src={fullproject2} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Col>

                        <Col md={5} lg={4} className="offset-lg-1">

                            <div className="text">

                                <h3 className="font-alt mb-30 mb-xxs-10">Creative Project</h3>

                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>

                                <div className="mt-40">
                                    <Link to="#" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">View online</Link>
                                </div>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col md={5} lg={4} className="mb-sm-40">
                            <div className="text">

                                <h3 className="font-alt mb-30 mb-xxs-10">Creative Project</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>

                                <div className="mt-40">
                                    <Link to="#" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">Buy Now</Link>
                                </div>
                            </div>
                        </Col>

                        <Col md={7} className="offset-lg-1">
                            <div className="work-full-media mt-0 white-shadow wow fadeInUp">
                                <div className="work-full-media mt-0 white-shadow wow fadeInUp">
                                <Swiper
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={true}
                                        loop={true}
                                        fadeEffect={{
                                            crossFade: true,
                                        }}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper">
                                        <SwiperSlide>
                                            <div>
                                                <img src={promo4} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div>
                                                <img src={fullproject4} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <WhyChoose />

            <Cta />
        </React.Fragment >
    );
};

export default Landing;
