import React, { useState } from "react";
import { Link } from "react-router-dom";

import pro1 from "../../assets/img/deniz.jpg";
import pro2 from "../../assets/img/spolecna-foto.jpg";
import pro3 from "../../assets/img/adam.jpg";
import pro4 from "../../assets/img/adam2.jpg";
import pro5 from "../../assets/img/dohromay2.jpg";
import pro6 from "../../assets/img/deniz.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all"); // Initial filter state

  // Sample portfolio items categorized by services
  const portfolioItems = [
    {
      id: 1,
      category: "moderovani",
      classes: "work-ext-link",
      title: "Moderování svateb",
      linkurl: "/portfolio-single-wedding",
      imageUrl: pro1,
      subTitle: "Svatební moderování",
    },
    {
      id: 2,
      category: "djing",
      classes: "work-ext-link",
      title: "DJing na plese",
      linkurl: "/portfolio-single-prom",
      imageUrl: pro2,
      subTitle: "Plesový DJing",
    },
    {
      id: 3,
      category: "plesy",
      classes: "work-ext-link",
      title: "Organizace plesu",
      linkurl: "/portfolio-single-prom",
      imageUrl: pro3,
      subTitle: "Maturitní ples",
    },
    {
      id: 4,
      category: "svatby",
      classes: "work-ext-link",
      title: "Svatba na míru",
      linkurl: "/portfolio-single-wedding",
      imageUrl: pro4,
      subTitle: "Kompletní svatební služby",
    },
    {
      id: 5,
      category: "midnight",
      classes: "work-ext-link",
      title: "Midnight Project",
      linkurl: "/portfolio-single-midnight",
      imageUrl: pro5,
      subTitle: "Noční párty v Liberci",
    },
    {
      id: 12,
      category: "eventy",
      classes: "work-ext-link",
      title: "Eventy na klíč",
      linkurl: "/portfolio-single-event",
      imageUrl: pro6,
      subTitle: "Firemní eventy",
    },
  ];

  // Filter items based on selected filter
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <React.Fragment>
      <section className="page-section pb-0" id="portfolio">
        <div className="relative">
          <h2 className="section-title font-alt mb-70 mb-sm-40">Portfolio</h2>

          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div className="section-text align-center mb-70 mb-xs-40">
                  Podívejte se na ukázky naší práce, která zahrnuje širokou
                  škálu služeb od moderování a DJingu, až po organizaci svateb a
                  firemních eventů. Jsme tu, abychom vaši akci proměnili ve
                  skutečně nezapomenutelný zážitek.
                </div>
              </div>
            </div>
          </div>
          {/* Works Filter */}
          <div className="works-filter font-alt align-center">
            <Link
              to="#"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "filter active" : "filter"}
            >
              Vše
            </Link>
            <Link
              to="#moderovani"
              onClick={() => setFilter("moderovani")}
              className={filter === "moderovani" ? "filter active" : "filter"}
            >
              Moderování
            </Link>
            <Link
              to="#djing"
              onClick={() => setFilter("djing")}
              className={filter === "djing" ? "filter active" : "filter"}
            >
              DJing
            </Link>
            <Link
              to="#plesy"
              onClick={() => setFilter("plesy")}
              className={filter === "plesy" ? "filter active" : "filter"}
            >
              Plesy
            </Link>
            <Link
              to="#svatby"
              onClick={() => setFilter("svatby")}
              className={filter === "svatby" ? "filter active" : "filter"}
            >
              Svatby
            </Link>
            <Link
              to="#midnight"
              onClick={() => setFilter("midnight")}
              className={filter === "midnight" ? "filter active" : "filter"}
            >
              Midnight Project
            </Link>
            <Link
              to="#eventy"
              onClick={() => setFilter("eventy")}
              className={filter === "eventy" ? "filter active" : "filter"}
            >
              Eventy na klíč
            </Link>
          </div>

          <ul className="works-grid work-grid-3 work-grid-gut clearfix font-alt hover-white hide-titles">
            {filteredItems.map((work) => (
              <li key={work.id} className={`work-item mix ${work.category}`}>
                <Link to={work.linkurl} className={work.classes}>
                  <div className="work-img">
                    <img src={work.imageUrl} alt={work.title} />
                  </div>
                  <div className="work-intro">
                    <h3 className="work-title">{work.title}</h3>
                    <div className="work-descr">{work.subTitle}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
