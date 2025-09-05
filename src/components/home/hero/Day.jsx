"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Day = ({ startDay, targetDay, startAnimation=true }) => {
    const startingFIndex = 20; // starting day
    const dayPadding = 6;
    const maxDay = startDay + dayPadding;
    const minDay = targetDay - dayPadding;

    const [fIndex, setFIndex] = useState(startingFIndex);

    const rotationConst = 1270 / (startingFIndex - targetDay + 2);
    const animationTime = 45;

    const yearList = [];
    for (let i = minDay; i <= maxDay; i++) {
        yearList.push(String(i === targetDay + 1 ? "to" : i));
    }
    
    // Trigger on mount once to set the initial fIndex
    useEffect(() => {
        setFIndex(startingFIndex);
    }, []);

    // Decrement fIndex until target is reached if startAnimation is true
    useEffect(() => {
        if (startAnimation && fIndex > targetDay) { // Check if startAnimation is true
            const timer = setTimeout(() => {
                setFIndex(fIndex - 1); // decrement
            }, animationTime);
            return () => clearTimeout(timer);
        }
    }, [fIndex, startAnimation]); // Add fIndex and startAnimation to dependencies

    // Animate opacity based on if it is focused (index)
    const calcOpacity = (focused, hideMiddle, subfocused, index, fIndex) => {
        const distance = index - fIndex;
        if (hideMiddle) {
            return 1; // target middle, hide
        }
        if (index === fIndex) {
            return 0.3; // middle but not target
        }
        if (focused) {
            if (index === targetDay - minDay || index === targetDay - minDay + 1 || index === targetDay - minDay + 2) {
                return 1;
            } else {
                return 0.3;
            }
        } else if (subfocused) {
            return 0.3;
        } else {
            return (0.2 * 2) / Math.abs(distance);
        }
    };

    return (
        <figure className="relative w-full h-[10vh] 2xl:mt-8 xl:mt-12 mt-0 flex-row-start overflow-x-clip">
            {yearList.map((day, index) => {
                const focused = index === fIndex || index === fIndex + 1 || index === fIndex + 2;
                const middle = index === fIndex;
                const middleHide = index === fIndex && index === targetDay - minDay;
                const subfocused = index === fIndex + 3 || index === fIndex - 1;

                const single = parseInt(day, 10) < 10;

                return (
                    <div key={index} className="sm:w-[8vw] w-14 flex-row-centered 2xl:-translate-x-[10vw] xl:-translate-x-[20vw] xl:-mt-6 lg:-translate-x-[28vw] lg:-mt-8 md:-translate-x-[32vw] -translate-x-[calc(36rem-50vw)]">
                        <motion.p
                            initial={{
                                skew: -12,
                                opacity: calcOpacity(focused, middleHide, subfocused, index, fIndex),
                                scale: focused || middle ? 1.05 : subfocused ? 0.9 : 0.75,
                                paddingRight: (focused ? 50 : subfocused ? 5 : 4) + (single ? 10 : 0),
                                paddingLeft: (focused ? 40 : subfocused ? 5 : 4) + (single ? 10 : 0),
                                x: -1000,
                            }}
                            animate={{
                                opacity: calcOpacity(focused, middleHide, subfocused, index, fIndex),
                                scale: focused || middle ? 1.05 : subfocused ? 0.9 : 0.75,
                                paddingRight: (focused ? (day === "to" ? 0 : 50) : subfocused ? 5 : 4) + (single ? 10 : 0),
                                paddingLeft: (focused ? (day === "to" ? 0 : 40) : subfocused ? 5 : 4) + (single ? 10 : 0),
                                x: -1000 + rotationConst * (startingFIndex - fIndex),
                            }}
                            className={`
                            font-bebas mt-12 sm:mt-0 text-center ${day < 10 ? "ml-8" : ""} ${(day === "to") ? "ml-8 mr-2 sm:mx-0 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" : "2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-6xl"}`}
                        >
                            {day}
                        </motion.p>
                    </div>
                );
            })}
        </figure>
    );
};

export default Day;
