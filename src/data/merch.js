// Merch page content (/merch).
//
// PREVIOUS_MERCH: drop real product photos into public/merch/ and set
// `image` (e.g. "/merch/2026-tee.jpg"). Cards render a placeholder graphic
// until an image is set.
// TODO: replace the placeholder items below with the real past products
// (names, photos, prices) — the old InkSoft stores are offline, so photos
// have to come from the organizing team.
export const PREVIOUS_MERCH = [
    { name: "Mecha Mayhem 2026 Event Tee", image: null },
    { name: "Mecha Mayhem 2026 Hoodie", image: null },
    { name: "Mecha Mayhem 2025 Event Tee", image: null },
    { name: "Event Pin Collection", image: null },
];

// Zeffy is the event's payment platform. Create the 2027 merch store form in
// Zeffy, then set its public URL here — the page embeds Zeffy checkout
// directly (Zeffy serves /embed/... with X-Frame-Options: ALLOWALL).
// TODO: replace with the real 2027 merch store form — this currently points
// at the spectator ticketing form ONLY so the embed can be tested end-to-end.
export const ZEFFY_STORE_URL =
    "https://www.zeffy.com/ticketing/7f86c0af-0963-462e-ad8e-c350a9b042ab";

// Turn a public Zeffy form URL into its embeddable variant.
export const zeffyEmbedUrl = (url) =>
    url ? url.replace("zeffy.com/", "zeffy.com/embed/") : null;
