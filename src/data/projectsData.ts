import type { ComponentType } from "react";
import { Network, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiRubyonrails,
  SiGo,
  SiRust,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiNetlify,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiOpenai,
  SiHuggingface,
  SiGit,
  SiFigma,
  SiWebpack,
  SiVite,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama"
  | "vue" | "angular" | "svelte" | "html" | "js" | "mui" | "express" | "nestjs" | "django" | "flask"
  | "rails" | "go" | "rust" | "spring" | "php" | "laravel" | "postgres" | "mysql" | "sqlite" | "mongo"
  | "firebase" | "supabase" | "docker" | "k8s" | "vercel" | "netlify" | "linux" | "tf" | "pytorch"
  | "pandas" | "openai" | "hf" | "git" | "figma" | "webpack" | "vite";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
  creator?: {
    name: string;
    github: string;
  };
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta, vue: SiVuedotjs, angular: SiAngular, svelte: SiSvelte,
  html: SiHtml5, js: SiJavascript, mui: SiMui, express: SiExpress, nestjs: SiNestjs,
  django: SiDjango, flask: SiFlask, rails: SiRubyonrails, go: SiGo, rust: SiRust,
  spring: SiSpringboot, php: SiPhp, laravel: SiLaravel, postgres: SiPostgresql, mysql: SiMysql,
  sqlite: SiSqlite, mongo: SiMongodb, firebase: SiFirebase, supabase: SiSupabase, docker: SiDocker,
  k8s: SiKubernetes, vercel: SiVercel, netlify: SiNetlify, linux: SiLinux, tf: SiTensorflow,
  pytorch: SiPytorch, pandas: SiPandas, openai: SiOpenai, hf: SiHuggingface, git: SiGit,
  figma: SiFigma, webpack: SiWebpack, vite: SiVite,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA", vue: "Vue.js", angular: "Angular",
  svelte: "Svelte", html: "HTML5", js: "JavaScript", mui: "Material UI", express: "Express.js",
  nestjs: "NestJS", django: "Django", flask: "Flask", rails: "Ruby on Rails", go: "Go",
  rust: "Rust", spring: "Spring Boot", php: "PHP", laravel: "Laravel", postgres: "PostgreSQL",
  mysql: "MySQL", sqlite: "SQLite", mongo: "MongoDB", firebase: "Firebase", supabase: "Supabase",
  docker: "Docker", k8s: "Kubernetes", vercel: "Vercel", netlify: "Netlify", linux: "Linux",
  tf: "TensorFlow", pytorch: "PyTorch", pandas: "Pandas", openai: "OpenAI", hf: "Hugging Face",
  git: "Git", figma: "Figma", webpack: "Webpack", vite: "Vite",
};

export const projectsData: Project[] = [
 
  {
    slug: "learnx",
    title: "LearnX",
    imageTitle: "Smart Classroom Interface",
    src: "/learnx.png",
    lightModeSrc: "/project-image/learnx.png",
    video: "",
    description: "An AI-integrated smart classroom prototype designed to enhance educational workflows and interactive learning environments.",
    tech: ["node","ts","react"],
    github: "https://github.com/lavjeetrai",
    live: "https://expo1student.vercel.app/",
    backgroundImage: "/project1-bg.jpg",
    hasPin: true,
    creator: {
      name: "Lavjeet Kumar Rai",
      github: "https://github.com/lavjeetrai",
    },
  },
  {
    slug: "securescan",
    title: "SecureScan",
    imageTitle: "Encrypted QR Interface",
    src: "/securescan.png",
    lightModeSrc: "/project-image/securescan.png",
    video: "",
    description: "A privacy-focused web application that generates encrypted QR codes from text inputs, optimized specifically for a 200-word capacity limit to ensure maximum processing efficiency.",
    tech: ["react", "ts",  "tailwind"],
    github: "https://github.com/lavjeetrai",
    live: "https://securescanbylav.vercel.app/",
    backgroundImage: "/project2-bg.jpg",
    hasPin: true,
    creator: {
      name: "Lavjeet Kumar Rai",
      github: "https://github.com/lavjeetrai",
    },
  },
];

export const originalCreator = {
  name: "Lavjeet Kumar Rai",
  id: "@lavjeetrai",
  github: "https://github.com/lavjeetrai",
};
