import { jarallax } from 'jarallax';
import "jarallax/dist/jarallax.css";
import React, { useEffect, useRef } from 'react'

const JarallaxVideo = ({ videoUrl }: any) => {

    const jarallaxElement = useRef(null);

    useEffect(() => {
        if (jarallaxElement.current) {
            // Initialize Jarallax with the provided video URL
            jarallax(jarallaxElement.current, {
                type: 'video',
                videoSrc: videoUrl,
                videoLoop: true,
                videoPlayOnlyVisible: true,
            });
        }

        return () => {
            // Clean up Jarallax instance when component unmounts
            if (jarallaxElement.current) {
                jarallax(jarallaxElement.current, 'destroy');
            }
        };
    }, [videoUrl]);



    return (
        <React.Fragment>
            <video ref={jarallaxElement} src={videoUrl} style={{ width: '100%', height: '100vh' }} autoPlay loop muted />
        </React.Fragment>
    )
}

export default JarallaxVideo