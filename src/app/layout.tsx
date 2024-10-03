
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import React from 'react'
        
        
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
    </html>
  );
}
