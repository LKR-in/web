"use client";

import { useRouter } from "next/navigation";
import { Home as HomeIcon, Info, Briefcase, Heart } from "lucide-react";
import Dock from "@/components/ui/Dock";

export function SiteDock() {
  const router = useRouter();

  const dockItems = [
    { icon: <HomeIcon size={18} />, label: 'Home', onClick: () => router.push('/#home') },
    { icon: <Info size={18} />, label: 'About', onClick: () => router.push('/#about') },
    { icon: <Briefcase size={18} />, label: 'Projects', onClick: () => router.push('/#projects') },
    { icon: <Heart size={18} />, label: 'Donate', onClick: () => router.push('/#donate') },
  ];

  return (
    <Dock 
      items={dockItems}
      panelWidth={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}
