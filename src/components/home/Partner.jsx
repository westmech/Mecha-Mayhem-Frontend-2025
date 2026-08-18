import React from "react";
import {
    CONTACT_EMAIL,
    CONTACT_PHONE,
    SPONSOR_MAILTO,
    MEDIA_MAILTO,
} from "@/data/contact";

// Outreach section for prospective sponsors and press, shown directly under
// the sponsor wall on the home page. Addresses live in src/data/contact.js.
const Card = ({ title, blurb, cta, href }) => {
    return (
        <div className="flex flex-col items-center border-2 border-white/20 rounded-xl p-8 backdrop-blur-[10px]">
            <span className="font-bebas text-4xl text-center">{title}</span>
            <p className="font-lexend text-base text-[#A3A3A3] text-center mt-4 flex-grow">
                {blurb}
            </p>
            <a
                href={href}
                className="w-full h-14 bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out flex-row-centered rounded-sm mt-8"
            >
                <h2 className="w-full text-center text-3xl z-10 font-bebas text-black">
                    {cta}
                </h2>
            </a>
        </div>
    );
};

const Partner = () => {
    return (
        <section
            id="partner"
            className="flex-col-centered w-screen z-10 scroll-mt-24 py-24"
        >
            <h1 className="sm:text-8xl text-5xl font-saira sm:w-[70vw] w-full text-center">
                PARTNER WITH US
            </h1>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[55vw] w-[85vw] text-center mt-8">
                Mecha Mayhem brings 250+ teams and thousands of students,
                families, and educators to the BMO Centre every February.
                We&#39;re building the 2027 sponsor roster now — if your company
                wants in, or you&#39;re covering the event, we&#39;d love to
                hear from you.
            </p>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:w-[70vw] w-[85vw] mt-12">
                <Card
                    title="BECOME A SPONSOR"
                    blurb="Sponsorship packages range from supporter to presenting, with booth space, branding across the venue and livestream, and direct access to the next generation of engineers. Reach out and we'll send the 2027 package."
                    cta="SPONSOR THE EVENT"
                    href={SPONSOR_MAILTO}
                />
                <Card
                    title="MEDIA & PRESS"
                    blurb="Reporters, photographers, and outlets looking to cover Mecha Mayhem can request media credentials, interviews with organizers and teams, or our press kit and b-roll footage."
                    cta="REQUEST MEDIA ACCESS"
                    href={MEDIA_MAILTO}
                />
            </div>

            <p className="font-lexend sm:text-xl text-base sm:w-[55vw] w-[85vw] text-center mt-12 text-[#A3A3A3]">
                Prefer to reach us directly? Email{" "}
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-white underline underline-offset-4 decoration-[#E31F2B]"
                >
                    {CONTACT_EMAIL}
                </a>{" "}
                or call{" "}
                <a
                    href={`tel:${CONTACT_PHONE.replace(/-/g, "")}`}
                    className="text-white underline underline-offset-4 decoration-[#E31F2B]"
                >
                    {CONTACT_PHONE}
                </a>
                .
            </p>
        </section>
    );
};

export default Partner;
