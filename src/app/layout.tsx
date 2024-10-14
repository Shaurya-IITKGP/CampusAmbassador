
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import React from 'react'
import { MyProvider } from "../components/Context.jsx";
        
        
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaurya Campus Ambassador",
  description: "Join Shaurya and take your career to the next level.",
  keywords: "Shaurya, Campus Ambassador, Career Growth, Leadership, Student Programs , IIT Kharagpur , IIT KGP , IIT kgp",
  openGraph: {
    type: 'website',
    url: 'https://ca.shauryaiitkgp.in',
    title: "Shaurya Campus Ambassador",
    description: "Join Shaurya and take your career to the next level."
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MyProvider>
      <head>
        <link rel="stylesheet" />
        <link
        
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div id="circle" className="circle"></div>

        <Navbar />
        {children}
      
      </body>
      </MyProvider>
    </html>
  );
}
