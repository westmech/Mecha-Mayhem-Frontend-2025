import Highlights from "@/components/streams/Highlights";
import PastStreams from "@/components/streams/PastStreams";
import Streams from "@/components/streams/Streams";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="sm:relative relative bg-black mt-[64px] min-h-screen">
            <Waves />
            <Streams />
            <PastStreams />
            <Highlights />
        </div>
    );
};

export default page;
