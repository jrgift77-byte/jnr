import { Brain, Search, Rocket } from "lucide-react";

const workProcess = [
  {
    step: "01",
    icon: "brain",
    title: "Understand",
    description: "I learn about your goals and define the problem to solve.",
  },
  {
    step: "02",
    icon: "search",
    title: "Explore",
    description: "I research and plan a clear, practical approach.",
  },
  {
    step: "03",
    icon: "rocket",
    title: "Build",
    description: "I build, refine, and deliver a reliable solution.",
  },
];

const iconMap = {
  brain: Brain,
  search: Search,
  rocket: Rocket,
};

export default function HowIWork() {
  return (
    <section className="py-20 bg-neutral-50/70 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            How I Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500">
            A simple process from understanding the problem to building reliable solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {workProcess.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.step}
                className="relative rounded-3xl bg-linear-to-b from-neutral-800 via-neutral-900 to-neutral-950 text-white p-8 min-h-80 flex flex-col justify-end text-center overflow-hidden shadow-sm"
              >
                <span className="absolute top-6 right-6 text-xs font-mono font-bold text-white/30">
                  {item.step}
                </span>

                <div className="mx-auto mb-5 w-12 h-12 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
