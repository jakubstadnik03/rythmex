import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Faq2 = () => {
    return (
        <React.Fragment>
            <section className="small-section bg-dark-lighter">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">FAQ</h1>
                            <div className="hs-line-4 font-alt">
                                Frequently Asked Questions
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Pages</Link>&nbsp;/&nbsp;<span>FAQ</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="page-section">
                    <Container className="relative">
                        
                        <Row className="mb-80 mb-xs-40">
                            <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">
                                <div className="section-text align-center">
                                    
                                    <form className="form-inline form mb-20">
                                        <div className="search-wrap">                                            
                                            <input type="text" className="form-control search-field" placeholder="Search..." />
                                            <button className="search-button animate" type="submit" title="Start Search">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                    
                                     Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id&nbsp;gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus. 
                                </div>
                            </Col>
                        </Row>
                        
                        <Row className="row section-text">
                            <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">
                                
                                <hr className="mb-30"/>
                                
                                <h4 className="font-alt">What do you mean by an End Product?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus. 
                                </p>
                                
                                <hr className="mb-30"/>
                                
                                <h4 className="font-alt">I have bought a product that has files missing, what do I do?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus. 
                                </p>
                                
                                <hr className="mb-30"/>
                                
                                <h4 className="font-alt">Do I need to buy a licence for each site?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus. 
                                </p>
                                
                                <hr className="mb-30"/>
                                
                                <h4 className="font-alt">Is my license transferable?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus. 
                                </p>
                                
                                <hr className="mb-30"/>
                                
                                <h4 className="font-alt">Can I incorporate advertising in my end product with a regular licence?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus. 
                                </p>
                                
                                
                            </Col>
                        </Row>
                        
                    </Container>
                </section>
                <section className="small-section bg-dark-lighter">
                    <Container className="relative">
                        
                        <div className="align-center">
                            <h3 className="banner-heading font-alt">Did not find the right answer?</h3>
                            <div>
                                <Link to="#" className="btn btn-mod btn-w btn-medium btn-round">Contact Us</Link>
                            </div>
                        </div>
                        
                    </Container>
                </section>
        </React.Fragment>
    );
};

export default Faq2;
