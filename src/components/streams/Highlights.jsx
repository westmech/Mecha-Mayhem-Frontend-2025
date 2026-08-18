// Highlight-reel section on /streams — renders whatever is in
// HIGHLIGHTS in src/data/videos.js.
import React from "react";
import { HIGHLIGHTS, CHANNEL_URL } from "@/data/videos";
import Button from "../ui/Button";

const Highlights = () => {
    return (
        <section className="relative w-screen flex flex-col items-center bg-transparent pb-24">
            <header className="font-saira sm:text-8xl text-5xl text-center mt-12">
                HIGHLIGHTS
            </header>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[50vw] w-[85vw] text-center mt-4">
                The best moments from Mecha Mayhem, straight from the WestMech
                Robotics channel.
            </p>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:w-[80vw] w-[90vw] mt-12">
                {HIGHLIGHTS.map(({ videoId, title }) => (
                    <figure key={videoId} className="flex flex-col">
                        <div className="w-full aspect-video border-2 border-white">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={title}
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                            />
                        </div>
                        <figcaption className="font-bebas text-2xl mt-2 text-center">
                            {title}
                        </figcaption>
                    </figure>
                ))}
            </div>

            <Button
                href={CHANNEL_URL}
                className="sm:w-[27vw] w-[80vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-12"
                textClassName="w-full text-center text-4xl z-10 font-bebas text-black"
            >
                VISIT OUR CHANNEL
            </Button>
        </section>
    );
};

export default Highlights;
