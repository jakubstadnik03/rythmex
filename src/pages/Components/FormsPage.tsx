import React from 'react'
import HeadSection from '../../Common/HeadSection'
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap'

const FormsPage = () => {
    return (
        <React.Fragment>

            <HeadSection title="Elements" pageTitle='Forms' />

            <section className="page-section">
                <Container className="relative">
                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Different Types
                    </h2>
                    <Row>
                        <Col sm={4} className="mb-40">
                            <Form id="form" method='post'>
                                <div className="mb-20 mb-md-10">
                                    <FormControl type="text" id="name" placeholder="Name" />
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <FormControl type="email" id="email" placeholder="Email" />
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <FormControl type="password" id="password" placeholder="Password" />
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <textarea name="text" id="text" className="input-md form-control" rows={8} placeholder="Text" maxLength={400}></textarea>
                                </div>
                            </Form>
                        </Col>
                        <Col sm={4} className="mb-40">
                            <Form id="form-1" method='post'>
                                <div className="mb-20 mb-md-10">
                                    <select className="input-md form-control">
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <select multiple className="form-control">
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                        <option>Four</option>
                                        <option>Five</option>
                                    </select>
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <FormControl type="date" id="date" className="input-md form-control" />
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <input type="color" id="color" className="input-md form-control" />
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <FormControl type="number" id="number" placeholder="0" max="100" className="input-md form-control" />
                                </div>
                            </Form>
                        </Col>
                        <Col sm={4} className="mb-40">
                            <Form id="form-2">
                                <div className="mb-20 mb-md-10">
                                    <FormControl type="text" id="disabledInput" placeholder="Disabled input here..." disabled />
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <label htmlFor="exampleInputFile">
                                        File input
                                    </label>
                                    <input type="file" id="exampleInputFile" className='ms-1' />
                                    <p className="help-block">
                                        Example block-level help text here.
                                    </p>
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox1" value="option1" />1
                                    </label>&nbsp;
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox2" value="option2" />2
                                    </label>&nbsp;
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="inlineCheckbox3" value="option3" />3
                                    </label>&nbsp;
                                </div>
                                <div className="mb-20 mb-md-10">
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />1
                                    </label>&nbsp;
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />2
                                    </label>&nbsp;
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />3
                                    </label>&nbsp;
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="mt-0 mb-0 " />

            <section className="page-section">
                <div className="container relative">

                    <h2 className="section-title font-alt mb-70 mb-sm-40">
                        Different Sizes
                    </h2>

                    <div className="row">

                        <div className="col-sm-4 mb-40">

                            <form method="post" action="#" id="form-3" className="form">

                                <div className="mb-20 mb-md-10">
                                    <input type="text" name="name" id="name-1" className="form-control input-sm" placeholder="Name" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <input type="email" name="email" id="email-1" className="form-control input-sm" placeholder="Email" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <input type="password" name="password" id="password-1" className="form-control input-sm" placeholder="Password" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <select className="form-control input-sm">
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>

                            </form>
                        </div>

                        <div className="col-sm-4 mb-40">

                            <form method="post" action="#" id="form-4" className="form">

                                <div className="mb-20 mb-md-10">
                                    <input type="text" name="name" id="name-2" className="input-md form-control" placeholder="Name" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <input type="email" name="email" id="email-2" className="input-md form-control" placeholder="Email" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <input type="password" name="password" id="password-3" className="input-md form-control" placeholder="Password" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <select className="input-md form-control">
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>

                            </form>
                        </div>

                        <div className="col-sm-4 mb-40">

                            <form method="post" action="#" id="form-5" className="form">

                                <div className="mb-20 mb-md-10">
                                    <input type="text" name="name" id="name-4" className="form-control input-lg" placeholder="Name" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <input type="email" name="email" id="email-4" className="form-control input-lg" placeholder="Email" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <input type="password" name="password" id="password-4" className="form-control input-lg" placeholder="Password" maxLength={100} />
                                </div>

                                <div className="mb-20 mb-md-10">
                                    <select className="form-control input-lg">
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default FormsPage