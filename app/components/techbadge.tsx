"use client";

import type { ComponentType } from "react";
import {
  SiScratch,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiCanvas,
  SiGit,
  SiGithub,
  SiPostman,
  SiGooglemaps,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Cpu, Globe, Smartphone, Sparkles } from "lucide-react";

interface IconConfig {
  icon: ComponentType<{ className?: string }>;
  color: string;
}

const techIconMap: Record<string, IconConfig> = {
  // Block & Game Programming
  scratch: { icon: SiScratch, color: "text-[#FFAB19]" },
  woofjs: { icon: SiJavascript, color: "text-[#F7DF1E]" },

  // Frontend
  html: { icon: SiHtml5, color: "text-[#E34F26]" },
  html5: { icon: SiHtml5, color: "text-[#E34F26]" },
  "html/css": { icon: SiHtml5, color: "text-[#E34F26]" },
  css: { icon: SiCss, color: "text-[#1572B6]" },
  css3: { icon: SiCss, color: "text-[#1572B6]" },
  javascript: { icon: SiJavascript, color: "text-[#EAB308]" },
  "javascript (es6+)": { icon: SiJavascript, color: "text-[#EAB308]" },
  typescript: { icon: SiTypescript, color: "text-[#3178C6]" },
  react: { icon: SiReact, color: "text-[#087EA4]" },
  "react.js": { icon: SiReact, color: "text-[#087EA4]" },
  "next.js": { icon: SiNextdotjs, color: "text-neutral-950" },
  nextjs: { icon: SiNextdotjs, color: "text-neutral-950" },
  "tailwind css": { icon: SiTailwindcss, color: "text-[#06B6D4]" },

  // Backend & Databases
  python: { icon: SiPython, color: "text-[#3776AB]" },
  django: { icon: SiDjango, color: "text-[#092E20]" },
  "python & django": { icon: SiPython, color: "text-[#3776AB]" },
  "node.js": { icon: SiNodedotjs, color: "text-[#339933]" },
  postgresql: { icon: SiPostgresql, color: "text-[#4169E1]" },
  mongodb: { icon: SiMongodb, color: "text-[#47A248]" },
  firebase: { icon: SiFirebase, color: "text-[#F59E0B]" },
  "rest apis": { icon: Globe, color: "text-emerald-600" },

  // Design & Dev Apps
  figma: { icon: SiFigma, color: "text-[#F24E1E]" },
  canva: { icon: SiCanvas, color: "text-[#00C4CC]" },
  "vs code": { icon: VscVscode, color: "text-[#007ACC]" },
  git: { icon: SiGit, color: "text-[#F05032]" },
  github: { icon: SiGithub, color: "text-neutral-900" },
  "git & github": { icon: SiGithub, color: "text-neutral-900" },
  postman: { icon: SiPostman, color: "text-[#FF6C37]" },
  "google maps api": { icon: SiGooglemaps, color: "text-[#4285F4]" },
  "maps & gps": { icon: SiGooglemaps, color: "text-[#4285F4]" },
  "location services": { icon: SiGooglemaps, color: "text-[#4285F4]" },
  "ui/ux design": { icon: SiFigma, color: "text-[#F24E1E]" },
  "ui/ux prototyping": { icon: SiFigma, color: "text-[#F24E1E]" },
  "ui/ux": { icon: SiFigma, color: "text-[#F24E1E]" },
  prototyping: { icon: Smartphone, color: "text-purple-600" },
};

interface TechBadgeProps {
  name: string;
  variant?: "light" | "dark" | "pill";
}

export default function TechBadge({ name, variant = "light" }: TechBadgeProps) {
  const key = name.trim().toLowerCase();
  const match = techIconMap[key] || {
    icon: key.includes("logic") || key.includes("system") ? Cpu : Sparkles,
    color: variant === "dark" ? "text-amber-300" : "text-neutral-600",
  };

  const Icon = match.icon;

  const styles = {
    light:
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/70 text-xs font-semibold text-neutral-800",
    pill:
      "inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs sm:text-sm font-semibold text-neutral-800 hover:border-neutral-400 hover:bg-white transition",
    dark:
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium text-white",
  };

  return (
    <span className={styles[variant]}>
      <Icon
        className={`w-3.5 h-3.5 shrink-0 ${
          variant === "dark" && match.color === "text-neutral-950"
            ? "text-white"
            : match.color
        }`}
      />
      <span>{name}</span>
    </span>
  );
}
