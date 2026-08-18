import Image from "next/image";
import React from "react";
import General from "./General";
import Maps from "./Maps";
import Hotels from "./Hotels";
import FAQ from "./FAQ";
import Button from "../ui/Button";

const Info = () => {
    return (
        <section className="w-screen flex-col-centered">
            <div className="relative w-screen flex-row-centered bg-transparent">
                <aside className="sm:w-1/2 w-screen">
                    <div className="sm:ml-[11vw] sm:mt-0 mt-24 flex flex-col sm:justify-start sm:items-start justify-center items-center">
                        <header className="font-saira sm:text-[10rem] sm:text-left text-center text-8xl">
                            INFO
                        </header>
                        <p className="font-lexend sm:text-3xl text-xl sm:w-[40vw] w-[80vw] sm:-mt-5">
                            Discover Canada’s Largest Robotics Showdown hosted
                            in the heart of Calgary
                        </p>
                        {/* TODO: swap in the 2027 event brochure render once designed
                            (the old brochureElement.png showed the 2024 brochure and
                            retired partner logos) */}
                        <figure className="sm:hidden flex flex-row-start">
                            <div className="relative w-[100vw] h-[60vw] mt-12">
                                <Image
                                    src="/home/hero/Medallion.svg"
                                    alt="Mecha Mayhem medallion"
                                    style={{ objectFit: "contain" }}
                                    fill
                                />
                            </div>
                        </figure>
                        <Button
                            href="#faq"
                            className="sm:w-[34vw] w-[85vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                            iconClassName="flex-row-start relative w-12 h-12 shrink-0"
                            src="/info/navico.svg"
                            alt="mecha mayhem logo"
                            textClassName="ml-2 text-center sm:text-4xl text-3xl z-10 font-bebas text-black hover:text-black transition duration-1000 ease-in-out whitespace-nowrap">
                            FREQUENTLY ASKED QUESTIONS
                        </Button>
                    </div>
                </aside>

                <figure className="sm:flex hidden flex-row-start">
                    <div className="relative w-[30vw] h-[40vw] mt-12 ml-12">
                        <Image
                            src="/home/hero/Medallion.svg"
                            alt="Mecha Mayhem medallion"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
            <General />
            <Maps />
            <Hotels />
            <FAQ />
        </section>
    );
};

export default Info;
