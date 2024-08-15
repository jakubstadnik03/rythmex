import React, { useEffect, useRef } from 'react';
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";

const JarallaxSection = ({ backgroundImage, children, ...rest }: any) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            jarallax(sectionRef.current, {
                speed: 0.5,
            });
        }
    }, []);

    return (
        <React.Fragment>
            <section
                ref={sectionRef}
                style={{ backgroundImage: `url(${backgroundImage})` }}
                {...rest}
            >
                {children}
            </section>
        </React.Fragment>
    );
};

export default JarallaxSection;
