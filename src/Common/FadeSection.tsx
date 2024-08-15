import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


const FadeSection = ({ textItems }: any) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === textItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 3600);

        return () => clearInterval(interval);
    }, [currentIndex, textItems.length]);
    return (
        <React.Fragment>
            <AnimatePresence mode="wait">
                <motion.span
                    key={textItems[currentIndex]}
                    initial={{ opacity: 0 }}
                    className="text-rotate"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {textItems[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </React.Fragment>
    );
};

export default FadeSection;
