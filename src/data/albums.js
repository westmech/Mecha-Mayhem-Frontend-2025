// Photo sources for the media page gallery.
export const FLICKR_ACCOUNTS = [
    {
        name: "MERC Media",
        url: "https://www.flickr.com/photos/mercmediateam/albums/",
    },
    {
        name: "Mecha Mayhem Media",
        url: "https://www.flickr.com/photos/204274076@N08/albums/",
    },
];

// Mecha Mayhem 2023 photos (publicly shared Google Drive folder — 2023
// predates the Flickr accounts, so the 2023 tab shows this folder instead).
export const DRIVE_FOLDER = {
    id: "14inhiIuoT9m8c7NgrnxKaQgXcHBYJztr",
    url: "https://drive.google.com/drive/folders/14inhiIuoT9m8c7NgrnxKaQgXcHBYJztr?usp=sharing",
};

// Flickr albums by event year. `user` is the Flickr account path segment,
// `albumId` is the long number in the /albums/<id> URL, and `cover` is the
// album's cover photo (from Flickr's oEmbed API — hotlinking static images
// is allowed; the old /player iframe embeds are broken on Flickr's side).
// To refresh a cover: https://www.flickr.com/services/oembed?url=<album-url>&format=json
// 2023 has no Flickr albums (see DRIVE_FOLDER above) — its empty entry keeps
// the year tab rendered.
export const ALBUMS_BY_YEAR = {
    2026: [
        {
            title: "Mecha Mayhem 2026",
            user: "204274076@N08",
            albumId: "72177720332168239",
            cover: "https://live.staticflickr.com/65535/55109400105_fabe3375eb_b.jpg",
        },
    ],
    2025: [
        {
            title: "Mecha Mayhem 2025",
            user: "204274076@N08",
            albumId: "72177720332268097",
            cover: "https://live.staticflickr.com/65535/55122070388_26011c7ed9_b.jpg",
        },
        {
            title: "Finals & Closing Ceremonies",
            user: "mercmediateam",
            albumId: "72177720323717862",
            cover: "https://live.staticflickr.com/65535/54317797488_a425004d97_b.jpg",
        },
        {
            title: "Opening Ceremonies",
            user: "mercmediateam",
            albumId: "72177720323697154",
            cover: "https://live.staticflickr.com/65535/54313452148_625c90e878_b.jpg",
        },
        {
            title: "Check-in, Inspection & Pre-Show",
            user: "mercmediateam",
            albumId: "72177720323673452",
            cover: "https://live.staticflickr.com/65535/54313126399_f3acbc8f06_b.jpg",
        },
        {
            title: "Practice Matches",
            user: "mercmediateam",
            albumId: "72177720323679176",
            cover: "https://live.staticflickr.com/65535/54312403747_81b5497e5e_b.jpg",
        },
        {
            title: "HS Prairies — Saturday",
            user: "mercmediateam",
            albumId: "72177720323700501",
            cover: "https://live.staticflickr.com/65535/54314702882_af7a60d894_b.jpg",
        },
        {
            title: "HS Prairies — Sunday",
            user: "mercmediateam",
            albumId: "72177720323710385",
            cover: "https://live.staticflickr.com/65535/54317612160_04420d14c5_b.jpg",
        },
        {
            title: "HS Rockies — Saturday",
            user: "mercmediateam",
            albumId: "72177720323714903",
            cover: "https://live.staticflickr.com/65535/54315835989_18cf34fd78_b.jpg",
        },
        {
            title: "HS Rockies — Sunday",
            user: "mercmediateam",
            albumId: "72177720323714881",
            cover: "https://live.staticflickr.com/65535/54316236722_243932d7f7_b.jpg",
        },
        {
            title: "Middle School — Saturday",
            user: "mercmediateam",
            albumId: "72177720323718444",
            cover: "https://live.staticflickr.com/65535/54315822804_2e4384ed2d_b.jpg",
        },
        {
            title: "University — Sunday",
            user: "mercmediateam",
            albumId: "72177720323732439",
            cover: "https://live.staticflickr.com/65535/54317347689_832c5dbc6d_b.jpg",
        },
        {
            title: "The Dome — Saturday",
            user: "mercmediateam",
            albumId: "72177720323718534",
            cover: "https://live.staticflickr.com/65535/54316025405_682e39bccd_b.jpg",
        },
        {
            title: "The Dome — Sunday",
            user: "mercmediateam",
            albumId: "72177720323732604",
            cover: "https://live.staticflickr.com/65535/54317552075_1dd817b2d2_b.jpg",
        },
    ],
    2024: [
        {
            title: "Saturday Afternoon",
            user: "mercmediateam",
            albumId: "72177720314555218",
            cover: "https://live.staticflickr.com/65535/53507491025_8d295ed235_b.jpg",
        },
        {
            title: "Saturday Evening",
            user: "mercmediateam",
            albumId: "72177720314569919",
            cover: "https://live.staticflickr.com/65535/53507704184_ccb522beb4_b.jpg",
        },
        {
            title: "Sunday Morning",
            user: "mercmediateam",
            albumId: "72177720314568553",
            cover: "https://live.staticflickr.com/65535/53508624563_748bfb15d6_b.jpg",
        },
        {
            title: "Elimination Matches",
            user: "mercmediateam",
            albumId: "72177720314573526",
            cover: "https://live.staticflickr.com/65535/53509826516_44f5a48d0d_b.jpg",
        },
        {
            title: "Awards",
            user: "mercmediateam",
            albumId: "72177720314573301",
            cover: "https://live.staticflickr.com/65535/53509809711_874054d511_b.jpg",
        },
    ],
    2023: [],
};

export const flickrAlbumUrl = ({ user, albumId }) =>
    `https://www.flickr.com/photos/${user}/albums/${albumId}`;
