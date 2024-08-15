import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import projects13 from "../../assets/images/portfolio/projects-13.jpg";
import projects14 from "../../assets/images/portfolio/projects-14.jpg";
import projects6 from "../../assets/images/portfolio/projects-6.jpg";

const LatestWork = () => {
    return (
        <React.Fragment>
            <section className="page-section pb-0" id="portfolio">
                <div className="relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Latest Works
                    </h2>

                    <Container>
                        <Row>
                            <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">

                                <div className="section-text align-center mb-70 mb-xs-40">
                                    Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
                                </div>

                            </Col>
                        </Row>
                    </Container>

                    <ul className="works-grid work-grid-3 work-grid-gut clearfix font-alt hover-white hide-titles" id="work-grid">

                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={projects13} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Man</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={projects14} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Woman</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li className="work-item">
                            <Link to="/portfolio-single-1" className="work-ext-link">
                                <div className="work-img">
                                    <img className="work-img" src={projects6} alt="Work" />
                                </div>
                                <div className="work-intro">
                                    <h3 className="work-title">Man with bag</h3>
                                    <div className="work-descr">
                                        External Page
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="small-section bg-dark">
                <div className="container relative">

                    <div className="align-center">
                        <h3 className="banner-heading font-alt">Want to see more works?</h3>
                        <div className="local-scroll">
                            <Link to="/portfolio-wide-gutter-3col" className="btn btn-mod btn-w btn-medium btn-round">Lets view portfolio</Link>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
};

export default LatestWork;
