import React from 'react';
import sectionBg from "../../assets/images/full-width-images/section-bg-10.jpg";
import JarallaxSection from '../../Common/JarallaxSection';
import About from '../../Common/AboutUs/About';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Testimonials from '../../Common/MainDemo/Testimonials';
import Logotypes from '../../Common/AboutUs/Logotypes';
import WhyChoose from '../../Common/AboutUs/WhyChoose';

const AboutUs1 = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-50 parallax-3">
                <div className="relative container align-left ">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">About Us</h1>
                            <div className="hs-line-4 font-alt">
                                Extraordinary art team &&nbsp;creative minimalism lovers
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<a href="#">Pages</a>&nbsp;/&nbsp;<span>About Us</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </JarallaxSection>

            <About />

            <Testimonials />

            <Logotypes />

            <hr className="mt-0 mb-0 " />

            <WhyChoose />
        </React.Fragment>
    );
};

export default AboutUs1;
