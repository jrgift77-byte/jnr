"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, personalInfo } from "../data";
import TechBadge from "./techbadge";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            Recent Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500">
            Live websites, community platforms, and full-stack applications
            crafted with clean code and purposeful design.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-neutral-200/80 bg-white overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Gradient Header */}
              <div
                className={`p-6 sm:p-7 bg-linear-to-br ${project.accentBg} border-b border-neutral-100`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${project.badgeBg}`}
                  >
                    {project.status}
                  </span>
                  <span className="text-xs font-semibold text-neutral-600">
                    {project.category}
                  </span>
                </div>

                <h3
                  className={`mt-5 text-xl sm:text-2xl font-black tracking-tight ${project.accentText}`}
                >
                  {project.title}
                </h3>

                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-neutral-900 border border-neutral-200/80 text-xs font-semibold transition"
                      >
                        <SiGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs sm:text-sm font-medium text-neutral-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechBadge key={t} name={t} variant="light" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-sm font-semibold text-neutral-900 transition"
          >
            <SiGithub className="w-4 h-4" />
            <span>Explore More on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
