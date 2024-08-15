import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Container, Nav, Row, Tab, TabContainer } from 'react-bootstrap'

const TabsPage = () => {
    return (
        <React.Fragment>
            <HeadSection title="Elements" pageTitle='Tabs' />

            {/* standard */}

            <section className="page-section">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Standard Tabs
                    </h2>
                    <Row>
                        <div className="col-sm-8 offset-sm-2">
                            <TabContainer defaultActiveKey="#item-1">
                                <Nav as="ul" className="nav nav-tabs tpl-tabs animate" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link href="#item-1" aria-controls="item-1" data-bs-toggle="tab" role="tab" aria-selected="true">First Tab</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href="#item-2" aria-controls="item-2" data-bs-toggle="tab" role="tab" aria-selected="false">Second Tab</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href="#item-3" aria-controls="item-3" data-bs-toggle="tab" role="tab" aria-selected="false">Third Tab</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tpl-tabs-cont section-text">
                                    <Tab.Pane eventKey="#item-1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, pharetra non congue sit amet, bibendum sit amet enim. a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo. Aliquam tortor leo, pharetra non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#item-2">
                                        Nam porta elementum tortor, eget tempor orci ullamcorper eget. Aliquam fermentum sem non vulputate dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at porttitor massa. Aliquam tortor leo, pharetra non congue sit amet pharetra non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#item-3">
                                        Pellentesque sed vehicula velit, vitae vulputate velit. Morbi nec porta augue, et dignissim enim. Vivamusere suscipit, lorem vitae rhoncus pharetra, erat nisl scelerisque magna, ut mollis dui eros eget libero. Vivamus ut ornare tellus. Aliquam tortor leo, pharetra pharetra non congue sit amet non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>
                                </Tab.Content>
                            </TabContainer>

                        </div>
                    </Row>
                </div>
            </section>

            <hr className="mt-0 mb-0 " />

            {/* minimal */}

            <section className="page-section">
                <Container className="relative">
                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Minimal Tabs
                    </h2>

                    <Row>
                        <Col sm={8} className="offset-sm-2">
                            <TabContainer defaultActiveKey="#mission">
                                <div className="align-center mb-40 mb-xxs-30">
                                    <Nav as="ul" className="nav nav-tabs tpl-minimal-tabs animate" role="tablist">
                                        <Nav.Item as="li">
                                            <Nav.Link href="#mission" aria-controls="mission" role="tab" aria-selected="true">Mission</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link href="#vision" aria-controls="vision" role="tab" aria-selected="false">Vision</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link href="#ideas" aria-controls="ideas" role="tab" aria-selected="false">Ideas</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>

                                <Tab.Content className="section-text align-center">
                                    <Tab.Pane eventKey="#mission">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, pharetra non congue sit amet, bibendum sit amet enim. a hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo. Aliquam tortor leo, pharetra non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#vision">
                                        Nam porta elementum tortor, eget tempor orci ullamcorper eget. Aliquam fermentum sem non vulputate dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at porttitor massa. Aliquam tortor leo, pharetra non congue sit amet pharetra non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#ideas">
                                        Pellentesque sed vehicula velit, vitae vulputate velit. Morbi nec porta augue, et dignissim enim. Vivamus suscipit, lorem vitae rhoncus pharetra, erat nisl scelerisque magna, ut mollis dui eros eget libero. Vivamus ut ornare tellus. Aliquam tortor leo, pharetra pharetra non congue sit amet non congue sit amet, bibendum sit amet enim.
                                    </Tab.Pane>
                                </Tab.Content>
                            </TabContainer>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default TabsPage