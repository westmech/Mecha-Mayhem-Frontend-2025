import MeetTheTeam from "@/components/about/MeetTheTeam";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="relative bg-black mt-[64px] min-h-screen">
            <Waves />
            <MeetTheTeam />
        </div>
    );
};

export default page;
