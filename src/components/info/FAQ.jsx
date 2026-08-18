import React from "react";
import QA from "./QA";
import Link from "next/link";
import { COMPETITOR_REGISTRATION, SPECTATOR_REGISTRATION_URL } from "@/data/registration";

const FAQ = () => {
  return (
    // #faq is the target of the info hero's jump button (see Info.jsx);
    // scroll-mt-24 keeps the heading clear of the fixed navbar.
    <div id="faq" className="flex-col-centered max-w-screen-lg px-6 z-10 scroll-mt-24">
      <div className="flex-col-centered">
        <h1 className="text-4xl font-saira text-center pb-4">FREQUENTLY ASKED QUESTIONS</h1>
        <figure className="flex-col-centered">
          <div className="flex pt-7 pb-4 border-t-8 border-b-8 border-[#2F2F2F]">
            <div className="flex-col-left text-wrap">
              <span className="font-bebas text-3xl">Q: How do I register for the event?</span>
              <span className="font-lexend text-lg flex-col-left gap-4">
                <p>
                  A: You can sign up for the event{" "}
                  <Link
                    href={SPECTATOR_REGISTRATION_URL}
                    className="text-blue-500 underline"
                  >
                    here
                  </Link>{" "}
                  if you are a spectator. There isn&#39;t any cost; we just use this to help track
                  how many people attend.
                </p>
                <span>
                  If you want to compete, register for Mecha Mayhem 2027 on
                  events.vex.com through your program&#39;s event page:
                </span>
                {COMPETITOR_REGISTRATION.map(({ program, url }) => (
                  <span key={program} className="flex-col-left">
                    <span className="font-bold">{program}:</span>
                    <Link href={url} className="text-blue-500 underline break-all">
                      {url.replace("#general-info", "")}
                    </Link>
                  </span>
                ))}
              </span>
            </div>
          </div>
          <QA
            question={"What days should I attend?"}
            answer={`
                Mecha Mayhem 2027 will take place over three days, from February 12-14, 2027.
                We recommend attending all three days to experience the full event, including team competitions,
                interactive booths, and the award ceremonies.
                Each day offers different activities and opportunities to engage with the event.
                However, if you can only attend one day, we recommend Sunday, February 14, that will feature
                the eliminations bracket and crown the Mecha Mayhem 2027 Champions!`}
          />
          <QA
            question={"Is the event free?"}
            answer={`Yes, all spectators are free to attend Mecha Mayhem 2027.
              We encourage everyone—students, parents, educators, and the general public—to come and explore the exciting
              world of robotics and STEM education.`}
          />
          <QA
            question={"What should I expect at Mecha Mayhem?"}
            answer={`At Mecha Mayhem, you can expect a thrilling robotics competition featuring over 250 teams from around the world. 
              In addition to the matches, the event includes interactive booths from local tech companies and universities,
              opportunities to meet and network with industry professionals, and inspiring showcases of the latest in robotics
              and STEM innovation.
              It's a high-energy environment where innovation and teamwork take center stage.`}
          />
          <QA
            question={"Is there parking at the event?"}
            answer={`Yes, parking is available right next to the BMO Centre — $15 CAD for full-day
              parking with multi-entry. We recommend arriving early to secure a spot,
              as parking can fill up quickly, especially on peak days. Unfortunately, there is no free parking.`}
          />
          <QA
            question={"Where should our team stay?"}
            answer={`We strongly recommend booking one of our partner hotels — Downtown Sandman,
              Homewood Suites, or Hilton Garden Inn. Each has a practice arena set up in its
              conference room for teams to scrim in, and runs complimentary shuttles to and from
              the BMO Centre. Booking links are in the Hotels & Travel section above.`}
          />
          <QA
            question={"What ages is the event for?"}
            answer={`Mecha Mayhem is designed for a wide age range — VEX IQ (ES/MS Blended) welcomes
                elementary and middle school students, V5RC covers middle and high school, and
                VEX U hosts collegiate teams. The event is family-friendly and open to all ages.
                Whether you're a student interested in robotics, a parent supporting your child, or simply curious about STEM, there’s something for everyone at Mecha Mayhem.`}
          />
        </figure>
      </div>
    </div>
  );
};

export default FAQ;
