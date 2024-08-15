import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import footer from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-section bg-gray-lighter footer pb-60">
        <Container>
          {/* Footer Logo */}
          <Row
            className="local-scroll mb-30 wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <Col>
              <a href="#top">
                <img src={footer} width="78" height="36" alt="Company logo" />
                <span className="sr-only">Scroll to the top of the page</span>
              </a>
            </Col>
          </Row>
          {/* End Footer Logo */}

          {/* Social Links */}
          <Row className="footer-social-links mb-110 mb-xs-60">
            <Col>
              <a href="#" title="Facebook" target="_blank">
                <i className="fa fa-facebook"></i>
                <span className="sr-only">Facebook profile</span>
              </a>
              &nbsp;
              <a href="#" title="Twitter" target="_blank">
                <i className="fa fa-twitter"></i>
                <span className="sr-only">Twitter profile</span>
              </a>
              &nbsp;
              <a href="#" title="Behance" target="_blank">
                <i className="fa fa-behance"></i>
                <span className="sr-only">Behance profile</span>
              </a>
              &nbsp;
              <a href="#" title="LinkedIn+" target="_blank">
                <i className="fa fa-linkedin"></i>
                <span className="sr-only">LinkedIn+ profile</span>
              </a>
              &nbsp;
              <a href="#" title="Pinterest" target="_blank">
                <i className="fa fa-pinterest"></i>
                <span className="sr-only">Pinterest profile</span>
              </a>
            </Col>
          </Row>
          {/* End Social Links */}

          {/* Footer Text */}
          <div className="footer-text">
            {/* Copyright */}
            <Row className="footer-copy font-alt">
              <Col>
                <a
                  href="http://themeforest.net/user/theme-guru/portfolio"
                  target="_blank"
                >
                  © Rhythm 2024
                </a>
              </Col>
            </Row>
            {/* End Copyright */}

            <Row className="footer-made">
              <Col>Made with love for great people.</Col>
            </Row>
          </div>
          {/* End Footer Text */}
        </Container>

        {/* Top Link */}
        <div className="local-scroll">
          <a href="#top" className="link-to-top">
            <i className="fa fa-caret-up"></i>
            <span className="sr-only">Scroll to top</span>
          </a>
        </div>
        {/* End Top Link */}

        {/* Buy */}
      </footer>
    </React.Fragment>
  );
};

export default Footer;
