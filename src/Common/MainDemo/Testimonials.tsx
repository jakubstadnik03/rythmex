import React from "react";
import JarallaxSection from "../../Common/JarallaxSection";
import { Col, Container, Row } from "react-bootstrap";

//import images
import sectionBg3 from "../../assets/images/full-width-images/section-bg-3.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <React.Fragment>
      <JarallaxSection
        backgroundImage={sectionBg3}
        className="page-section bg-dark bg-dark-alfa-90 fullwidth-slider"
        id="reference"
      >
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          loop={true}
          navigation={true}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper special-fashion-testimonial"
        >
          <SwiperSlide>
            <Container className="relative">
              <Row>
                <Col
                  lg={10}
                  xl={8}
                  className="offset-lg-1 offset-xl-2 align-center"
                >
                  <div className="section-icon">
                    <span className="icon-quote"></span>
                  </div>
                  <h3 className="small-title font-alt">
                    Co říkají naši klienti?
                  </h3>
                  <blockquote className="testimonial white">
                    <p>
                      „Svatba byla naprosto dokonalá! Adam a Deniz zajistili, že
                      vše probíhalo hladce a hudba na večerní párty byla úžasná.
                      Naši hosté se skvěle bavili a my na tento den nikdy
                      nezapomeneme. Děkujeme!“
                    </p>
                    <footer className="testimonial-author">
                      Petra a Tomáš, svatba v Liberci
                    </footer>
                  </blockquote>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container relative">
              <Row>
                <Col
                  lg={10}
                  xl={8}
                  className="offset-lg-1 offset-xl-2 align-center"
                >
                  <div className="section-icon">
                    <span className="icon-quote"></span>
                  </div>
                  <h3 className="small-title font-alt">
                    Co říkají naši klienti?
                  </h3>
                  <blockquote className="testimonial white">
                    <p>
                      „Maturitní ples, který pro nás Rythmex organizoval, byl
                      naprosto perfektní. Moderování i hudba byly na vysoké
                      úrovni a všichni se skvěle bavili. Kluci odvedli
                      fantastickou práci!“
                    </p>
                    <footer className="testimonial-author">
                      Jan Novák, maturitní ples v Liberci
                    </footer>
                  </blockquote>
                </Col>
              </Row>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container relative">
              <Row>
                <Col
                  lg={10}
                  xl={8}
                  className="offset-lg-1 offset-xl-2 align-center"
                >
                  <div className="section-icon">
                    <span className="icon-quote"></span>
                  </div>
                  <h3 className="small-title font-alt">
                    Co říkají naši klienti?
                  </h3>
                  <blockquote className="testimonial white">
                    <p>
                      „Naše firemní akce byla díky Rythmexu nezapomenutelná.
                      Profesionální přístup, skvělá hudba a přátelská atmosféra
                      - vše bylo perfektní. Určitě budeme spolupracovat i v
                      budoucnu.“
                    </p>
                    <footer className="testimonial-author">
                      Martina Dvořáková, firemní event v Praze
                    </footer>
                  </blockquote>
                </Col>
              </Row>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container relative">
              <Row>
                <Col
                  lg={10}
                  xl={8}
                  className="offset-lg-1 offset-xl-2 align-center"
                >
                  <div className="section-icon">
                    <span className="icon-quote"></span>
                  </div>
                  <h3 className="small-title font-alt">
                    Co říkají naši klienti?
                  </h3>
                  <blockquote className="testimonial white">
                    <p>
                      „Midnight Project v Liberci byl zážitek, na který se
                      nezapomíná. Skvělá hudba, úžasná atmosféra a
                      nezapomenutelná noc. Těšíme se na další akci!“
                    </p>
                    <footer className="testimonial-author">
                      Pavel Horák, pravidelný účastník Midnight Project
                    </footer>
                  </blockquote>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        </Swiper>
      </JarallaxSection>
    </React.Fragment>
  );
};

export default Testimonials;
