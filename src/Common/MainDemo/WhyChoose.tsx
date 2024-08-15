import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhyChoose = () => {
  return (
    <React.Fragment>
      <section className="page-section">
        <Container className="relative">
          <h2 className="section-title font-alt mb-70 mb-sm-40">
            Proč si vybrat nás?
          </h2>

          <Row className="multi-columns-row alt-features-grid">
            <Col sm={6} md={4} lg={4}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-flag"></span>
                </div>
                <h3 className="alt-features-title font-alt">
                  Kreativní přístup
                </h3>
                <div className="alt-features-descr align-left">
                  Organizujeme akce, které jsou originální a plné nápadů. Ať už
                  se jedná o svatbu, ples, nebo firemní event, naše kreativita
                  zajistí, že každá událost bude jedinečná.
                </div>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-clock"></span>
                </div>
                <h3 className="alt-features-title font-alt">
                  Spolehlivost a přesnost
                </h3>
                <div className="alt-features-descr align-left">
                  Naše zkušenosti a profesionální přístup zaručují, že vaše akce
                  proběhne hladce a podle plánu. Dbáme na každý detail a vždy
                  dodržujeme stanovené termíny.
                </div>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-hotairballoon"></span>
                </div>
                <h3 className="alt-features-title font-alt">
                  Skvělá atmosféra
                </h3>
                <div className="alt-features-descr align-left">
                  Vytváříme nezapomenutelnou atmosféru, která vaše hosty
                  nadchne. Naši DJové a moderátoři se postarají o to, aby se
                  každý bavil a cítil se dobře.
                </div>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-heart"></span>
                </div>
                <h3 className="alt-features-title font-alt">
                  Individuální přístup
                </h3>
                <div className="alt-features-descr align-left">
                  Ke každé akci přistupujeme individuálně a na míru vašim
                  představám. Nasloucháme vašim přáním a děláme vše pro to, aby
                  byla vaše událost přesně taková, jakou si ji přejete.
                </div>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-linegraph"></span>
                </div>
                <h3 className="alt-features-title font-alt">Odpovědnost</h3>
                <div className="alt-features-descr align-left">
                  Jsme odpovědní za každý detail vaší akce. Zajišťujeme, aby vše
                  proběhlo bez problémů, a vy jste si mohli užít svůj den bez
                  starostí.
                </div>
              </div>
            </Col>

            <Col sm={6} md={4} lg={4}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-chat"></span>
                </div>
                <h3 className="alt-features-title font-alt">Přátelský tým</h3>
                <div className="alt-features-descr align-left">
                  Naše práce nás baví a je to znát. Jsme tým lidí, kteří se rádi
                  podělí o své zkušenosti a postarají se o to, aby vaše akce
                  byla nezapomenutelná a plná pozitivní energie.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default WhyChoose;
