"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect, ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${
          geistMono.variable
        } antialiased transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </body>
    </html>
  );
}
