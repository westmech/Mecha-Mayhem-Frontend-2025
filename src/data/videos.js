// All videos live on the WestMech Robotics YouTube channel.
export const CHANNEL_URL = "https://www.youtube.com/@WestMechRobotics";
export const CHANNEL_STREAMS_URL = "https://www.youtube.com/@WestMechRobotics/streams";

// Full event stream VODs, newest year first. Each entry is
// { videoId, title } where videoId is the 11-character ID from the
// watch URL (youtube.com/watch?v=<videoId>).
// 2023: the channel has no stream VODs from that year (streaming started 2024).
export const PAST_STREAMS = {
    2026: [
        { videoId: "7ltgcEsXg5I", title: "Opening Ceremony" },
        { videoId: "01tyYiamD9k", title: "HS — Rockies Division, Day 1" },
        { videoId: "-0_PXpKpTX8", title: "HS — Rockies Division, Day 2" },
        { videoId: "BtWp7bTf03Q", title: "HS — Rockies Division, Day 3" },
        { videoId: "DlF605eaGAU", title: "MS & University — Prairies & Badlands, Day 1" },
        { videoId: "UChBUnxQiCo", title: "MS & University — Prairies & Badlands, Day 2" },
        { videoId: "2_sg4m6k2ao", title: "MS & University — Prairies & Badlands, Day 3" },
    ],
    2025: [
        { videoId: "YuAmpFTvsm0", title: "Opening Ceremony" },
        { videoId: "OU-lOoyTClI", title: "HS — Rockies Division" },
        { videoId: "314es3R_JKo", title: "HS — Prairies Division, Day 2" },
        { videoId: "YWVnQvgJqjg", title: "MS — Foothills Division" },
        { videoId: "_ZQJQcJDA64", title: "University — Badlands, Day 3" },
        { videoId: "g1uOS3_4aMo", title: "The DOME, Day 2" },
        { videoId: "NCqE2AQtaVI", title: "Prairies Practice Day" },
        { videoId: "JA7Og79qokU", title: "Rockies Practice Day" },
    ],
    2024: [
        { videoId: "-OhkYU0FjJo", title: "Prairies Division, Day 1" },
        { videoId: "PlsL4R3-2v8", title: "Prairies Division, Day 2" },
        { videoId: "9rqeSdv4O5A", title: "Rockies Division, Day 1" },
        { videoId: "4U6Blgs5arg", title: "Rockies Division, Day 2" },
    ],
    2023: [],
};

// Promo / recap videos shown in the highlights section.
export const HIGHLIGHTS = [
    { videoId: "9HYrn5tCmKk", title: "Mecha Mayhem 2027 Trailer" },
    { videoId: "1EhF2h6sqLI", title: "Mecha Mayhem 2025 — Recap & Highlights" },
    { videoId: "I-cQ91MHz3c", title: "Mecha Mayhem 2024 Highlights" },
    { videoId: "e-PBs0b2zsc", title: "Canada's Largest Robotics Tournament" },
    { videoId: "2-zlU1ZHX_k", title: "Mecha Mayhem 2026 Trailer" },
    { videoId: "-OsNzG_zMWM", title: "Mecha Mayhem 2026 Finals Teaser" },
];
