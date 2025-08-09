"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect, ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } relative`}
      >
        {/* Global video background positioned fixed and behind content */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-50"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content above video */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
