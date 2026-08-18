# Welcome to Mecha Mayhem 2027! 

The Mecha Mayhem V5RC Signature Event will be held at the home of the Calgary Stampede in the BMO Convention Center.

Join the official event Discord! https://discord.gg/fMJSW3Jv4n

# What is Mecha Mayhem?
[![MECHA MAYHEM PROMO VIDEO](https://i.ytimg.com/vi/e-PBs0b2zsc/maxresdefault.jpg)](https://youtu.be/e-PBs0b2zsc)


# About the Event

Welcome to Mecha Mayhem 2027! We aim to bring the best teams from all over Canada and the World to compete and to prepare students for their own State/Provincial Championships and the VEX Robotics World Championship. The event setup is designed to have a "worlds feel" and will provide the teams with the experience of high-level competition! More news to come!

# Event Dates
February 12-14, 2027

# About the Website

The Mecha Mayhem website is a passion project led and created entirely by former robotics students and Mecha Mayhem competitors for the VEX community. Our goal is to provide an engaging platform for participants, fans, and supporters to access all the information they need about the event. Here, you'll find details about the competition schedule, team registrations, division information, live updates during the event, and much more. We strive to ensure that everyone has the best possible experience, whether they are competing, mentoring, or cheering from the sidelines. Thank you for being part of the Mecha Mayhem family, and we look forward to seeing you in February!

---

# Developer Guide

## Tech stack

- **Next.js 14 (App Router)** — plain JavaScript, no TypeScript. Routes live in `src/app/<route>/page.jsx`.
- **TailwindCSS** for all styling (`tailwind.config.js` defines the custom fonts and `flex-*-centered` helpers in `globals.css`).
- **axios** for data fetching from the backend, **framer-motion** for animation, **MUI icons** where needed.
- Deployed on **Vercel** (`vercel.json`).

## Running locally

```bash
npm install
# create .env.local:
#   NEXT_PUBLIC_BACKEND_ENDPOINT=http://localhost:8080
npm run dev
```

Pages that show live data (`/awards`, `/teams`, match schedules) call the companion repo
**Mecha-Mayhem-Backend-2025** — see its README for backend setup. Without the backend
running, those pages degrade to their empty/"coming soon" states; everything else works.

## Project layout

| Path | Purpose |
|---|---|
| `src/app/` | One folder per route (`/`, `/media`, `/streams`, `/awards`, `/info`, `/about`, `/teams`, `/judges`, `/profile`) |
| `src/components/<route>/` | Components grouped by the page that uses them |
| `src/components/ui/` | Shared primitives (`Button`, `Waves` background, etc.) |
| `src/components/nav/Navbar.jsx` | Desktop nav + mobile slide-out menu (see HexNut note below) |
| `src/data/` | **Content-only data files** — most content updates happen here, not in components |

## Content data files (edit these, not the components)

- **`src/data/videos.js`** — past livestreams (`PAST_STREAMS`, keyed by year) and highlight
  videos (`HIGHLIGHTS`) shown on `/streams`. Add YouTube 11-character video IDs from
  [@WestMechRobotics](https://www.youtube.com/@WestMechRobotics); the components render
  whatever is in these arrays.
- **`src/data/albums.js`** — Flickr photo albums per year (`ALBUMS_BY_YEAR`) and the shared
  Google Drive folder shown on `/media`. Album IDs are the long number in a Flickr album URL.
- **`src/data/team.js`** — organizer cards on `/about`. Replace the placeholder entries with
  real names/roles/blurbs; put photos in `public/about/` and set `photo` on each entry.

Search the repo for `TODO:` to find every spot awaiting real 2027 content
(worlds-spot breakdown, merch store link, venue map, registration link, etc.).

## House style

- Fonts: `font-saira` for big page headers, `font-bebas` for numbers/accents, `font-lexend` for body text.
- Colors: black background, red accents `#E31F2B` (sometimes `red-600`), gray text `#A3A3A3`.
- Signature shape: `-skew-x-12` skewed blocks for buttons/labels (see the year selector in
  `src/components/awards/Awards.jsx` or `src/components/home/Stats.jsx`).

## Navbar gotcha: the HexNut

The mobile menu draws a vertical line with a hexnut marker aligned to the active route.
The offsets in `HexNut.getRouteValue()` (`src/components/nav/Navbar.jsx`) are hand-tuned
`vh` values that assume **6 evenly spaced menu rows**. If you add/remove a mobile menu item,
retune every offset in the browser.

## Yearly update checklist (e.g. for 2028)

1. **Backend first**: add the new season's RobotEvents event IDs to `util/maps.js` in the backend repo.
2. Home page: dates/copy in `Hero`, `Calgary`, `Agenda`, stats figures in `home/Stats.jsx`,
   worlds-spot count in `home/Awards.jsx`.
3. `/awards`: add the new year to the year-selector list in `components/awards/Awards.jsx`.
4. `/streams` + `/media`: add the finished season's stream IDs to `data/videos.js` and album IDs to `data/albums.js`.
5. Registration link (`components/nav/Navbar.jsx` mobile menu button + home CTA) → new
   events.vex.com event page.
6. `/info`: FAQ dates, hotel/venue details, agenda times, venue map in `info/Maps.jsx`.
7. Footer year range in `components/footer/Footer.jsx`.