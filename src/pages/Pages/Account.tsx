import React from 'react';
import { Col, Nav, Row, Tab, TabContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-dark-lighter">
                <div className="relative container align-left">

                    <Row>

                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">My Account</h1>
                            <div className="hs-line-4 font-alt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>My Account</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>


            <section className="page-section">
                <div className="container relative">
                    <TabContainer defaultActiveKey="mini-one">
                        <div className="align-center mb-40 mb-xxs-30">
                            <Nav as="ul" role="tablist" className="nav-tabs tpl-minimal-tabs">

                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link href="#mini-one" eventKey="mini-one">Login</Nav.Link>
                                </Nav.Item>

                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link href="#mini-two" eventKey="mini-two">Registration</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </div>

                        <Tab.Content className="section-text">

                            <Tab.Pane eventKey="mini-one">

                                <div className="row">
                                    <div className="col-md-4 offset-md-4">

                                        <form className="form contact-form">
                                            <div className="clearfix">

                                                <div className="form-group">
                                                    <input type="text" name="username" id="username" className="input-md round form-control" placeholder="Username" pattern=".{3,100}" required aria-required="true" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="password" id="password" className="input-md round form-control" placeholder="Password" pattern=".{5,100}" required aria-required="true" />
                                                </div>

                                            </div>

                                            <div className="clearfix">

                                                <div className="cf-left-col">

                                                    <div className="form-tip pt-20">
                                                        <Link to="">Forgot Password?</Link>
                                                    </div>

                                                </div>

                                                <div className="cf-right-col">

                                                    <div className="align-right pt-10">
                                                        <button className="submit_btn btn btn-mod btn-medium btn-round" id="login-btn">Login</button>
                                                    </div>

                                                </div>

                                            </div>

                                        </form>

                                    </div>
                                </div>

                            </Tab.Pane>

                            <Tab.Pane eventKey="mini-two">

                                <Row>
                                    <Col md={4} className="offset-md-4">

                                        <form className="form contact-form">
                                            <div className="clearfix">

                                                <div className="form-group">
                                                    <input type="text" name="Email" id="Email" className="input-md round form-control" placeholder="Email" pattern=".{3,100}" required aria-required="true" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" name="username" id="username" className="input-md round form-control" placeholder="Username" pattern=".{3,100}" required aria-required="true" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="password" id="password" className="input-md round form-control" placeholder="Password" pattern=".{5,100}" required aria-required="true" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="re-password" id="re-password" className="input-md round form-control" placeholder="Re-enter Password" pattern=".{5,100}" required aria-required="true" />
                                                </div>

                                            </div>

                                            <div className="pt-10">
                                                <button className="submit_btn btn btn-mod btn-medium btn-round btn-full" id="reg-btn">Register</button>
                                            </div>

                                        </form>

                                    </Col>
                                </Row>

                            </Tab.Pane>

                        </Tab.Content>
                    </TabContainer>

                </div>
            </section>
        </React.Fragment>
    );
};

export default Account;
