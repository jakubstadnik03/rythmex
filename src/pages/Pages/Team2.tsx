import React from 'react';
// import sectionBg from "../../assets/images/full-width-images/section-bg-5.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhyChoose from '../../Common/AboutUs/WhyChoose';

//import images
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";

const Team2 = () => {
    return (
        <React.Fragment>
            <section
                // style={{ backgroundImage: `url(${sectionBg})` }}
                className="small-section bg-gray-lighter">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Team</h1>
                            <div className="hs-line-4 font-alt black">
                                Extraordinary art team &&nbsp;creative minimalism lovers
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>Team</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            <section className="page-section" id="about">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Our Creative Minds
                    </h2>


                    <Row>
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <div className="section-text align-center mb-70 mb-xs-40">
                                Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
                            </div>
                        </div>
                    </Row>


                    <Row className='multi-columns-row'>

                        <Col sm={6} md={3} lg={3} className="mb-sm-30 wow fadeInUp">
                            <div className="team-item">

                                <div className="team-item-image">

                                    <img src={team1} alt="" />

                                    <div className="team-item-detail">

                                        <h4 className="font-alt normal">Hello & Welcome!</h4>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&nbsp;iaculis diam.
                                        </p>

                                        <div className="team-social-links">
                                            <Link to="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="team-item-descr font-alt">

                                    <div className="team-item-name">
                                        Thomas Rhythm
                                    </div>

                                    <div className="team-item-role">
                                        Art Director
                                    </div>

                                </div>

                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-sm-30 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">

                                <div className="team-item-image">

                                    <img src={team2} alt="" />

                                    <div className="team-item-detail">

                                        <h4 className="font-alt normal">Nice to meet!</h4>

                                        <p>
                                            Curabitur augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.
                                        </p>

                                        <div className="team-social-links">
                                            <Link to="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="team-item-descr font-alt">

                                    <div className="team-item-name">
                                        Marta Laning
                                    </div>

                                    <div className="team-item-role">
                                        Web engineer
                                    </div>

                                </div>

                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-sm-30 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">

                                <div className="team-item-image">

                                    <img src={team3} alt="" />

                                    <div className="team-item-detail">

                                        <h4 className="font-alt normal">Whats Up!</h4>

                                        <p>
                                            Adipiscing elit curabitur eu&nbsp;adipiscing lacus eu&nbsp;adipiscing lacus, a&nbsp;iaculis diam.
                                        </p>

                                        <div className="team-social-links">
                                            <Link to="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="team-item-descr font-alt">

                                    <div className="team-item-name">
                                        Steve ANDERS
                                    </div>

                                    <div className="team-item-role">
                                        Developer
                                    </div>

                                </div>

                            </div>
                        </Col>

                        <Col sm={6} md={3} lg={3} className="mb-sm-30 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">

                                <div className="team-item-image">

                                    <img src={team4} alt="" />

                                    <div className="team-item-detail">

                                        <h4 className="font-alt normal">Hi to all!</h4>

                                        <p>
                                            Adipiscing elit curabitur eu&nbsp;adipiscing lacus eu&nbsp;adipiscing lacus, a&nbsp;iaculis diam.
                                        </p>

                                        <div className="team-social-links">
                                            <Link to="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></Link>
                                            <Link to="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="team-item-descr font-alt">

                                    <div className="team-item-name">
                                        Emma Connor
                                    </div>

                                    <div className="team-item-role">
                                        Creative Director
                                    </div>

                                </div>

                            </div>
                        </Col>

                    </Row>

                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <WhyChoose />

            <section className="small-section bg-dark">
                <Container className="relative">

                    <div className="align-center">
                        <h3 className="banner-heading font-alt">Want to work with us?</h3>
                        <div>
                            <Link to="#" className="btn btn-mod btn-w btn-medium btn-round">Join Now</Link>
                        </div>
                    </div>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default Team2;
