import React from 'react';
import { Col, Container, Nav, Row, Tab, TabContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Testimonials from '../../Common/MainDemo/Testimonials';
import Logotypes from '../../Common/AboutUs/Logotypes';

//import images
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";

const About3 = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-dark-lighter">
                <div className="relative container align-left">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">About Us</h1>
                            <div className="hs-line-4 font-alt">
                                Extraordinary art team &&nbsp;creative minimalism lovers
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>About Us</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>

            <section className="page-section" id="about">
                <div className="container relative">

                    <div className="section-text mb-60 mb-sm-40">
                        <div className="row">

                            <div className="col-sm-6 mb-sm-50 mb-xs-30">

                                <h4 className="mt-0 font-alt">Who we are?</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam.
                                </p>
                                <p>
                                    Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.
                                </p>
                            </div>

                            <div className="col-sm-6 mb-sm-50 mb-xs-30">

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

                                <div className="progress tpl-progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}>
                                        <div>Photo, %</div> <span>75</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="count-wrapper mb-80 mb-sm-60">
                        <div className="row">

                            <Col xs={6} sm={3}>
                                <div className="count-number">
                                    320
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-briefcase"></i>
                                    <span className="count-title">Projects Done</span>
                                </div>
                            </Col>

                            <Col xs={6} sm={3}>
                                <div className="count-number">
                                    150
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-heart"></i>
                                    <span className="count-title">Happy Clients</span>
                                </div>
                            </Col>

                            <Col xs={6} sm={3}>
                                <div className="count-number">
                                    933
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-coffee"></i>
                                    <span className="count-title">Coffee Cups</span>
                                </div>
                            </Col>

                            <Col xs={6} sm={3}>
                                <div className="count-number">
                                    975
                                </div>
                                <div className="count-descr font-alt">
                                    <i className="fa fa-lightbulb-o"></i>
                                    <span className="count-title">Great Ideas</span>
                                </div>
                            </Col>

                        </div>
                    </div>


                    <Row className="multi-columns-row">

                        <Col sm={6} className="col-md-3 col-lg-3 mb-sm-30 wow fadeInUp no-mobile">
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

                        <Col sm={6} className="col-md-3 col-lg-3 mb-md-30 wow fadeInUp no-mobile" data-wow-delay="0.1s">
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

                        <Col sm={6} className="col-md-3 col-lg-3 mb-md-30 wow fadeInUp no-mobile" data-wow-delay="0.2s">
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

                        <Col sm={6} className="col-md-3 col-lg-3 mb-md-30 wow fadeInUp no-mobile" data-wow-delay="0.3s">
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

            <Testimonials />

            <Logotypes />

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <Container className="relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Our Story
                    </h2>
                    <Row>
                        <Col sm={8} className="col-sm-8 offset-sm-2">
                            <TabContainer defaultActiveKey="mission">
                                <div className="align-center mb-40 mb-xxs-30">
                                    <Nav as="ul" className="nav-tabs tpl-minimal-tabs animate" role="tablist">

                                        <Nav.Item as="li">
                                            <Nav.Link href="#mission" eventKey="mission" data-bs-toggle="tab" role="tab">Mission</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item as="li">
                                            <Nav.Link href="#vision" eventKey="vision" data-bs-toggle="tab" role="tab">Vision</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item as="li">
                                            <Nav.Link href="#ideas" eventKey="ideas" data-bs-toggle="tab" role="tab">Ideas</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </div>
                                <Tab.Content className="tab-content section-text align-center">

                                    <Tab.Pane eventKey="mission" id="mission" role="tabpanel">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, pharetra non congue sit amet, bibendum sit amet enim. a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo.
                                        Aliquam tortor leo, pharetra non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="vision" id="vision" role="tabpanel">
                                        Nam porta elementum tortor, eget tempor orci ullamcorper eget. Aliquam fermentum sem non vulputate dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at porttitor massa.
                                        Aliquam tortor leo, pharetra non congue sit amet pharetra non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="ideas" id="ideas" role="tabpanel">
                                        Pellentesque sed vehicula velit, vitae vulputate velit. Morbi nec porta augue, et dignissim enim. Vivamus suscipit, lorem vitae rhoncus pharetra, erat nisl scelerisque magna, ut mollis dui eros eget libero. Vivamus ut ornare tellus.
                                        Aliquam tortor leo, pharetra pharetra non congue sit amet non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>

                                </Tab.Content>
                            </TabContainer>
                        </Col>
                    </Row>
                </Container>
            </section>

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
        </React.Fragment>
    );
};

export default About3;
