import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import HeadSection from '../../Common/HeadSection'

const Barspage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Bars' />

            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col lg={10} xl={{ span: 8, offset: 2 }}>
                            {/* Bar Item 1 */}
                            <div className="progress tpl-progress">
                                <div className="progress-bar" role="progressbar" style={{width: "90%"}}>
                                    <div>Branding, %</div> <span>90</span>
                                </div>
                            </div>
                            {/* End Bar Item 1 */}

                            {/* Bar Item 2 */}
                            <div className="progress tpl-progress">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}}>
                                    <div>Design, %</div> <span>80</span>
                                </div>
                            </div>
                            {/* End Bar Item 2 */}

                            {/* Bar Item 3 */}
                            <div className="progress tpl-progress">
                                <div className="progress-bar" role="progressbar" style={{width: "85%"}}>
                                    <div>Development, %</div> <span>85</span>
                                </div>
                            </div>
                            {/* End Bar Item 3 */}

                            {/* Bar Item 4 */}
                            <div className="progress tpl-progress">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}}>
                                    <div>Photography, %</div> <span>75</span>
                                </div>
                            </div>
                            {/* End Bar Item 4 */}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Divider */}
            <hr className="mt-0 mb-0 " />
            {/* End Divider */}

            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
                            {/* Bar Item 1 */}
                            <ProgressBar now={80} className='tpl-progress-alt' label="Branding, 80%" />
                            {/* End Bar Item 1 */}

                            {/* Bar Item 2 */}
                            <ProgressBar now={85} className='tpl-progress-alt' label={`Design, 85%`} />
                            {/* End Bar Item 2 */}

                            {/* Bar Item 3 */}
                            <ProgressBar now={75} className='tpl-progress-alt' label={`Development, 75%`} />
                            {/* End Bar Item 3 */}

                            {/* Bar Item 4 */}
                            <ProgressBar now={70} className='tpl-progress-alt' label={`Photography, 70%`} />
                            {/* End Bar Item 4 */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Barspage