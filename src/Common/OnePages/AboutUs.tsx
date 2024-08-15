import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import team1 from "../../assets/img/adam.jpg";
import team2 from "../../assets/img/deniz.jpg";

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="page-section" id="about">
        <div className="container relative">
          <h2 className="section-title font-alt align-left mb-70 mb-sm-40">
            O nás
          </h2>

          <div className="section-text mb-50 mb-sm-20">
            <Row>
              <Col md={4}>
                <blockquote>
                  <p>
                    „Od dětství jsme věděli, že naše budoucnost bude spojena se
                    zábavou a hudbou. Rythmex je výsledkem letitého přátelství a
                    společné vášně pro organizování nezapomenutelných akcí.“
                  </p>
                  <footer>Adam a Deniz</footer>
                </blockquote>
              </Col>
              <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                Jsme dva přátelé, kteří se znají od dětství a spojili své síly,
                aby vytvořili Rythmex. Organizujeme a moderujeme maturitní
                plesy, svatby, koncerty a různé další akce. Naším cílem je
                zajistit, aby každá akce, kterou pořádáme, byla nezapomenutelná
                a plná zábavy.
              </Col>

              <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                S Rythmexem se můžete spolehnout na profesionální moderování a
                DJing, který roztančí každého hosta. S naší zkušeností a
                odhodláním se postaráme o to, aby vaše akce byla přesně taková,
                jakou si ji představujete – plná života, radosti a skvělé hudby.
              </Col>
            </Row>
          </div>

          <Row>
            <Col sm={6} className="mb-xs-30 wow fadeInUp no-mobile">
              <div className="team-item">
                <div className="team-item-image">
                  <img src={team1} alt="Adam" />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Adam Višňovský</h4>
                    <p>
                      Adam je hlavním moderátorem a DJem v Rythmexu. Jeho
                      energie a charisma zaručí, že každá akce bude úspěšná.
                    </p>
                    <div className="team-social-links">
                      <Link
                        to="https://www.facebook.com/adam.visnovsky.94?locale=cs_CZ"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                        <span className="sr-only">Facebook profil</span>
                      </Link>
                      <Link
                        to="https://www.instagram.com/adam_visnovsky/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                        <span className="sr-only">Instagram profil</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              sm={6}
              className="mb-xs-30 wow fadeInUp no-mobile"
              data-wow-delay="0.1s"
            >
              <div className="team-item" style={{ height: "100%" }}>
                <div className="team-item-image" style={{ height: "100%" }}>
                  <img
                    src={team2}
                    alt="Deniz"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Deniz Kayalibay</h4>
                    <p>
                      Deniz je odborníkem na organizaci a produkci akcí. Jeho
                      smysl pro detail a láska k hudbě se promítá do každého
                      projektu.
                    </p>
                    <div className="team-social-links">
                      <Link to="#" target="_blank">
                        <i className="fa fa-facebook"></i>
                        <span className="sr-only">Facebook profil</span>
                      </Link>
                      <Link
                        to="https://www.instagram.com/deniz_kayalibay/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                        <span className="sr-only">Instagram profil</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
