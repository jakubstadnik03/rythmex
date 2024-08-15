import React from "react";
import { Container, Nav, Tab, TabContainer } from "react-bootstrap";

const Service = () => {
  return (
    <React.Fragment>
      <section className="page-section" id="services">
        <Container className="relative">
          <h2 className="section-title font-alt mb-70 mb-sm-40">Naše služby</h2>

          <TabContainer defaultActiveKey="service-moderovani">
            <Nav
              role="tablist"
              className="nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0"
            >
              <li role="presentation">
                <Nav.Link eventKey="service-moderovani">
                  <div className="alt-tabs-icon">
                    <span className="icon-strategy"></span>
                  </div>
                  Moderování
                </Nav.Link>
              </li>
              <li role="presentation">
                <Nav.Link eventKey="service-djing">
                  <div className="alt-tabs-icon">
                    <span className="icon-desktop"></span>
                  </div>
                  DJing
                </Nav.Link>
              </li>
              <li role="presentation">
                <Nav.Link eventKey="service-plesy">
                  <div className="alt-tabs-icon">
                    <span className="icon-tools"></span>
                  </div>
                  Plesy
                </Nav.Link>
              </li>
              <li role="presentation">
                <Nav.Link eventKey="service-svatby">
                  <div className="alt-tabs-icon">
                    <span className="icon-heart"></span>
                  </div>
                  Svatby
                </Nav.Link>
              </li>

              <li role="presentation">
                <Nav.Link eventKey="service-eventy">
                  <div className="alt-tabs-icon">
                    <span className="icon-camera"></span>
                  </div>
                  Eventy na klíč
                </Nav.Link>
              </li>
            </Nav>

            <Tab.Content className="tpl-tabs-cont">
              <Tab.Pane role="tabpanel" eventKey="service-moderovani">
                <div className="section-text">
                  <div className="row">
                    <div className="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote className="mb-0">
                        <p>
                          „Profesionální moderování je klíčem k úspěšnému
                          eventu.“
                        </p>
                        <footer>Adam a Deniz</footer>
                      </blockquote>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      Naše služby moderování zahrnují vše od vedení svatebního
                      dne až po moderování firemních eventů. S námi máte
                      jistotu, že každá událost bude plynout hladce a bez
                      stresu, a hosté se budou cítit příjemně a zapojení.
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane role="tabpanel" eventKey="service-djing">
                <div className="section-text">
                  <div className="row">
                    <div className="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote className="mb-0">
                        <p>„Hudba je srdcem každé dobré párty.“</p>
                        <footer>Adam a Deniz</footer>
                      </blockquote>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      DJing je naší vášní a umíme vytvořit atmosféru, která
                      rozproudí každou akci. Od svatebních večírků po maturitní
                      plesy, přinášíme ty nejlepší mixy, které roztančí každého
                      hosta.
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane role="tabpanel" eventKey="service-plesy">
                <div className="section-text">
                  <div className="row">
                    <div className="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote className="mb-0">
                        <p>
                          „Plesy s námi znamenají nezapomenutelné vzpomínky.“
                        </p>
                        <footer>Adam a Deniz</footer>
                      </blockquote>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      Organizace a moderování plesů je naší specializací.
                      Postaráme se o to, aby váš ples byl přesně podle vašich
                      představ – od úvodního slova až po poslední tanec.
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane role="tabpanel" eventKey="service-svatby">
                <div className="section-text">
                  <div className="row">
                    <div className="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote className="mb-0">
                        <p>„Vaše svatba, náš závazek k dokonalosti.“</p>
                        <footer>Adam a Deniz</footer>
                      </blockquote>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      Svatba je jedním z nejdůležitějších dnů v životě. Naši
                      moderátoři a DJové se postarají o to, aby tento den byl
                      nejen nezapomenutelný, ale také bezstarostný a plný
                      radosti.
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane role="tabpanel" eventKey="service-midnight-project">
                <div className="section-text">
                  <div className="row">
                    <div className="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote className="mb-0">
                        <p>
                          „Midnight Project – pravidelná dávka energie v centru
                          Liberce.“
                        </p>
                        <footer>Adam a Deniz</footer>
                      </blockquote>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      Midnight Project je naše vlajková párty, která přitahuje
                      milovníky skvělé hudby a zábavy. Každý měsíc přinášíme do
                      Liberce tu nejlepší atmosféru a nezapomenutelné noční
                      zážitky.
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane role="tabpanel" eventKey="service-eventy">
                <div className="section-text">
                  <div className="row">
                    <div className="col-md-4 mb-md-40 mb-xs-30">
                      <blockquote className="mb-0">
                        <p>
                          „Kompletní organizace akcí na klíč – vaše starosti,
                          naše práce.“
                        </p>
                        <footer>Adam a Deniz</footer>
                      </blockquote>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      Nabízíme kompletní služby v oblasti organizace eventů. Od
                      plánování až po realizaci se postaráme o to, aby vaše akce
                      proběhla hladce a bez komplikací, a vy si mohli užít každý
                      okamžik.
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </TabContainer>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Service;
