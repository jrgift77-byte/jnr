import { GraduationCap } from "lucide-react";
import TechBadge from "./techbadge";

const learningJourney = [
  {
    stage: "Foundation & Logic",
    institution: "Introduction to Programming",
    detail: "Interactive games, logic & visual programming",
    tools: ["Scratch", "WoofJS"],
  },
  {
    stage: "Frontend & UI/UX",
    institution: "Modern Web & Interface Design",
    detail: "Responsive web interfaces & prototyping",
    tools: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    stage: "Backend & Databases",
    institution: "Full-Stack & Systems Exploration",
    detail: "Server-side APIs & data management",
    tools: ["Python", "Django", "PostgreSQL", "MongoDB", "Firebase"],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-white border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
          Development &amp; Learning Journey
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-500">
          The foundation of how I learn, build, and solve real-world problems.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {learningJourney.map((item) => (
            <div key={item.stage} className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-neutral-100 text-neutral-800 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-neutral-950">
                {item.institution}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500 max-w-xs">
                {item.stage} • {item.detail}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {item.tools.map((tool) => (
                  <TechBadge key={tool} name={tool} variant="light" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
