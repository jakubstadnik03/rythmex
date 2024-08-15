import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxSection from "../../Common/JarallaxSection";

//import images
import promo from "../../assets/img/spolecna-foto.jpg";
import sectionBg from "../../assets/images/full-width-images/section-bg-2.jpg";

const Cta = () => {
  return (
    <React.Fragment>
      <JarallaxSection
        backgroundImage={sectionBg}
        className="page-section pt-0 pb-0 banner-section bg-dark"
      >
        <Container className="relative">
          <Row>
            <Col sm={6}>
              <div className="mt-140 mt-lg-80 mb-140 mb-lg-80">
                <div className="banner-content">
                  <h3 className="banner-heading font-alt">
                    Hledáte profesionální moderátory a DJ pro vaši akci?
                  </h3>
                  <div className="banner-decription">
                    Rythmex vám nabízí kompletní služby pro maturitní plesy,
                    svatby, firemní eventy a další akce. Naše zkušenosti a vášeň
                    pro zábavu zaručí, že vaše akce bude nezapomenutelná.
                  </div>
                  <div className="local-scroll">
                    <a
                      href="#contact"
                      className="btn btn-mod btn-w btn-medium btn-round"
                    >
                      Neváhejte se ozvat
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={6} className="banner-image wow fadeInUp">
              <img src={promo} alt="Promo" />
            </Col>
          </Row>
        </Container>
      </JarallaxSection>
    </React.Fragment>
  );
};

export default Cta;
