import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="page-section" id="contact">
        <div className="container relative">
          <h2 className="section-title font-alt mb-70 mb-sm-40">Kontakt</h2>

          <Row className="mb-60 mb-xs-40">
            <Col lg={10} className="offset-lg-1 col-xl-8 offset-xl-2">
              <Row>
                {/* Telefon Adam */}
                <Col sm={6} lg={4} className="pt-20 pb-20 pb-xs-0">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="ci-title font-alt">Zavolejte Adamovi</div>
                    <div className="ci-text">
                      <a href="tel:727959414">727 959 414</a>
                    </div>
                  </div>
                </Col>

                {/* Telefon Deniz */}
                <Col sm={6} lg={4} className="pt-20 pb-20 pb-xs-0">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="ci-title font-alt">Zavolejte Denizovi</div>
                    <div className="ci-text">
                      <a href="tel:607398335">607 398 335</a>
                    </div>
                  </div>
                </Col>

                {/* Email */}
                <Col sm={6} lg={4} className="pt-20 pb-20 pb-xs-0">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="ci-title font-alt">Napište nám</div>
                    <div className="ci-text">
                      <a href="mailto:adam.visnovsky@rvthmex.cz">
                        adam.visnovsky@rvthmex.cz
                      </a>
                      <br />
                      <a href="mailto:deniz.kavalibav@rvthmex.cz">
                        deniz.kavalibav@rvthmex.cz
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="offset-lg-1 col-xl-8 offset-xl-2">
              <form className="form contact-form" id="contact_form">
                <div className="clearfix">
                  <div className="cf-left-col">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-md round form-control"
                        placeholder="Jméno"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-md round form-control"
                        placeholder="Email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="cf-right-col">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="input-md round form-control"
                        style={{ height: "88px" }}
                        placeholder="Zpráva"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="clearfix">
                  <div className="cf-left-col">
                    <div className="form-tip pt-20">
                      <i className="fa fa-info-circle"></i> Všechna pole jsou
                      povinná
                    </div>
                  </div>

                  <div className="cf-right-col">
                    <div className="align-right pt-10">
                      <button
                        className="submit_btn btn btn-mod btn-medium btn-round"
                        id="submit_btn"
                        aria-controls="result"
                      >
                        Odeslat zprávu
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                ></div>
              </form>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
