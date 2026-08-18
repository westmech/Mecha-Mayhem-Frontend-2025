import dynamic from "next/dynamic";
import Waves from "@/components/ui/Waves";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Register from "@/components/home/Register";
// Shared with /info — the same section renders on both pages (see
// components/info/Info.jsx). Edit it in one place, it updates both.
import Hotels from "@/components/info/Hotels";

// The <Merch /> teaser (components/home/Merch.jsx) is intentionally not
// rendered while /merch is unpublished — re-add it here alongside the nav
// links when the store goes live.

// Dynamically load components with SSR disabled
const Calgary = dynamic(() => import("@/components/home/Calgary"), { ssr: false });
const Awards = dynamic(() => import("@/components/home/Awards"), { ssr: false });
const Venue = dynamic(() => import("@/components/home/Venue"), { ssr: false });
const Agenda = dynamic(() => import("@/components/home/Agenda"), { ssr: false });
const Sponsors = dynamic(() => import("@/components/home/Sponsors"), { ssr: false });
const Partner = dynamic(() => import("@/components/home/Partner"), { ssr: false });

export default function Home() {
    return (
        <main className="relative w-screen bg-black overflow-x-hidden">
            <Waves />
            <Hero />
            <Stats />
            <Calgary />
            <Awards />
            <Register />
            <Venue />
            <Agenda />
            <Hotels />
            <Partner />
            <Sponsors />
        </main>
    );
}
