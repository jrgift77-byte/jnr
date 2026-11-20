"use client";

import TechBadge from "./techbadge";

const rowOneTools = [
  "Scratch",
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
];

const rowTwoTools = [
  "Python",
  "Django",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Figma",
  "Canva",
  "VS Code",
  "Git & GitHub",
  "Google Maps API",
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-20 bg-neutral-50/70 border-y border-neutral-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
          Tools &amp; Capabilities
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-md mx-auto">
          Languages, frameworks, and creative apps I use to design interfaces,
          teach coding, and build applications.
        </p>
      </div>

      {/* Dual-Row Seamless Marquee Ticker */}
      <div className="marquee-wrapper mt-12 space-y-4 relative">
        {/* Soft Left & Right Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-neutral-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-neutral-50 to-transparent z-10" />

        {/* Row 1 (Scrolls Left) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left gap-3">
            {[...rowOneTools, ...rowOneTools].map((tool, index) => (
              <div key={`r1-${tool}-${index}`} className="px-1">
                <TechBadge name={tool} variant="pill" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolls Right) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-right gap-3">
            {[...rowTwoTools, ...rowTwoTools].map((tool, index) => (
              <div key={`r2-${tool}-${index}`} className="px-1">
                <TechBadge name={tool} variant="pill" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
