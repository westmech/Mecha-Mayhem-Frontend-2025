import React from "react";
import { HOTELS, PARKING_NOTE, DISCORD_URL } from "@/data/travel";
import Button from "../ui/Button";

// Hotels & travel section on /info (#hotels anchor). Hotel list and notes
// live in src/data/travel.js.
const Hotels = () => {
    return (
        // mb-36 keeps the Discord call-to-action clear of the FAQ heading that
        // follows this section in Info.jsx
        <section
            id="hotels"
            className="flex-col-centered w-screen z-10 scroll-mt-24 mt-36 mb-36"
        >
            <h1 className="sm:text-8xl text-6xl font-saira sm:w-[70vw] w-full text-center">
                HOTELS &amp; TRAVEL
            </h1>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[55vw] w-[85vw] text-center mt-8">
                Book through our partner hotels — each one has a practice arena
                set up in its conference room for teams to scrim in, plus
                complimentary shuttles to and from the BMO Centre.
            </p>

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 sm:w-[70vw] w-[85vw] mt-12">
                {HOTELS.map((hotel) => (
                    <div
                        key={hotel.name}
                        className="flex flex-col items-center border-2 border-white/20 rounded-xl p-8 backdrop-blur-[10px]"
                    >
                        <span className="font-bebas text-4xl text-center">
                            {hotel.name}
                        </span>
                        <span className="font-lexend text-base text-[#A3A3A3] text-center mt-3">
                            Practice arena · Free venue shuttle
                        </span>
                        <Button
                            href={hotel.url}
                            className="w-full h-14 bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-6"
                            textClassName="w-full text-center text-3xl z-10 font-bebas text-black"
                        >
                            BOOK NOW
                        </Button>
                    </div>
                ))}
            </div>

            <p className="font-lexend sm:text-xl text-lg sm:w-[55vw] w-[85vw] text-center mt-10 text-[#A3A3A3]">
                {PARKING_NOTE}
            </p>

            <p className="font-lexend sm:text-2xl text-lg sm:w-[55vw] w-[85vw] text-center mt-12">
                Questions about travel, housing, or anything else? Join the
                official event Discord — organizers answer there year-round.
            </p>
            <Button
                href={DISCORD_URL}
                className="sm:w-[27vw] w-[80vw] h-[8vh] bg-[#5865F2] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-6"
                textClassName="w-full text-center text-3xl z-10 font-bebas text-black"
            >
                JOIN THE EVENT DISCORD
            </Button>
        </section>
    );
};

export default Hotels;
