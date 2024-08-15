import React from 'react';
import { Col, Row } from 'react-bootstrap';

//import images
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";
import { Link } from 'react-router-dom';

const  OurTeam = () => {
    return (
        <React.Fragment>
            <section className="page-section">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Our Team
                    </h2>

                    <Row>
                        <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">
                            <div className="section-text align-center mb-70 mb-xs-40">
                                In&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
                                Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
                                consectetur fermentum nibh volutpat, accumsan purus.
                            </div>
                        </Col>
                    </Row>

                    <Row className="multi-columns-row">


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

                        <div className="col-sm-6 col-md-3 col-lg-3 mb-md-30 wow fadeInUp" data-wow-delay="0.1s">
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
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-3 mb-md-30 wow fadeInUp" data-wow-delay="0.2s">
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
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 mb-md-30 wow fadeInUp" data-wow-delay="0.3s">
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
                        </div>
                    </Row>

                </div>
            </section>
        </React.Fragment>
    );
};

export default OurTeam;
