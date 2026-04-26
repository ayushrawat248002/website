


import "./globals.css";

import Footer from "@/components/Footer";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 

  return (
    <html
      lang="en"
      className={`} w-full scroll-smooth`}
    >
      <body className="m-0 p-0 min-w-svw  max-h-svh   relative bg-yellow-200  text-black ">

        {/* 🔝 HEADER */}
      
        

      
  
        

        {/* 📦 MAIN CONTENT */}
        <main className ="w-full h-[100vh]  bg-white ">
          {children}
             
        </main>
        

          <Footer/>

      </body>
    </html>
  );
}