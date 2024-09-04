
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import Script from "next/script";
import Footer from "@/components/Footer";
        
        
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaurya Campus Ambassador",
  description: "Join Shaury and take your career to next level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/cursor/cursor.css" />
      </head>
      <body className={inter.className}>
        <div id="circle" className="circle"></div>

        <Navbar />
        {children}
        {/* Load cursor JS file using Next.js Script component */}
        <Script
          src="/cursor/cursor.js"
          strategy="afterInteractive"
          // onLoad={() => console.log("Cursor JS loaded")}
          // onError={(e) => console.error("Cursor JS failed to load", e)}
        />
      </body>
    </html>
  );
}
