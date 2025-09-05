import Matches from "@/components/streams/Matches/Matches";
import Sidebar from "@/components/streams/Matches/Sidebar";
import Streams from "@/components/streams/Streams";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="sm:relative relative bg-black mt-[64px] min-h-screen">
            <Waves />
            <Streams />
            {/* <div className="flex-row-centered w-screen h-[200vh]">
                <Sidebar />
                <Matches />
            </div> */}
        </div>
    );
};

export default page;
