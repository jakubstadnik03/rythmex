import { jarallax } from 'jarallax';
import React, { useEffect, useRef } from 'react'

const JarallaxVideo2 = ({ videoUrl = true, startAt = 0, opacity = 1 }: any) => {

    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Jarallax with the provided options
        jarallax(document.querySelectorAll('.jarallax'), {

            // noVideo: false,
        });
        jarallax(containerRef.current, {
            type: 'video',
            videoSrc: videoUrl,
            videoPlayOnlyVisible: false, // Adjust based on your requirements
            videoLazyLoading: true, // Adjust based on your requirements
            videoStartTime: startAt,
        });
        // Cleanup on unmount
        return () => {
            if (containerRef.current) {
                jarallax(containerRef.current, 'destroy');
            }
        };
    }, [videoUrl, startAt]);

    return (
        <React.Fragment>
            <video className="player"
                src={videoUrl}
                ref={containerRef}
                style={{ opacity: opacity }}
                data-speed="0.5"
            />
        </React.Fragment>
    )
}

export default JarallaxVideo2