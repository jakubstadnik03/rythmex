import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainSide from './MainSide'

const SingleFullwidth = () => {
  return (
    <React.Fragment>
         <section className="small-section bg-gray-lighter">
                <div className="relative container align-left">
                    <Row>
                        <Col md={8}>
                            <h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Blog</h1>
                            <div className="hs-line-4 font-alt black">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                        </Col>

                        <Col md={4} className="mt-30">
                            <div className="mod-breadcrumbs font-alt align-right">
                                <Link to="#">Home</Link>&nbsp;/&nbsp;<Link to="#">Blog</Link>&nbsp;/&nbsp;<span>Single</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="page-section">
                <Container className="relative">
                    <Row>
                        <Col sm={10} className='offset-sm-1'>
                            <MainSide />
                        </Col>
                    </Row>
                </Container>
            </section>
    </React.Fragment>
  )
}

export default SingleFullwidth