
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-yellow-200 text-black font-[var(--font-poppins)]">
       
   

        <main className="min-h-screen w-full bg-white">
          {children}
        </main>

      
      </body>
    </html>
  );
}