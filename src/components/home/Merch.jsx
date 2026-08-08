"use client";

import React from "react";

export default function Merch() {
    const handleShopClick = () => {
        window.open("https://stores.inksoft.com/mechamayhem/shop/home");
    };

    return (
        <div className="w-screen h-60 bg-black text-white flex items-center justify-center">
            <div className="text-center">

                {/* title */}

                <header className="hidden sm:flex flex-row-centered text-8xl z-10 font-saira w-full">
                    MERCH
                </header>

                {/* description */}
                <p className="text-lg sm:text-xl font-bebas mb-6">
                    Rep your team and support the Mecha!
                </p>

                {/* button for merch */}
                <button
                    onClick={handleShopClick}
                    className="px-8 py-3 bg-white text-black font-bold text-lg hover:bg-red-600 hover:text-white transition duration-100"
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
}
