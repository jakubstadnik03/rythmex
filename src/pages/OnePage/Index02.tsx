import React from "react";
import { Link } from "react-router-dom";
import JarallaxSection from "../../Common/JarallaxSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import bg11 from "../../assets/img/dohromay2.jpg";
import bg12 from "../../assets/img/spolecna-foto.jpg";
import bg13 from "../../assets/img/vizitka.jpg";

import AboutUs from "../../Common/OnePages/AboutUs";
import Service from "../../Common/OnePages/Service";
import Cta from "../../Common/MainDemo/Cta";
import Portfolio from "../../Common/OnePages/Portfolio";
import PortfolioStartproject from "../../Common/PortfolioStartproject";
import Testimonials from "../../Common/MainDemo/Testimonials";
import Contact from "../../Common/OnePages/Contact";
import WhyChoose from "../../Common/MainDemo/WhyChoose";

const Index02 = () => {
  return (
    <React.Fragment>
      <div className="bg-dark relative" id="home">
        <div className="fullwidth-gallery">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            loop={true}
            fadeEffect={{
              crossFade: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <JarallaxSection
                className="home-section bg-scroll bg-dark-alfa-30"
                backgroundImage={bg11}
              >
                <div className="js-height-full"></div>
              </JarallaxSection>
            </SwiperSlide>
            <SwiperSlide>
              <JarallaxSection
                className="home-section bg-scroll bg-dark-alfa-50"
                backgroundImage={bg12}
              >
                <div className="js-height-full"></div>
              </JarallaxSection>
            </SwiperSlide>
            <SwiperSlide>
              <JarallaxSection
                className="home-section bg-scroll bg-dark-alfa-50"
                backgroundImage={bg13}
              >
                <div className="js-height-full"></div>
              </JarallaxSection>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="js-height-full fullwidth-galley-content">
          <div className="home-content container">
            <div className="home-text">
              <div className="hs-line-6 no-transp font-alt mb-40 mb-xs-20">
                Vytváříme nezapomenutelné zážitky v Liberci
              </div>
              <div className="hs-line-7 mb-50 mb-xs-30">
                Rythmex - Vaše akce, naše vášeň
              </div>
              <div className="local-scroll">
                <a
                  href="#services"
                  className="btn btn-mod btn-border-w btn-medium btn-round mb-xxs-10 d-none d-sm-inline-block mx-2"
                >
                  Prozkoumejte naše služby
                </a>
                <span className="d-none d-sm-inline-block">&nbsp;</span>
                <Link
                  to="https://www.instagram.com/p/C8EGYohNTEZ/"
                  className="btn btn-mod btn-border-w btn-medium btn-round lightbox mfp-iframe"
                >
                  Podívejte se na náší předchozí akci
                </Link>
              </div>
            </div>
          </div>
          <div className="local-scroll">
            <a href="#about" className="scroll-down">
              <i className="fa fa-angle-down scroll-down-icon"></i>
              <span className="sr-only">Přejít na další sekci</span>
            </a>
          </div>
        </div>
      </div>

      {/* about us */}
      <AboutUs />

      <hr className="mt-0 mb-0 " />

      {/* Services */}
      <Service />

      {/* call action */}
      <Cta />

      {/* portfolio */}
      <Portfolio />

      {/*  */}
      <PortfolioStartproject />

      {/* features */}
      <WhyChoose />

      {/* testimonial */}
      <Testimonials />

      {/* contact */}
      <Contact />
    </React.Fragment>
  );
};

export default Index02;
