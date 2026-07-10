
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://dripbohag.com"),
  title: {
    default: "DripBohag",
    template: "%s | DripBohag",
  },
  description: "Premium fashion store",
  openGraph: {
    title: "DripBohag",
    description: "Shop the latest styles",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DripBohag Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DripBohag",
    description: "Premium fashion store",
    images: ["/og-image.png"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} w-full scroll-smooth`}
    >
      <body className="m-0 p-0 min-w-svw  max-h-svh   relative bg-yellow-200  text-black font-[var(--font-poppins)]">

        {/* 📦 MAIN CONTENT */}
        <main className ="w-full bg-white ">
             <Header prop ={'section'}/>
          {children}
        </main>

           <Footer/>

      </body>
    </html>
  );
}