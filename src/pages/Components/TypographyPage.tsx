import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Container, Row } from 'react-bootstrap'

const TypographyPage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Typography' />

            {/* formating */}
            <section className="page-section">
                <Container className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Formating
                    </h2>
                    <Row>
                        <Col sm={6} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase mb-30">Paragraph</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit leo tristique vitae.
                                    Consectetur adipiscing elit. Integer posuere erat a ante. Mauris non ipsum molestie, sagittis elit ac, vulputate odio.
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} className="mb-40">
                            <blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                                </p>

                                <footer>
                                    Someone famous in
                                    <cite title="Source Title">
                                        Source Title
                                    </cite>
                                </footer>

                            </blockquote>
                        </Col>
                    </Row>

                    <hr className="mb-60 mb-xs-30" />

                    <Row>
                        <Col sm={4} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase mb-30">List UL</h5>
                                <ul>
                                    <li>First item</li>
                                    <li>Second item</li>
                                    <li>
                                        Third item
                                        <ul>
                                            <li>First item</li>
                                            <li>Second item</li>
                                            <li>Third item</li>
                                        </ul>
                                    </li>
                                    <li>Fourth item</li>
                                    <li>Fives item</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={4} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase mb-30">List OL</h5>
                                <ol>
                                    <li>First item</li>
                                    <li>Second item</li>
                                    <li>
                                        Third item
                                        <ol>
                                            <li>First item</li>
                                            <li>Second item</li>
                                            <li>Third item</li>
                                        </ol>
                                    </li>
                                    <li>Fourth item</li>
                                    <li>Fives item</li>
                                </ol>
                            </div>
                        </Col>
                        <Col sm={4} className="mb-40">
                            <div className="text">
                                <h5 className="uppercase mb-30">Emphasis</h5>

                                <p>
                                    <small>
                                        This line of text is meant to be treated as fine print.
                                    </small>
                                </p>

                                <p>
                                    <strong>Rendered as bold text</strong>
                                </p>

                                <p>
                                    <em>Rendered as italicized text</em>
                                </p>

                                <p>
                                    <span className="serif">Rendered as italicized text</span>
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            {/* Heading */}
            <section className="page-section">
                <Container className="relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Headings
                    </h2>
                    <Row>
                        <Col sm={4} className="mb-40 align-center">

                            <h1>Heading 1</h1>
                            <h2>Heading 2</h2>
                            <h3>Heading 3</h3>
                            <h4>Heading 4</h4>
                            <h5>Heading 5</h5>
                            <h6>Heading 6</h6>

                        </Col>
                        <Col sm={4} className="mb-40 align-center">

                            <h1 className="uppercase">Heading 1</h1>
                            <h2 className="uppercase">Heading 2</h2>
                            <h3 className="uppercase">Heading 3</h3>
                            <h4 className="uppercase">Heading 4</h4>
                            <h5 className="uppercase">Heading 5</h5>
                            <h6 className="uppercase">Heading 6</h6>

                        </Col>
                        <Col sm={4} className="mb-40 align-center">

                            <h1 className="font-alt">Heading 1</h1>
                            <h2 className="font-alt">Heading 2</h2>
                            <h3 className="font-alt">Heading 3</h3>
                            <h4 className="font-alt">Heading 4</h4>
                            <h5 className="font-alt">Heading 5</h5>
                            <h6 className="font-alt">Heading 6</h6>

                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}

export default TypographyPage