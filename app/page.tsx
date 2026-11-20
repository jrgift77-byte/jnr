"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Terminal } from "lucide-react";
import { personalInfo } from "./data";

import Navbar from "./components/navbar";
import Experience from "./components/experience";
import Journey from "./components/journey";
import Tools from "./components/tools";
import Projects from "./components/projects";
import HowIWork from "./components/howiwork";
import ContactFooter from "./components/footer";

const terminalTabs = [
  {
    id: "status",
    label: "gift.config.ts",
    code: `export const developer = {
  name: "Gift Junior Ndlovu",
  role: "Full-Stack Developer & UI/UX Designer",
  location: "Zimbabwe",
  availableForWork: true,
};`,
  },
  {
    id: "projects",
    label: "featured.ts",
    code: `export const shippedProjects = [
  "Jafuta Foundation (Next.js • Live)",
  "Nyamatusi Camp (Safari Web • Live)",
  "TaskFlow (Productivity Web App)",
  "WalkSafe (Wildlife Safety Concept)",
];`,
  },
  {
    id: "mission",
    label: "philosophy.ts",
    code: `// Turning ideas into functional digital experiences
export function build(idea: string) {
  return cleanDesign(scalableEngineering(idea));
}`,
  },
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTerminalTab, setActiveTerminalTab] = useState("status");

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentTab =
    terminalTabs.find((tab) => tab.id === activeTerminalTab) || terminalTabs[0];

  return (
    <main className="min-h-screen w-full bg-white text-neutral-950 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-10 sm:pt-16 md:pt-20 overflow-hidden bg-white border-b border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            {personalInfo.greeting}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 leading-[1.08]"
          >
            I&apos;m {personalInfo.fullName}
          </motion.h1>

          <div className="mt-5 sm:mt-6 flex items-center justify-center w-full">
            <div className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-neutral-100 border border-neutral-200/80 flex items-center justify-center overflow-hidden min-w-57.5 sm:min-w-65 max-w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={personalInfo.roles[roleIndex]}
                  initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xs sm:text-sm md:text-base font-bold text-neutral-900 whitespace-nowrap"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base text-neutral-600 leading-relaxed px-2 sm:px-0">
            {personalInfo.tagline} {personalInfo.bio}
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold shadow-sm transition"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5" />
              </span>
              <span>Let&apos;s Work Together</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 text-sm font-semibold transition"
            >
              <span>Explore Projects</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 sm:mt-14 w-full max-w-2xl mx-auto rounded-t-2xl sm:rounded-t-3xl border-t border-x border-neutral-800 bg-neutral-950 text-left text-neutral-100 shadow-xl overflow-hidden"
          >
            <div className="px-3.5 sm:px-4 py-3 bg-neutral-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-neutral-400 ml-2">
                  <Terminal className="w-3.5 h-3.5" />
                  portfolio
                </span>
              </div>

              <div className="order-3 sm:order-2 w-full sm:w-auto flex items-center justify-start sm:justify-center gap-1 bg-white/5 p-1 rounded-full overflow-x-auto">
                {terminalTabs.map((tab) => {
                  const isActive = activeTerminalTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTerminalTab(tab.id)}
                      className={`relative px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono whitespace-nowrap transition cursor-pointer ${
                        isActive
                          ? "text-neutral-950 font-bold"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="terminalActiveTab"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          className="absolute inset-0 rounded-full bg-white"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <span className="order-2 sm:order-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Work
              </span>
            </div>

            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-38.75">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-neutral-200"
                >
                  <code>{currentTab.code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <Experience />
      <Journey />
      <Tools />
      <Projects />
      <HowIWork />
      <ContactFooter />
    </main>
  );
}
