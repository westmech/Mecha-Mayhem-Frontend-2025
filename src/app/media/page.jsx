import Media from "@/components/media/Media";
import PhotoAlbums from "@/components/media/PhotoAlbums";
import Waves from "@/components/ui/Waves";
import React from "react";

// The old S3-backed <Gallery /> section was removed — it rendered empty
// (no photos in the bucket). Restore from components/media/Gallery/ if the
// S3 gallery comes back.
const page = () => {
    return (
        <div className="bg-black relative">
            <Waves />
            <Media />
            <PhotoAlbums />
        </div>
    );
};


export default page;
