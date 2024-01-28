import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

const herokid = localFont({ src: "../fonts/Herokid-Regular.otf" });

export const metadata: Metadata = {
  title: "ETHMumbai Studio",
  description: "ETHMumbai Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${herokid.className} bg-theme-bg min-h-screen pt-8 h-full flex flex-col`}
      >
        <div className="px-4 md:px-0">
          <Navbar />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
