"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { experiences } from "../data";
import TechBadge from "./techbadge";

const categories = ["All", "Mentorship", "Development", "Leadership"] as const;

export default function Experience() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof categories)[number]>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? experiences
      : experiences.filter((item) => item.category === activeFilter);

  return (
    <section id="experience" className="py-20 bg-neutral-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            Experience &amp; Involvement
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500">
            Click any bento card to smoothly expand outcomes and key highlights.
          </p>

         
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "bg-white text-neutral-600 border border-neutral-200 hover:text-neutral-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="expFilterPill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-neutral-950"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        >
          {filtered.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <motion.div
                layout
                key={item.id}
                onClick={() => setExpandedId(isOpen ? null : item.id)}
                transition={{
                  layout: { type: "spring", stiffness: 320, damping: 28 },
                }}
                className="bg-white rounded-3xl border border-neutral-200/80 p-7 sm:p-8 shadow-2xs hover:border-neutral-300 transition-colors cursor-pointer"
              >
                <motion.div
                  layout="position"
                  className="flex items-center justify-between gap-2"
                >
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-700">
                    {item.category}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </motion.div>

                <motion.h3
                  layout="position"
                  className="mt-4 text-xl sm:text-2xl font-extrabold text-neutral-950"
                >
                  {item.role}
                </motion.h3>

                <motion.div
                  layout="position"
                  className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {item.period}
                  </span>
                </motion.div>

                <motion.p
                  layout="position"
                  className="mt-4 text-sm text-neutral-600 leading-relaxed"
                >
                  {item.summary}
                </motion.p>

               
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-neutral-100 space-y-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                          {item.backTitle}
                        </p>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {item.backDescription}
                        </p>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 pt-1">
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              
                <motion.div
                  layout="position"
                  className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} variant="light" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-400">
                    {isOpen ? "Click to collapse" : "Click to expand"}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
