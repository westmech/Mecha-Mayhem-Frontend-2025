"use client";

import React from "react";

export default function Merch() {
    const handleShopClick = () => {
        window.open("https://stores.inksoft.com/mecha_mayhem_2026/shop/home", "_blank");
    };

    return (
        <div className="w-screen h-60 bg-black text-white flex items-center justify-center">
            <div className="text-center">

                {/* title */}
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-saira font-bold mb-4">
                    MERCH
                </h2>

                {/* description */}
                <p className="text-lg sm:text-xl font-bebas mb-6">
                    Rep your team and support the Mecha!
                </p>

                {/* button for merch */}
                <button
                    onClick={handleShopClick}
                    className="px-8 py-3 bg-white text-black font-bold text-lg rounded hover:bg-gray-200"
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
}
