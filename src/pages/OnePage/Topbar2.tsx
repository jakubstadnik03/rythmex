import React, { useEffect, useState } from 'react'

import logo from "../../assets/images/logo-white.png"

const Topbar2 = () => {

    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // activation
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("ul.clearlist li a[href]");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("id");
                    console.log("sectionId", sectionId)
                    navLinks.forEach((navLink) => {
                        navLink.classList.remove("active");
                        if (navLink.getAttribute("href") === `#${sectionId}`) {
                            navLink.classList.add("active");
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        // Smooth scrolling function
        const smoothScroll = (target: any) => {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth',
            });
        };

        // Add click event listener to navigation links
        navLinks.forEach((navLink) => {
            navLink.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = navLink.getAttribute("href");
                smoothScroll(targetId);
            });
        });

        return () => {
            // Cleanup the observer on component unmount
            sectionObserver.disconnect();
        };
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // Initialize on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setMobileSubMenu(window.innerWidth > 1024);
        };

        // Initialize on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav) {
            mobileNav.setAttribute('aria-expanded', 'false');
        }
    }, []);

    const [mobileSubMenu, setMobileSubMenu] = useState(false);

    const handleMobileSubmenu = () => {
        setMobileSubMenu(!mobileSubMenu)
    }

    return (
        <React.Fragment>
            <nav className={`main-nav stick-fixed ${isTransparent ? 'transparent' : 'js-transparent'} ${isTransparent ? '' : 'small-height'} ${isMobile ? 'mobile-on' : ''}`}>
                <div className="full-wrapper relative clearfix">
                    <div className="nav-logo-wrap local-scroll">
                        <a href="#top" className="logo">
                            <img src={logo} alt="Company logo" />
                        </a>
                    </div>
                    <div className="mobile-nav" role="button" tabIndex={0} onClick={handleMobileSubmenu}>
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Menu</span>
                    </div>
                    <div className={`menu inner-nav desktop-nav ${mobileSubMenu === true ? "js-opened" : ""}`} style={{ display: `${mobileSubMenu === true ? "block" : "none"}` }}>
                        <ul className="clearlist scroll-nav local-scroll" style={{ display: `${mobileSubMenu === true ? "block" : "none"}` }}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contacts</a></li>
                            <li><a href="/intro">All Demos</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Topbar2