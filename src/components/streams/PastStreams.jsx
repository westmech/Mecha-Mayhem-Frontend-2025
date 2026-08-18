"use client";

// Past-stream VOD archive on /streams. All content comes from
// src/data/videos.js (PAST_STREAMS) — year tabs are derived from its keys,
// so adding a year or video there is the only change needed. Years with no
// VODs fall back to a "check YouTube" message.
import React, { useState } from "react";
import { PAST_STREAMS, CHANNEL_STREAMS_URL } from "@/data/videos";
import Button from "../ui/Button";

const YEARS = Object.keys(PAST_STREAMS).sort((a, b) => b - a);

const PastStreams = () => {
    const [currentYear, setCurrentYear] = useState(YEARS[0]);
    const videos = PAST_STREAMS[currentYear] ?? [];

    return (
        <section className="relative w-screen flex flex-col items-center bg-transparent pb-24">
            <header className="font-saira sm:text-8xl text-5xl text-center mt-12">
                PAST STREAMS
            </header>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[50vw] w-[85vw] text-center mt-4">
                Relive every match — full stream VODs from previous Mecha
                Mayhem events.
            </p>

            <div className="z-30 flex w-fit space-x-4 p-2 lg:p-4 bg-red-600 -skew-x-12 mx-auto text-black font-lexend mt-8">
                {YEARS.map((year) => (
                    <button
                        key={year}
                        onClick={() => setCurrentYear(year)}
                        className="border border-black px-2 py-1 lg:px-3 lg:py-2 text-xl hover:bg-black hover:text-white transition-all"
                        style={
                            currentYear === year
                                ? { backgroundColor: "black", color: "white" }
                                : {}
                        }
                    >
                        <p className="skew-x-12">{year}</p>
                    </button>
                ))}
            </div>

            {videos.length > 0 ? (
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:w-[80vw] w-[90vw] mt-12">
                    {videos.map(({ videoId, title }) => (
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
            ) : (
                <p className="font-lexend sm:text-xl text-lg text-center sm:w-[50vw] w-[85vw] mt-12 text-[#A3A3A3]">
                    Stream VODs for Mecha Mayhem {currentYear} are on our
                    YouTube channel.
                </p>
            )}

            <Button
                href={CHANNEL_STREAMS_URL}
                className="sm:w-[27vw] w-[80vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-12"
                textClassName="w-full text-center text-4xl z-10 font-bebas text-black"
            >
                ALL STREAMS ON YOUTUBE
            </Button>
        </section>
    );
};

export default PastStreams;
