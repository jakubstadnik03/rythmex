import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import JarallaxSection from "../../Common/JarallaxSection";

import bg22 from "../../../assets/images/full-width-images/section-bg-22.jpg";

import pro1 from "../../../assets/images/portfolio/full-project-1.jpg";
import pro2 from "../../../assets/images/portfolio/full-project-2.jpg";
import pro3 from "../../../assets/images/portfolio/full-project-3.jpg";

import port1 from "../../../assets/images/portfolio/projects-1.jpg";
import port2 from "../../../assets/images/portfolio/projects-2.jpg";
import port3 from "../../../assets/images/portfolio/projects-3.jpg";
import port4 from "../../../assets/images/portfolio/projects-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Data for related projects
const worksData = [
  {
    id: 1,
    imageUrl: port1,
    title: "Moderování svatby",
    link: "/portfolio-wedding",
    description: "Svatební moderování a DJing",
  },
  {
    id: 2,
    imageUrl: port2,
    title: "Maturitní ples",
    link: "/portfolio-prom",
    description: "Organizace a DJing na maturitním plese",
  },
  {
    id: 3,
    imageUrl: port3,
    title: "Firemní event",
    link: "/portfolio-corporate",
    description: "Kompletní organizace firemního eventu",
  },
  {
    id: 4,
    imageUrl: port4,
    title: "Midnight Project",
    link: "/portfolio-midnight",
    description: "Pravidelná noční párty v Liberci",
  },
];

// Data for project features
const altFeaturesData = [
  {
    title: "1. Case study",
    description:
      "Podívejte se na detailní popis toho, jak jsme realizovali tuto akci a co všechno bylo potřeba k dosažení úspěchu.",
  },
  {
    title: "2. Výsledek",
    description:
      "Výsledkem naší práce byla spokojenost klientů a hostů, kteří se skvěle bavili. Profesionální přístup a skvělá atmosféra byly klíčem k úspěchu.",
  },
  {
    title: "3. Zkušenost",
    description:
      "S našimi dlouholetými zkušenostmi v oblasti organizace akcí jsme zajistili, že každá akce proběhla hladce a podle plánu.",
  },
];

const SingleOne = () => {
  return (
    <React.Fragment>
      <JarallaxSection
        backgroundImage={bg22}
        className="page-section bg-dark-alfa-30"
      >
        <div className="relative container align-left">
          <Row>
            <Col md={8}>
              <h1 className="hs-line-11 no-transp font-alt mb-20 mb-xs-0">
                Detail projektu
              </h1>
              <div className="hs-line-4 font-alt">
                Podívejte se na detaily našich nedávných projektů
              </div>
            </Col>
            <Col md={4} className="mt-30">
              <div className="mod-breadcrumbs font-alt align-right">
                <Link to="/">Domů</Link>&nbsp;/&nbsp;
                <Link to="/portfolio">Portfolio</Link>&nbsp;/&nbsp;
                <span>Detail</span>
              </div>
            </Col>
          </Row>
        </div>
      </JarallaxSection>

      {/* Section */}
      <section className="page-section">
        <div className="container relative">
          <Row className="alt-features-grid mb-80 mb-xs-40">
            <Col sm={3}>
              <div className="alt-features-item align-center">
                <div className="alt-features-descr align-left">
                  <h4 className="mt-0 font-alt">O projektu</h4>
                  Tento projekt zahrnoval kompletní organizaci akce, od
                  plánování až po realizaci. Naše týmy zajistily, že všechno
                  proběhlo podle plánu.
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-chat"></span>
                </div>
                <h3 className="alt-features-title font-alt">1. Diskuse</h3>
              </div>
            </Col>
            <Col sm={3}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-browser"></span>
                </div>
                <h3 className="alt-features-title font-alt">2. Realizace</h3>
              </div>
            </Col>
            <Col sm={3}>
              <div className="alt-features-item align-center">
                <div className="alt-features-icon">
                  <span className="icon-heart"></span>
                </div>
                <h3 className="alt-features-title font-alt">3. Výsledek</h3>
              </div>
            </Col>
          </Row>
          <div className="work-full-media mb-80 mb-xs-40">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              navigation={true}
              fadeEffect={{
                crossFade: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="clearlist work-full-slider swiper-navigation"
            >
              <SwiperSlide>
                <img src={pro1} alt="Project Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pro2} alt="Project Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pro3} alt="Project Image 3" />
              </SwiperSlide>
            </Swiper>
          </div>
          <Row className="multi-columns-row alt-features-grid mb-80 mb-xs-40">
            {altFeaturesData.map((item, idx) => (
              <Col sm={6} md={4} lg={4} key={idx}>
                <div className="alt-features-item align-center">
                  <h3 className="alt-features-title font-alt">{item.title}</h3>
                  <div className="alt-features-descr align-left">
                    {item.description}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <hr className="mb-70 mb-xs-30" />
          <div className="section-text">
            <Row>
              <Col md={4} className="mb-sm-50 mb-xs-30">
                <div className="work-detail">
                  <h5 className="font-alt mt-0 mb-20">Detaily projektu</h5>
                  <div className="work-full-detail">
                    <p>
                      <strong>Klient:</strong>
                      Svatební agentura
                    </p>
                    <p>
                      <strong>Datum:</strong>
                      15. června 2023
                    </p>
                    <p>
                      <strong>Web:</strong>
                      <Link to="#" target="_blank">
                        www.svatebniagentura.cz
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                Tento projekt zahrnoval kompletní organizaci svatby, včetně
                moderování a DJingu. Byli jsme odpovědní za celý den, od obřadu
                až po večerní zábavu.
              </Col>
              <Col md={4} sm={6} className="mb-sm-50 mb-xs-30">
                Díky našemu týmu byla svatba nezapomenutelná pro všechny hosty.
                Naši klienti ocenili náš přístup, profesionalitu a schopnost
                přizpůsobit se jejich požadavkům.
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <hr className="mt-0 mb-0 " />

      <section className="page-section">
        <Container className="relative">
          <h2 className="section-title font-alt mb-70 mb-sm-40">
            Související projekty
          </h2>
          <ul
            className="works-grid work-grid-gut clearfix font-alt hover-white"
            id="work-grid"
          >
            {worksData.map((work) => (
              <li key={work.id} className="work-item">
                <Link to={work.link} className="work-ext-link">
                  <div className="work-img">
                    <img
                      className="work-img"
                      src={work.imageUrl}
                      alt={work.title}
                    />
                  </div>
                  <div className="work-intro">
                    <h3 className="work-title">{work.title}</h3>
                    <div className="work-descr">{work.description}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <hr className="mt-0 mb-0 " />

      <div className="work-navigation clearfix">
        <Link to="/portfolio-single-5" className="work-prev">
          <span>
            <i className="fa fa-chevron-left"></i>&nbsp;Předchozí
          </span>
        </Link>
        <Link to="/portfolio" className="work-all">
          <span>
            <i className="fa fa-times"></i>&nbsp;Všechny projekty
          </span>
        </Link>
        <Link to="/portfolio-single-2" className="work-next">
          <span>
            Další&nbsp;<i className="fa fa-chevron-right"></i>
          </span>
        </Link>
      </div>

      <hr className="mt-0 mb-0 " />
    </React.Fragment>
  );
};

export default SingleOne;
