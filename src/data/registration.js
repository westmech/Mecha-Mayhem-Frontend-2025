// 2027 competitor registration links — one events.vex.com event per program.
// Update these each season (see the backend's util/maps.js for the matching
// numeric event IDs used by the API).
export const COMPETITOR_REGISTRATION = [
    {
        program: "V5RC High School",
        short: "V5RC HS",
        url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4355.html#general-info",
    },
    {
        program: "V5RC Middle School",
        short: "V5RC MS",
        url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4356.html#general-info",
    },
    {
        program: "VEX IQ (ES/MS Blended)",
        short: "VEX IQ",
        url: "https://events.vex.com/robot-competitions/vex-iq-competition/RE-VIQRC-26-4485.html#general-info",
    },
    {
        program: "VEX U (Collegiate)",
        short: "VEX U",
        url: "https://events.vex.com/robot-competitions/college-competition/RE-VURC-26-4357.html#general-info",
    },
];

// Free spectator sign-up (attendance tracking only). Update this each season —
// it is the 2027 general-attendance form; the previous value was the 2026 one.
export const SPECTATOR_REGISTRATION_URL =
    "https://www.zeffy.com/en-CA/ticketing/mecha-mayhem-2027-general-attendance";
