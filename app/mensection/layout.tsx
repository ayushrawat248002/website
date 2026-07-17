

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 

  return (
    <html
      lang="en"
      className={`w-full scroll-smooth`}
    >
      <body className="m-0 p-0 min-w-svw  max-h-svh   relative  text-black font-[var(--font-poppins)]">

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