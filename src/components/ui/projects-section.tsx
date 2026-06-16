"use client";

import { motion, type Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    title: "SecureScan",
    desc: "A modern, secure, and ephemeral QR-code generator platform.Send self-destructing text messages or images through beautifully styled QR codes..",
    tag: "Fun Project",
    year: "2025",
    stack: ["TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/LKR-in/SecureScan",
    live: "https://securescanbylav.vercel.app/"
  }
  
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3 flex items-center gap-2.5">
          <span className="inline-block w-5 h-px bg-muted-foreground" />
          Selected Work
        </p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-12 leading-tight">
          Built with <em className="not-italic text-foreground font-medium">purpose</em>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-border/50 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl rounded-xl overflow-hidden group"
          >
            <div className="p-6 pb-0">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-foreground border border-foreground/30 px-2.5 py-1 rounded-sm bg-foreground/5">
                  {project.tag}
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.1em]">
                  {project.year}
                </span>
              </div>
            </div>
            
            <div className="px-6 flex-1">
              <h3 className="text-lg font-medium text-foreground mb-3 leading-snug tracking-tight group-hover:text-muted-foreground transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {project.desc}
              </p>
            </div>

            <div className="pt-5 px-6 flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-[9px] text-muted-foreground bg-secondary/50 border border-border/50 px-2 py-1 rounded tracking-[0.06em]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="p-4 px-6 flex gap-3 border-t border-border/30 mt-6 bg-secondary/10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 text-[10px] font-medium tracking-[0.1em] uppercase py-2.5 px-3 rounded-md border border-border/50 text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:text-foreground hover:bg-secondary/50"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 text-[10px] font-medium tracking-[0.1em] uppercase py-2.5 px-3 rounded-md border border-foreground/30 text-foreground transition-all duration-200 hover:border-foreground hover:bg-foreground/5"
                >
                  <FiExternalLink size={14} />
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
