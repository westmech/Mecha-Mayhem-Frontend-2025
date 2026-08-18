import Image from "next/image";
import React from "react";
import {
    PREVIOUS_MERCH,
    ZEFFY_STORE_URL,
    zeffyEmbedUrl,
} from "@/data/merch";
import Button from "../ui/Button";

// /merch page: previous merch gallery + embedded Zeffy checkout.
// Content comes from src/data/merch.js.
const MerchStore = () => {
    const embedUrl = zeffyEmbedUrl(ZEFFY_STORE_URL);

    return (
        <section className="relative w-screen flex flex-col items-center bg-transparent z-10 pb-24">
            <header className="font-saira sm:text-8xl text-5xl text-center mt-12">
                MERCH
            </header>
            <p className="font-lexend sm:text-2xl text-lg sm:w-[55vw] w-[85vw] text-center mt-4">
                Rep your team and support the Mecha! Order online below —
                pick up at the event.
            </p>

            <h2 className="font-saira sm:text-6xl text-4xl text-center mt-16">
                PREVIOUS DROPS
            </h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 sm:w-[80vw] w-[85vw] mt-10">
                {PREVIOUS_MERCH.map((item) => (
                    <figure key={item.name} className="flex flex-col items-center">
                        <div className="relative w-full aspect-square border-2 border-white/40 bg-[#171717] flex-row-centered overflow-hidden">
                            {item.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="relative w-1/2 h-1/2 opacity-40">
                                    <Image
                                        src="/footer/whitebull.svg"
                                        alt="merch photo coming soon"
                                        style={{ objectFit: "contain" }}
                                        fill
                                    />
                                </div>
                            )}
                        </div>
                        <figcaption className="font-bebas text-2xl mt-2 text-center">
                            {item.name}
                        </figcaption>
                    </figure>
                ))}
            </div>
            <p className="font-lexend text-base text-[#A3A3A3] mt-4 text-center sm:w-[50vw] w-[85vw]">
                Product photos coming soon — check back for the 2027 drop!
            </p>

            <h2 id="order" className="font-saira sm:text-6xl text-4xl text-center mt-20 scroll-mt-24">
                ORDER ONLINE
            </h2>
            {embedUrl ? (
                <>
                    <p className="font-lexend sm:text-xl text-lg sm:w-[50vw] w-[85vw] text-center mt-4">
                        Checkout is powered by Zeffy — 100% of your payment
                        goes to the event.
                    </p>
                    <div className="sm:w-[70vw] w-[92vw] h-[120vh] border-2 border-white mt-8 bg-white">
                        <iframe
                            src={embedUrl}
                            title="Mecha Mayhem merch store checkout"
                            allow="payment"
                            loading="lazy"
                            className="w-full h-full"
                        />
                    </div>
                    <Button
                        href={ZEFFY_STORE_URL}
                        className="sm:w-[27vw] w-[80vw] h-[8vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm mt-8"
                        textClassName="w-full text-center text-3xl z-10 font-bebas text-black"
                    >
                        OPEN CHECKOUT IN A NEW TAB
                    </Button>
                </>
            ) : (
                <p className="font-lexend sm:text-xl text-lg sm:w-[50vw] w-[85vw] text-center mt-4 text-[#A3A3A3]">
                    The 2027 online store opens soon — follow our socials for
                    the drop announcement!
                </p>
            )}
        </section>
    );
};

export default MerchStore;
