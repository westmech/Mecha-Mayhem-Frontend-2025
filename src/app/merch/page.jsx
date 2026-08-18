import MerchStore from "@/components/merch/MerchStore";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="relative bg-black mt-[64px] min-h-screen">
            <Waves />
            <MerchStore />
        </div>
    );
};

export default page;
