import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import promo3 from "../../assets/images/promo-3.png";
import promo4 from "../../assets/images/promo-4.png";
import fullProject2 from "../../assets/images/portfolio/full-project-2.jpg";
import fullProject4 from "../../assets/images/portfolio/full-project-4.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AwsomeTemplete = () => {
    return (
        <React.Fragment>
            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col md={7} className="offset-lg-0">
                            <div className="work-full-media mt-0 white-shadow wow fadeInUp">
                                <div className="work-full-media mt-0 white-shadow wow fadeInUp">
                                    <Swiper
                                        pagination={true}
                                        navigation={true}
                                        fadeEffect={{
                                            crossFade: true,
                                        }}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper special-fashion-testimonial">
                                        <SwiperSlide>
                                            <div>
                                                <img src={promo3} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div>
                                                <img src={fullProject2} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                        <Col md={5} lg={4} className="offset-lg-1">
                            <div className="text">
                                <h3 className="font-alt mb-30 mb-xxs-10">Awesome Template</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>
                                <div className="mt-40">
                                    <Link to="http://themeforest.net/user/theme-guru/portfolio" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">Buy Now</Link>
                                </div>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 mb-sm-40">
                            <div className="text">

                                <h3 className="font-alt mb-30 mb-xxs-10">Clear Design</h3>
                                <p>
                                    Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor ut elementum venenatis, purus magna bibendum nisl, ut accumsan ipsum erat eu sapien.
                                </p>

                                <div className="mt-40">
                                    <a href="http://themeforest.net/user/theme-guru/portfolio" className="btn btn-mod btn-border btn-round btn-medium" target="_blank">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <Col md={7} className="offset-lg-1">
                            <div className="work-full-media mt-0 white-shadow wow fadeInUp">
                                    <Swiper
                                        pagination={true}
                                        navigation={true}
                                        fadeEffect={{
                                            crossFade: true,
                                        }}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper special-fashion-testimonial">
                                        <SwiperSlide>
                                            <div>
                                                <img src={promo4} alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div>
                                                <img src={fullProject4} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                        </Col>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AwsomeTemplete;
