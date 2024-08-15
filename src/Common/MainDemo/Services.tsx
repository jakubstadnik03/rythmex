import React from 'react';
import { Container, Nav, Tab, TabContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <React.Fragment>
            <section className="page-section" id="services">
                <Container className="relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Services
                    </h2>

                    <TabContainer defaultActiveKey="service-branding">
                        <Nav role="tablist" className="nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0">
                            <li role="presentation">
                                <Nav.Link eventKey="service-branding">

                                    <div className="alt-tabs-icon">
                                        <span className="icon-strategy"></span>
                                    </div>

                                    Branding
                                </Nav.Link>
                            </li>
                            <li role="presentation">
                                <Nav.Link eventKey="service-web-design">

                                    <div className="alt-tabs-icon">
                                        <span className="icon-desktop"></span>
                                    </div>

                                    Web Design
                                </Nav.Link>
                            </li>
                            <li role="presentation">
                                <Nav.Link eventKey="service-graphic">

                                    <div className="alt-tabs-icon">
                                        <span className="icon-tools"></span>
                                    </div>

                                    Graphic Design
                                </Nav.Link>
                            </li>
                            <li role="presentation">
                                <Nav.Link eventKey="service-development">

                                    <div className="alt-tabs-icon">
                                        <span className="icon-gears"></span>
                                    </div>

                                    Development
                                </Nav.Link>
                            </li>
                            <li role="presentation">
                                <Nav.Link eventKey="service-photography">

                                    <div className="alt-tabs-icon">
                                        <span className="icon-camera"></span>
                                    </div>

                                    Photography
                                </Nav.Link>
                            </li>
                        </Nav>

                        <Tab.Content className="tpl-tabs-cont">

                            <Tab.Pane role="tabpanel" eventKey="service-branding">

                                <div className="section-text">
                                    <div className="row">
                                        <div className="col-md-4 mb-md-40 mb-xs-30">
                                            <blockquote className="mb-0">
                                                <p>
                                                    A&nbsp;brand for a&nbsp;company is&nbsp;like a&nbsp;reputation
                                                    for a&nbsp;person. You earn reputation by&nbsp;trying to&nbsp;do&nbsp;hard
                                                    things well.
                                                </p>
                                                <footer>
                                                    Jeff Bezos
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum
                                            volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit.
                                            In maximus ligula metus pellentesque mattis.
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus.
                                            Pelenteque suscipit ante at ullamcorper pulvinar neque portor. Integer lectus.
                                            Praesent sed nisi eleifend, fermetum orci amet, iaculis libero.
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>

                            <Tab.Pane role="tabpanel" eventKey="service-web-design">

                                <div className="section-text">
                                    <div className="row">
                                        <div className="col-md-4 mb-md-40 mb-xs-30">
                                            <blockquote className="mb-0">
                                                <p>
                                                    It&nbsp;doesn&rsquo;t matter how many times&nbsp;I have to&nbsp;click, as&nbsp;long
                                                    as&nbsp;each click is&nbsp;a&nbsp;mindless, unambiguous choice.
                                                </p>
                                                <footer>
                                                    Steve Krug
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Cras mi tortor, laoreet id ornare et, accumsan non magna. Maecenas vulputate accumsan velit.
                                            Curabitur a nulla ex. Nam a tincidunt ante. Vitae gravida turpis. Vestibulum varius
                                            nulla non nulla scelerisque tristique.
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Mauris id viverra augue, eu porttitor diam. Praesent faucibus est a interdum elementum.
                                            Nam varius at ipsum id dignissim. Nam a tincidunt ante lorem. Pellentesque suscipit ante
                                            at ullamcorper pulvinar neque porttitor.
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>

                            <Tab.Pane role="tabpanel" eventKey="service-graphic">

                                <div className="section-text">
                                    <div className="row">
                                        <div className="col-md-4 mb-md-40 mb-xs-30">
                                            <blockquote className="mb-0">
                                                <p>
                                                    Never fall in&nbsp;love with an&nbsp;idea. They&rsquo;re whores. If&nbsp;the one you&rsquo;re with isn&rsquo;t doing the job, there&rsquo;s always another.
                                                </p>
                                                <footer>
                                                    Chip Kidd
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque
                                            mattis. Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Praesent sed nisi eleifend,
                                            fermentum orci amet, iaculis libero.
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">

                                            Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Etiam sit amet
                                            fringilla lacus. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id&nbsp;dolor
                                            consectetur fermentum volutpat nibh, accumsan purus.
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>

                            <Tab.Pane role="tabpanel" eventKey="service-development">

                                <div className="section-text">
                                    <div className="row">
                                        <div className="col-md-4 mb-md-40 mb-xs-30">
                                            <blockquote className="mb-0">
                                                <p>
                                                    All that is&nbsp;valuable in&nbsp;human society depends upon the opportunity for development accorded the individual.
                                                </p>
                                                <footer>
                                                    Albert Einstein
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Fusce hendrerit vitae nunc id gravida. Donec euismod quis ante at mattis. Mauris dictum ante sit
                                            amet enim interdum semper. Vestibulum odio justo, faucibus et dictum eu, malesuada nec neque.
                                            Maecenas  volutpat, diam enim sagittis.
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Sed id dolor consectetur fermentum
                                            volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit.
                                            Inmed maximus ligula metus pellentesque.
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>

                            <Tab.Pane role="tabpanel" eventKey="service-photography">

                                <div className="section-text">
                                    <div className="row">
                                        <div className="col-md-4 mb-md-40 mb-xs-30">
                                            <blockquote className="mb-0">
                                                <p>
                                                    Photography is&nbsp;the simplest thing in&nbsp;the world, but it&nbsp;is&nbsp;incredibly
                                                    complicated to&nbsp;make it&nbsp;really work.
                                                </p>
                                                <footer>
                                                    Martin Parr
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus.
                                            Pelenteque suscipit ante at ullamcorper pulvinar neque portor. Integer lectus.
                                            Praesent sed nisi eleifend, fermetum orci amet, iaculis libero.
                                        </div>
                                        <div className="col-md-4 col-sm-6 mb-sm-50 mb-xs-30">
                                            Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum
                                            volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit.
                                            In maximus ligula metus pellentesque mattis.
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>


                        </Tab.Content>

                    </TabContainer>
                    <div className="align-center">
                        <Link to="/pages-services-1" className="section-more font-alt">View all services <i className="fa fa-angle-right"></i></Link>
                    </div>

                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;
