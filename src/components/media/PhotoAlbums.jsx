"use client";

// Photo album browser on /media (#albums anchor). Content comes from
// src/data/albums.js: Flickr album cards per year (cover photo linking out —
// Flickr's iframe player is broken on their side, so we render our own cards).
// 2023 predates the Flickr accounts, so that tab shows the shared Google
// Drive folder instead. The Drive embed only works while the folder is
// shared as "anyone with the link can view".
import React, { useState } from "react";
import Link from "next/link";
import {
    ALBUMS_BY_YEAR,
    FLICKR_ACCOUNTS,
    DRIVE_FOLDER,
    flickrAlbumUrl,
} from "@/data/albums";
import Button from "../ui/Button";

const YEARS = Object.keys(ALBUMS_BY_YEAR).sort((a, b) => b - a);

const PhotoAlbums = () => {
    const [currentYear, setCurrentYear] = useState(YEARS[0]);
    const albums = ALBUMS_BY_YEAR[currentYear] ?? [];

    return (
        <section
            id="albums"
            className="relative w-screen flex flex-col items-center bg-transparent pb-24 z-10 scroll-mt-24"
        >
            <header className="font-saira sm:text-8xl text-5xl text-center mt-12">
                PHOTO ALBUMS
            </header>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[50vw] w-[85vw] text-center mt-4">
                Browse full-resolution photos from every Mecha Mayhem — find
                your team!
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

            {currentYear === "2023" ? (
                <>
                    <p className="font-lexend sm:text-xl text-lg text-center sm:w-[50vw] w-[85vw] mt-12">
                        Photos from Mecha Mayhem 2023 live in our shared
                        Google Drive folder.
                    </p>
                    <div className="sm:w-[80vw] w-[90vw] h-[70vh] border-2 border-white mt-8 bg-white">
                        <iframe
                            src={`https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER.id}#grid`}
                            title="Mecha Mayhem 2023 photos"
                            loading="lazy"
                            className="w-full h-full"
                        />
                    </div>
                    <Button
                        href={DRIVE_FOLDER.url}
                        className="sm:w-[27vw] w-[80vw] h-[8vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-8"
                        textClassName="w-full text-center text-3xl z-10 font-bebas text-black"
                    >
                        OPEN THE SHARED FOLDER
                    </Button>
                </>
            ) : albums.length > 0 ? (
                <div
                    className={
                        albums.length > 1
                            ? "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 sm:w-[80vw] w-[90vw] mt-12"
                            : "grid grid-cols-1 gap-8 sm:w-[40vw] w-[90vw] mt-12"
                    }
                >
                    {albums.map((album) => (
                        <Link
                            key={album.albumId}
                            href={flickrAlbumUrl(album)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col"
                        >
                            <figure className="relative w-full aspect-[4/3] border-2 border-white overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={album.cover}
                                    alt={`${album.title} — album cover`}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <span className="absolute bottom-0 right-0 bg-[#E31F2B] text-black font-bebas text-lg px-3 py-1">
                                    VIEW ON FLICKR
                                </span>
                            </figure>
                            <span className="font-bebas text-2xl mt-2 text-center group-hover:text-[#E31F2B] transition-colors">
                                {album.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="font-lexend sm:text-xl text-lg text-center sm:w-[50vw] w-[85vw] mt-12 text-[#A3A3A3]">
                    Albums from Mecha Mayhem {currentYear} are on our Flickr
                    pages below.
                </p>
            )}

            {currentYear !== "2023" && (
                <div className="flex sm:flex-row flex-col gap-6 mt-12">
                    {FLICKR_ACCOUNTS.map((account) => (
                        <Button
                            key={account.url}
                            href={account.url}
                            className="sm:w-[22vw] w-[80vw] h-[8vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm"
                            textClassName="w-full text-center text-3xl z-10 font-bebas text-black"
                        >
                            {account.name} ON FLICKR
                        </Button>
                    ))}
                </div>
            )}
        </section>
    );
};

export default PhotoAlbums;
