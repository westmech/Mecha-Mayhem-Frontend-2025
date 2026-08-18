import Image from "next/image";
import React from "react";
import { TEAM_MEMBERS } from "@/data/team";

const MeetTheTeam = () => {
    return (
        <section className="relative w-screen flex flex-col items-center bg-transparent z-10 pb-24">
            <header className="font-saira sm:text-8xl text-5xl text-center mt-12">
                MEET THE TEAM
            </header>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[55vw] w-[85vw] text-center mt-6">
                Mecha Mayhem is a passion project led and created entirely by
                former robotics students and Mecha Mayhem competitors, for the
                VEX community. From the field crew to this website, everything
                you see is built by people who have stood where you stand.
            </p>

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:w-[70vw] w-[85vw] mt-16">
                {TEAM_MEMBERS.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center border-2 border-white/20 rounded-xl p-8 backdrop-blur-[10px]"
                    >
                        <figure className="relative w-24 h-24 rounded-full border-2 border-[#E31F2B] overflow-hidden flex-row-centered">
                            <Image
                                src={member.photo ?? "/footer/whitebull.svg"}
                                alt={`${member.name} — ${member.role}`}
                                style={{ objectFit: "contain" }}
                                className="p-4"
                                fill
                            />
                        </figure>
                        <span className="font-bebas text-3xl mt-4">
                            {member.name}
                        </span>
                        <span className="font-lexend text-[#E31F2B] text-lg font-semibold">
                            {member.role}
                        </span>
                        {member.blurb && (
                            <p className="font-lexend text-base text-[#A3A3A3] text-center mt-3">
                                {member.blurb}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetTheTeam;
