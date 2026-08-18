import Image from "next/image";
import React from "react";

const Maps = () => {
    return (
        <div id="maps" className="flex-col-centered w-screen z-10 scroll-mt-24">
            <div className="flex-col-centered w-screen">
                <h1 className="sm:text-8xl text-6xl font-saira sm:w-[70vw] text-center">
                    MAPS AND BROCHURES
                </h1>
                <p className="font-lexend sm:text-xl text-base sm:w-[55vw] w-[85vw] text-center mt-6 text-[#A3A3A3]">
                    These are the 2026 venue maps — the 2027 layout has not been
                    published yet. Check back closer to the event.
                </p>
                {/* TODO: replace with the 2027 venue map once published, and
                    drop the "2026" note above once it is. */}
                <figure className="flex-row-start">
                    <div className="relative sm:w-[55vw] h-[55vw] w-screen">
                        <Image
                            src="/info/visuals/Mecha_2026_Map2.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
                <figure className="flex-row-start">
                    <div className="relative sm:w-[55vw] h-[55vw] w-screen">
                        <Image
                            src="/info/visuals/EntranceInformation.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default Maps;
