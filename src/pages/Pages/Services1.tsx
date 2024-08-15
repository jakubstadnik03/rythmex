import React from 'react';
import { Col, Row } from 'react-bootstrap';
import sectionBg from "../../assets/images/full-width-images/section-bg-21.jpg";
import JarallaxSection from '../../Common/JarallaxSection';
import Services from '../../Common/MainDemo/Services';
import Cta from '../../Common/MainDemo/Cta';
import WhyChoose from '../../Common/AboutUs/WhyChoose';

const Services1 = () => {
    return (
        <React.Fragment>
            <JarallaxSection
                backgroundImage={sectionBg}
                className="page-section bg-dark-alfa-30 parallax-3">
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
                                <a href="#">Home</a>&nbsp;/&nbsp;<a href="#">Pages</a>&nbsp;/&nbsp;<span>Services</span>
                            </div>

                        </Col>
                    </Row>
                </div>
            </JarallaxSection>

            <Services />

            <Cta />

            <WhyChoose />
        </React.Fragment>
    );
};

export default Services1;
