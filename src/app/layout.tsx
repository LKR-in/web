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
import { Analytics } from "@vercel/analytics/next";

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
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <footer className="w-full py-8 text-center text-[13px] text-muted-foreground bg-background z-50 relative mt-auto">
            Project Layout & Design by{" "}
            <a
              href="https://github.com/lavjeetrai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              Lavjeet Kumar Rai (@lavjeetrai)
            </a>
          </footer>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
