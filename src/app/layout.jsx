import { Saira_Stencil_One, Bebas_Neue, Lexend_Deca } from "next/font/google";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { AuthProvider } from "@/components/context/AuthContext";
import { TeamProvider } from "@/components/context/TeamsContext";

const lexend = Lexend_Deca({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    display: "swap",
    variable: "--font-lexend"
});
const saira = Saira_Stencil_One({
    subsets: ["latin"],
    weight: ["400"],
    display: 'swap',
    variable: "--font-saira",
});
const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    display: 'swap',
    variable: "--font-bebas",
});

const title = "Mecha Mayhem | Canada's Largest Robotics Competition";
const description =
    "Mecha Mayhem 2027 — Canada's largest VEX Robotics signature event, February 12-14, 2027 at the BMO Centre in Calgary, Alberta.";

export const metadata = {
    metadataBase: new URL("https://www.mechamayhem.ca"),
    title,
    description,
    openGraph: {
        title,
        description,
        url: "/",
        siteName: "Mecha Mayhem",
        type: "website",
        locale: "en_CA",
        images: [{ url: "/HexLogo.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/HexLogo.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${lexend.variable} ${saira.variable} ${bebas.variable} tracking-tight bg-black hide-scrollbar text-white w-[100vw] overflow-x-hidden`}
            >
                <AuthProvider>
                    <TeamProvider>
                        <Navbar />
                        {children}
                        <Footer />
                    </TeamProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
