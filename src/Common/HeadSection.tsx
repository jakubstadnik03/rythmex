import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface breadProps {
    title: string,
    pageTitle: string,
}

const HeadSection = ({title , pageTitle}: breadProps) => {
    return (
        <React.Fragment>
            <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">

                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">{pageTitle}</h1>
                            <div className="hs-line-4 font-alt black">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">{title}</Link>&nbsp;/&nbsp;<span>{pageTitle}</span>
                            </div>

                        </Col>
                    </Row>

                </div>
            </section>
        </React.Fragment>
    )
}

export default HeadSection