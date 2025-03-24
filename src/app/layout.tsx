import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/Layout/navbar";
import { MainMenu, SocialMedia } from "@/constants/layout";
import { Footer } from "@/component/Layout/footer";
import ReactLenis from "lenis/react";
import PreventPullToRefresh from "@/component/Layout/preventPullToRefresh";
export { ReactLenis } from "@/lib/lenis"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio | Brilian Natanael Zega",
  description: "Software Engineer specializing in Frontend and Backend application. Building innovative web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <PreventPullToRefresh>
            <NavBar menu={MainMenu} />
            {children}
            <Footer menu={MainMenu} socialMedia={SocialMedia} />
          </PreventPullToRefresh>
        </body>
      </ReactLenis>
    </html>
  );
}
