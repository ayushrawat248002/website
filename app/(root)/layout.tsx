

import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {bebas,caveat,rockSalt} from '@/lib/font'

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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 

  return (
    <html
      lang="en"
      className={` w-full scroll-smooth`}
    >
      <body className="m-0 p-0 min-w-svw  max-h-svh   relative bg-yellow-200  text-black font-[var(--font-poppins)]">

        {/* 🔝 HEADER */}
      
        

              
             <Header prop={''}/>
             
        

        {/* 📦 MAIN CONTENT */}
        <main className ={`w-full h-full border-none   bg-white ${bebas.className} `}>
          {children}
        
        </main>
            <Footer/>  

          

      </body>
    </html>
  );
}