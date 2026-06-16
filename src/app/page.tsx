"use client";

import { AuroraBackgroundDemo } from "@/components/demo";
import { About3 } from "@/components/ui/about-3";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <section id="home">
        <AuroraBackgroundDemo />
      </section>

      <section id="about" className="bg-background text-foreground">
        <About3
          title="About LKR"
          description="LKR is a passionate team of developers dedicated to crafting innovative tools and projects that empower creators, developers, and businesses alike to thrive in the digital age."
          mainImage={{
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
            alt: "Team collaborating in a modern workspace",
          }}
          secondaryImage={{
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            alt: "Developer working on code",
          }}
          breakout={{
            src: "https://shadcnblocks.com/images/block/block-1.svg",
            alt: "LKR logo",
            title: "Built by developers, for everyone.",
            description:
              "We create tools that simplify complex problems, helping you focus on what truly matters — building great things.",
            buttonText: "Explore Projects",
            buttonUrl: "/projects",
          }}
          companiesTitle="WHERE TO FIND US"
          companies={[
            { node: <FaGithub size={32} />, title: "GitHub", href: "https://github.com" },
            { node: <FaLinkedin size={32} />, title: "LinkedIn", href: "https://linkedin.com" },
            { node: <FaXTwitter size={32} />, title: "X", href: "https://twitter.com" },
            { node: <FaInstagram size={32} />, title: "Instagram", href: "https://instagram.com" },
          ]}
        />
      </section>
    </div>
  );
}
