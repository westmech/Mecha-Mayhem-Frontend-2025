"use client;"

import React from 'react';
import Link from "next/link";
import Button from "../ui/Button";

const Agenda = () => {
    return (
       <section className="w-screen h-screen overflow-hidden">
            <div className="relative w-screen h-[100vh] bg-gradient-to-l from-[#434343] to-[#000000] text-white flex flex-col items-start justify-start overflow-hidden">

                <div className="absolute w-screen h-screen lg:flex lg:flex-col lg:items-end lg:justify-start flex-col-centered text-5xl">
                    <header className="hidden sm:flex 2xl:text-8xl xl:text-7xl lg:text-7xl sm:text-8xl sm:z-10 sm:ml-16 sm:mt-16 sm:-mr-6 font-saira pr-16">
                        AGENDA.
                    </header>

                    {/* TODO: publish the VEX IQ and VEX U schedules once confirmed */}
                    <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl sm:z-10 lg:ml-20 font-bebas mt-1 sm:pr-16">
                        V5RC · VEX IQ · VEX U — ALL DIVISIONS
                    </h2>

                    <div className="sm:w-auto font-lexend text-lg sm:text-xl lg:flex lg:items-end lg:justify-end flex-col-centered lg:pr-16">
                        {/* Fluid columns — a fixed 450/400/450px grid used to
                            overflow (and clip) at 1440px-wide viewports. */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:text-right text-center lg:w-[85vw] max-w-[1330px] mt-8">
                            <div className="flex flex-col gap-3 lg:items-end items-center">
                                <h3 className="font-bebas sm:text-4xl">
                                    FRIDAY, Feb - 12
                                </h3>
                                <p>10:00 am - Doors Open, Check-in, Inspection, Skills Runs</p>
                                <p>12:30 pm - Pre-Show</p>
                                <p>1:00 pm - Opening Ceremony</p>
                                <p>2:00 pm - Practice Matches Start</p>
                                <p>3:30 pm - Qualification Matches Start</p>
                                <p>6:00 pm - Qualification Matches End</p>
                                <p>7:00 pm - Doors Close</p>
                            </div>

                            <div className="flex flex-col gap-3 lg:items-end items-center">
                                <h3 className="font-bebas sm:text-4xl">
                                    SATURDAY, Feb - 13
                                </h3>
                                <p>8:00 am - Doors Open</p>
                                <p>8:30 am - Qualifications Resume</p>
                                <p>12:00 pm - Lunch Break</p>
                                <p>1:00 pm - Qualifications Resume</p>
                                <p>6:00 pm - Qualifications Matches End</p>
                                <p>7:00 pm - Doors Close</p>
                            </div>

                            <div className="flex flex-col gap-3 lg:items-end items-center">
                                <h3 className="font-bebas sm:text-4xl">
                                    SUNDAY, Feb - 14
                                </h3>
                                <p>9:30 am - Doors Open</p>
                                <p>10:00 am - Qualifications Resume</p>
                                <p>11:00 am - Alliance Selection</p>
                                <p>11:30 am - Lunch Break</p>
                                <p>12:30 pm - Eliminations Starts</p>
                                <p>3:30 pm - Division Finals &amp; Grand Finals</p>
                                <p>4:30 pm - Calgary Stampede Robot Rodeo Game Reveal &amp; Closing/Awards Ceremony</p>
                                <p>5:30 pm - Event Finishes, and Cleanup Starts (plan to leave at around this time)</p>
                            </div>
                        </div>
                        <Button
                            href="https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4355.html#agenda"
                            className="2xl:w-[27vw] 2xl:h-[10vh] lg:w-[30vw] lg:h-[8vh] bg-[#E31F2B] lg:items-end flex-col-centered hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                            iconClassName="flex-row-start relative w-12 h-12"
                            alt="Robotevents Agenda Link"
                            textClassName="flex-row-centered h-full text-center 2xl:text-5xl lg:text-4xl z-10 font-bebas mt-2  text-black hover:text-black transition duration-1000 ease-in-out">
                            View Agenda
                    </Button>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default Agenda;
