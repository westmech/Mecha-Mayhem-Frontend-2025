import React from "react";
import { COMPETITOR_REGISTRATION } from "@/data/registration";
import Button from "../ui/Button";

// Competitor sign-up section — one button per program, links straight to the
// events.vex.com registration pages (src/data/registration.js).
const Register = () => {
    return (
        <section className="relative w-screen flex flex-col items-center bg-black z-10 py-20">
            <header className="font-saira sm:text-8xl text-5xl text-center">
                COMPETE AT MECHA MAYHEM
            </header>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[55vw] w-[85vw] text-center mt-6">
                Registration is open for all four programs. Sign your team up
                on events.vex.com:
            </p>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 sm:w-[80vw] w-[85vw] mt-12">
                {COMPETITOR_REGISTRATION.map(({ program, short, url }) => (
                    <div key={short} className="flex flex-col items-center">
                        <Button
                            href={url}
                            className="w-full h-16 bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm"
                            textClassName="w-full text-center text-3xl z-10 font-bebas text-black"
                        >
                            {short}
                        </Button>
                        <span className="font-lexend text-sm text-[#A3A3A3] mt-2 text-center">
                            {program}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Register;
