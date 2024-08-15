import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Newsletter = () => {
  return (
    <React.Fragment>
        <section className="small-section bg-gray-lighter">
                <Container className="relative">

                    <form className="form align-center" id="mailchimp">
                        <Row>
                            <Col lg={10} xl={8} className="offset-lg-1 offset-xl-2">

                                <div className="newsletter-label font-alt">
                                    Stay informed with our newsletter
                                </div>

                                <div className="mb-20">
                                    <input placeholder="Enter Your Email" className="newsletter-field form-control input-md round mb-xs-10" type="email" pattern=".{5,100}" required aria-required="true" />
                                    &nbsp;
                                    <button type="submit" aria-controls="subscribe-result" className="btn btn-mod btn-medium btn-round mb-xs-10">
                                        Subscribe
                                    </button>
                                </div>

                                <div className="form-tip">
                                    <i className="fa fa-info-circle"></i> Please trust us, we will never send you spam
                                </div>

                                <div id="subscribe-result" role="region" aria-live="polite" aria-atomic="true"></div>

                            </Col>
                        </Row>
                    </form>

                </Container>
            </section>
    </React.Fragment>
  )
}

export default Newsletter