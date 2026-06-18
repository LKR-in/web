import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { SiteDock } from "@/components/ui/site-dock";
import { SiteHeader } from "@/components/ui/site-header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "LKR | Built by Developers, For Everyone",
  description: "LKR is a passionate team of developers dedicated to crafting innovative tools and projects that empower creators and developers to thrive.",
  keywords: ["developers", "tools", "open source", "LKR", "portfolio", "react", "next.js"],
  authors: [{ name: "Lavjeet" }],
  creator: "Lavjeet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lkr-in.vercel.app/",
    title: "LKR | Built by Developers, For Everyone",
    description: "Discover tools that actually help. Built by developers, for everyone.",
    siteName: "LKR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LKR | Built by Developers, For Everyone",
    description: "Discover tools that actually help. Built by developers, for everyone.",
    creator: "@lavjeet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <SiteDock />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
