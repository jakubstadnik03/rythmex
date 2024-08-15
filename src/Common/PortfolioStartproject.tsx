import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PortfolioStartproject = () => {
  return (
    <React.Fragment>
      {/* <!-- Call Action Section --> */}
      <section className="small-section bg-dark">
        <Container className="relative">
          <div className="align-center">
            <h3 className="banner-heading font-alt">Líbí se vám naše práce?</h3>
            <div>
              <a
                href="#contact"
                className="btn btn-mod btn-w btn-medium btn-round"
              >
                Začněte plánovat vaši akci
              </a>
            </div>
          </div>
        </Container>
      </section>
      {/* <!-- End Call Action Section --> */}
    </React.Fragment>
  );
};

export default PortfolioStartproject;
