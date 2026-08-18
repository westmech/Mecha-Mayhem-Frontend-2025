import Image from "next/image";
import React from "react";

// Worlds-spots banner on the home page. The old 2023-24 award-banner SVGs
// were removed (stale artwork, retired partner logos); drop 2027 banner art
// in public/home/awards/ if a designed replacement arrives.
// TODO: publish the full 2027 Worlds-spot breakdown once confirmed.

const QUALIFYING_AWARDS = ["EXCELLENCE", "TOURNAMENT CHAMPIONS", "& MORE"];

const Awards = () => {
    return (
        <div className="relative w-screen sm:h-[80vh] h-[85vh] bg-[#252525] text-white overflow-hidden">
            <figure className="absolute sm:w-[130vw] sm:ml-[16vw] sm:-mt-[5vh] w-[100vw] h-full ml-[5vw] -mt-[10vh] opacity-60">
                <Image
                    src="/home/awards/inverse_cityscape.svg"
                    alt="calgary cityscape silhouette"
                    style={{ objectFit: "cover" }}
                    fill
                    priority
                />
            </figure>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                {/* desktop heading */}
                <header className="hidden sm:flex 2xl:text-8xl xl:text-7xl lg:text-7xl sm:text-8xl font-saira text-center">
                    11 WORLDS SPOTS.
                </header>
                {/* mobile heading */}
                <header className="sm:hidden font-saira flex-col-centered w-full text-5xl">
                    11 WORLDS
                    <span className="text-7xl">SPOTS</span>
                </header>

                <h2 className="2xl:text-5xl xl:text-4xl text-3xl font-bebas tracking-wide mt-4 text-center text-[#A3A3A3]">
                    V5RC HS &amp; MS · VEX IQ · VEX U
                </h2>

                <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-8 gap-5 mt-[6vh]">
                    {QUALIFYING_AWARDS.map((award) => (
                        <div
                            key={award}
                            className="bg-[#E31F2B] -skew-x-12 px-8 py-3"
                        >
                            <span className="block skew-x-12 font-bebas sm:text-4xl text-3xl text-black whitespace-nowrap">
                                {award}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="font-lexend sm:text-lg text-base text-[#A3A3A3] mt-[5vh] text-center sm:w-[40vw] w-[85vw]">
                    Every spot punches a direct ticket to the VEX Robotics
                    World Championships. Full 2027 breakdown coming soon.
                </p>
            </div>
        </div>
    );
};

export default Awards;
