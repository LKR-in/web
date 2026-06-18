/* eslint-disable */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pt-2 pointer-events-none">
        <div 
          className="inline-block cursor-pointer text-3xl transition-transform duration-300 hover:scale-110 sm:text-4xl pointer-events-auto"
          style={{
            color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
            fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
            textDecoration: "none"
          }}
        >
          LKR
        </div>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </>
  );
}
