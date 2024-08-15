import React, { useState } from 'react'
import PortfolioHeader from '../../../Common/PortfolioHeader'
import { Link } from 'react-router-dom'
import PortfolioStartproject from '../../../Common/PortfolioStartproject'

import full1 from "../../../assets/images/portfolio/full-project-1.jpg"
import full3 from "../../../assets/images/portfolio/full-project-3.jpg"

import pro1 from "../../../assets/images/portfolio/projects-1.jpg"
import pro2 from "../../../assets/images/portfolio/projects-2.jpg"
import pro3 from "../../../assets/images/portfolio/projects-3.jpg"
import pro4 from "../../../assets/images/portfolio/projects-4.jpg"
import pro5 from "../../../assets/images/portfolio/projects-5.jpg"
import pro6 from "../../../assets/images/portfolio/projects-6.jpg"

const GutterWideTwoCol = () => {

    const [filter, setFilter] = useState('all');

    // Function to handle filter change
    const handleFilterChange = (filterValue: any) => {
        setFilter(filterValue);
    };

    // Data array containing works
    const works = [
        { id: 1, category: 'photography', classes: "work-lightbox-link mfp-image", title: 'Portrait', linkurl: full1, imageUrl: pro1, subTitle: "Lightbox" },
        { id: 2, category: 'branding design', classes: "work-ext-link", title: 'Vase 3D', linkurl: "/profile-single-1", imageUrl: pro2, subTitle: "External Page" },
        { id: 3, category: 'branding', classes: "work-ext-link", title: 'Boy in T-shirt', linkurl: "/profile-single-1", imageUrl: pro3, subTitle: "External Page" },
        { id: 4, category: 'design photography', classes: "work-ext-link", title: 'Space', linkurl: "/profile-single-1", imageUrl: pro4, subTitle: "External Page" },
        { id: 5, category: 'design', classes: "work-ext-link", title: 'Model', linkurl: "/profile-single-1", imageUrl: pro5, subTitle: "External Page" },
        { id: 6, category: 'design branding', classes: "work-lightbox-link mfp-image", title: 'Young Man', linkurl: full3, imageUrl: pro6, subTitle: "Lightbox" },
    ];

    // Filtered works based on the selected filter
    const filteredWorks = filter === 'all' ? works : works.filter(work => work.category.includes(filter));

    return (
        <React.Fragment>
            <PortfolioHeader title="Wide" />

            <section className="page-section pb-0">
                <div className="relative">
                    <div className="works-filter font-alt align-center">
                        {/* Filter buttons */}
                        <Link to="#" onClick={() => handleFilterChange('all')} className="filter active" role="button" aria-pressed="true" data-filter="*">All works</Link>
                        <Link to="#branding" onClick={() => handleFilterChange('branding')} className="filter" role="button" aria-pressed="false" data-filter=".branding">Branding</Link>
                        <Link to="#design" onClick={() => handleFilterChange('design')} className="filter" role="button" aria-pressed="false" data-filter=".design">Design</Link>
                        <Link to="#photography" onClick={() => handleFilterChange('photography')} className="filter" role="button" aria-pressed="false" data-filter=".photography">Photography</Link>
                    </div>
                    <ul className="works-grid work-grid-2 work-grid-gut clearfix font-alt hover-white hide-titles" id="work-grid">
                        {/* Render filtered works */}
                        {filteredWorks.map(work => (
                            <li key={work.id} className={`work-item mix ${work.category}`}>
                                <Link to={work.linkurl} className={work.classes}>
                                    <div className="work-img">
                                        <img src={work.imageUrl} alt={work.title} />
                                    </div>
                                    <div className="work-intro">
                                        <h3 className="work-title">{work.title}</h3>
                                        <div className="work-descr">
                                            {work.subTitle}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <PortfolioStartproject />
        </React.Fragment>
    )
}

export default GutterWideTwoCol