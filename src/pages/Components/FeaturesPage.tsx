import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Container, Row } from 'react-bootstrap'
import { benefitsData, featuresData1, featuresData2, servicesData } from '../../Common/data'

const FeaturesPage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Features' />

            <section className="page-section">
                <Container className="relative">
                    <div className="row multi-columns-row alt-features-grid">
                        {featuresData1.map((feature, index) => (
                            <Col key={index} sm={6} md={4} lg={4}>
                                <div className="alt-features-item align-center">
                                    <div className="alt-features-icon">
                                        <span className={feature.icon}></span>
                                    </div>
                                    <h3 className="alt-features-title font-alt">{feature.title}</h3>
                                    <div className="alt-features-descr align-left">{feature.description}</div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">
                    <div className="benefits-grid">
                        {benefitsData.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <div className="benefit-icon">
                                    <i className={benefit.icon}></i>
                                </div>
                                <h3 className="benefit-title font-alt">{benefit.title}</h3>
                                <div className="benefits-descr">{benefit.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">
                    <div className="alt-service-grid">
                        <div className="row multi-columns-row">
                            {servicesData.map((service, index) => (
                                <div key={index} className="col-sm-6 col-md-3 col-lg-3">
                                    <div className="alt-service-item">
                                        <div className="alt-service-icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <h3 className="alt-services-title font-alt">{service.title}</h3>
                                        {service.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <Container className="relative">
                    <Row className="alt-features-grid">
                        {featuresData2.map((feature, index) => (
                            <Col key={index} md={3}>
                                {feature.description ? (
                                    <div className="alt-features-item align-center">
                                        <div className="alt-features-descr align-left">
                                            <h4 className="mt-0 font-alt">{feature.title}</h4>
                                            {feature.description}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="alt-features-item align-center">
                                        <div className="alt-features-icon">
                                            <span className={feature.icon}></span>
                                        </div>
                                        <h3 className="alt-features-title font-alt">{feature.title}</h3>
                                    </div>
                                )}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default FeaturesPage