import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logotypes from '../../Common/AboutUs/Logotypes';
import OurTeam from '../../Common/AboutUs/OurTeam';
import WhyChoose from '../../Common/AboutUs/WhyChoose';
import Testimonials from '../../Common/MainDemo/Testimonials';

const About2 = () => {
    return (
        <>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 no-transp font-alt mb-20 mb-xs-0">About Us</h1>
                            <div className="hs-line-4 font-alt black">
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
            </section>

            <section className="page-section" id="about">
                <div className="container relative">

                    <div className="section-text mb-60 mb-sm-40">
                        <Row>

                            <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.
                            </div>

                            <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                Etiam sit amet fringilla lacus. Pellentesque suscippiteme ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
                            </div>

                            <div className="col-md-4 col-sm-12 mb-sm-50 mb-xs-30">

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>
                                        <div>Branding, %</div> <span>90</span>
                                    </div>
                                </div>

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>
                                        <div>Design, %</div> <span>80</span>
                                    </div>
                                </div>

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "85%" }}>
                                        <div>Development, %</div> <span>85</span>
                                    </div>
                                </div>

                            </div>

                        </Row>
                    </div>


                    <div className="count-wrapper">
                        <div className="row">

                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    320
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-briefcase"></i>
                                    <span className="count-title">Projects Done</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    150
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-heart"></i>
                                    <span className="count-title">Happy Clients</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    933
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-coffee"></i>
                                    <span className="count-title">Coffee Cups</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="count-number">
                                    975
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-lightbulb-o"></i>
                                    <span className="count-title">Great Ideas</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <Testimonials />

            <Logotypes />

            <hr className="mt-0 mb-0 " />

            <OurTeam />

            <hr className="mt-0 mb-0 " />

            <WhyChoose />

            <section className="small-section bg-dark">
                <Container className="relative">

                    <div className="align-center">
                        <h3 className="banner-heading font-alt">Want to discuss your new project?</h3>
                        <div>
                            <Link to="#" className="btn btn-mod btn-w btn-medium btn-round">Lets talk</Link>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default About2;
