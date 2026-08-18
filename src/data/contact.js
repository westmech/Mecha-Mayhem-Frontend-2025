// Outreach contacts surfaced on the home page (components/home/Partner.jsx).
// Both inboxes currently route to the general event address — swap in
// dedicated sponsorship/press addresses here if those get set up.

export const CONTACT_EMAIL = "Mecha@westernmech.ca";
export const CONTACT_PHONE = "403-991-3277";

// Prefilled subject lines so incoming mail is easy to triage.
export const SPONSOR_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Sponsorship inquiry — Mecha Mayhem 2027"
)}`;

export const MEDIA_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Media inquiry — Mecha Mayhem 2027"
)}`;
