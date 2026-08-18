import React from "react";

// Home-page stats band. Update these figures each season (they should match
// the copy in home/Calgary.jsx, home/Awards.jsx, and info/FAQ.jsx).
const STATS = [
    { value: "5TH", label: "YEAR RUNNING" },
    { value: "250+", label: "TEAMS WORLDWIDE" },
    { value: "11", label: "WORLDS SPOTS" },
];

const Stats = () => {
    return (
        // Solid black: the hero's hexagon art bleeds down behind this band and
        // its white border would make the white labels unreadable.
        <section className="relative w-screen bg-black flex-row-centered z-20 py-16">
            <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-0 gap-10 w-[90vw]">
                {STATS.map(({ value, label }, index) => (
                    <React.Fragment key={label}>
                        {index > 0 && (
                            <div className="sm:block hidden w-[2px] h-24 bg-[#E31F2B] -skew-x-12 mx-[5vw]" />
                        )}
                        <div className="flex flex-col items-center -skew-x-12">
                            <span className="font-saira sm:text-8xl text-6xl text-[#E31F2B] leading-none">
                                {value}
                            </span>
                            <span className="font-bebas sm:text-3xl text-2xl tracking-widest mt-2">
                                {label}
                            </span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Stats;
