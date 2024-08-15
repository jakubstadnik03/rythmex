import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//import images
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";

const About = () => {
  return (
    <React.Fragment>
      <section className="page-section" id="about">
        <Container className="relative">

          <div className="section-text mb-50 mb-sm-20">
            <Row>

              <Col md={4}>
                <blockquote>
                  <p>
                    Design is&nbsp;not making beauty, beauty emerges from selection, affinities, integration, love.
                  </p>
                  <footer>
                    Louis Kahn
                  </footer>
                </blockquote>
              </Col>
              <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.
              </Col>
              <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                Etiam sit amet fringilla lacus. Pellentesque suscippiteme ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
              </Col>
            </Row>
          </div>

          <Row>
            <Col sm={4} className="mb-xs-30 wow fadeInUp no-mobile">
              <div className="team-item">
                <div className="team-item-image">
                  <img src={team1} alt="" />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Hello & Welcome!</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&nbsp;iaculis diam.
                    </p>
                    <div className="team-social-links">
                      <a href="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></a>
                      <a href="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></a>
                      <a href="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></a>
                    </div>
                  </div>
                </div>
                <div className="team-item-descr font-alt">
                  <div className="team-item-name">
                    Thomas Rhythm
                  </div>
                  <div className="team-item-role">
                    Art Director
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} className="mb-xs-30 wow fadeInUp no-mobile" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="team-item-image">
                  <img src={team2} alt="" />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Nice to meet!</h4>
                    <p>
                      Curabitur augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta.
                    </p>
                    <div className="team-social-links">
                      <a href="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></a>
                      <a href="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></a>
                      <a href="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></a>
                    </div>
                  </div>
                </div>
                <div className="team-item-descr font-alt">
                  <div className="team-item-name">
                    Marta Laning
                  </div>
                  <div className="team-item-role">
                    Web engineer
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} className="mb-xs-30 wow fadeInUp no-mobile" data-wow-delay="0.2s">
              <div className="team-item">
                <div className="team-item-image">
                  <img src={team3} alt="" />
                  <div className="team-item-detail">
                    <h4 className="font-alt normal">Whats Up!</h4>
                    <p>
                      Adipiscing elit curabitur eu&nbsp;adipiscing lacus eu&nbsp;adipiscing lacus, a&nbsp;iaculis diam.
                    </p>
                    <div className="team-social-links">
                      <a href="#" target="_blank"><i className="fa fa-facebook"></i><span className="sr-only">Facebook profile</span></a>
                      <a href="#" target="_blank"><i className="fa fa-twitter"></i><span className="sr-only">Twitter profile</span></a>
                      <a href="#" target="_blank"><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest profile</span></a>
                    </div>
                  </div>
                </div>
                <div className="team-item-descr font-alt">
                  <div className="team-item-name">
                    Steve ANDERS
                  </div>

                  <div className="team-item-role">
                    Developer
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
