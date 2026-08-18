import React from "react";
import Link from "next/link";

// Home-page teaser for the merch store — the full catalog + Zeffy checkout
// live on /merch.
export default function Merch() {
    return (
        <div className="w-screen h-60 bg-black text-white flex items-center justify-center">
            <div className="text-center">

                {/* title */}

                <header className="flex flex-row-centered sm:text-8xl text-5xl z-10 font-saira w-full">
                    MERCH
                </header>

                {/* description */}
                <p className="text-lg sm:text-2xl font-bebas mb-6 mt-2">
                    Rep your team and support the Mecha!
                </p>

                {/* button for merch */}
                <Link
                    href="/merch"
                    className="inline-block px-10 py-3 bg-[#E31F2B] text-black font-bebas text-2xl tracking-wide hover:bg-white transition duration-100 rounded-sm"
                >
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
}
