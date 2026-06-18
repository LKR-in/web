"use client";

import { AuroraBackgroundDemo } from "@/components/demo";
import { About3 } from "@/components/ui/about-3";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { ProjectsGrid } from "@/components/ui/projectsgrid";
import { FireworksBackground } from "@/components/ui/fireworks-show";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <section id="home">
        <AuroraBackgroundDemo />
      </section>

      <section id="about" className="bg-background text-foreground">
        <About3
          title="About Us"
          description="LKR is a passionate team of developers dedicated to crafting innovative tools and projects that empower creators, developers, and businesses alike to thrive in the digital age."
          mainImage={{
            src: "/backgrnd.jpeg",
            alt: "Team collaborating in office",
          }}
          secondaryImage={{
            src: "/logo.gif.gif",
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
            { node: <FaGithub size={32} />, title: "GitHub", href: "https://github.com/lavjeetrai" },
            { node: <FaLinkedin size={32} />, title: "LinkedIn", href: "https://linkedin.com/in/lavjeet-rai/" },
            { node: <FaXTwitter size={32} />, title: "X", href: "https://twitter.com/lavjeetkumarrai" },
            { node: <FaInstagram size={32} />, title: "Instagram", href: "https://instagram.com/being.lavv" },
          ]}
        />
      </section>

      <section id="projects" className="bg-background text-foreground pt-24 pb-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Projects</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              Explore some of our latest open-source tools, products, and contributions.
            </p>
          </div>
          <ProjectsGrid />
        </div>
      </section>

      <section id="donate" className="flex w-full h-screen justify-center items-center bg-black relative border-t border-white/10">
        <FireworksBackground className="w-full h-screen absolute inset-0 z-0" />
        <div className="z-10 text-center flex flex-col items-center">
          <h2 className="text-white text-5xl font-bold mb-4">Support Our Work</h2>
          <p className="text-zinc-400 max-w-md mb-8">
            If you appreciate our open-source tools and would like to support future development, consider making a donation.
          </p>
          <a href="#" className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}
