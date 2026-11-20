export const personalInfo = {
  brandName: "Gift.",
  fullName: "Gift Junior Ndlovu",
  greeting: "Hello, Welcome",
  roles: [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  tagline: "Turning ideas into functional digital experiences.",
  bio: "I design and develop modern web applications that combine clean engineering, thoughtful design, and real-world problem-solving.",
  location: "Zimbabwe",
  email: "jrgift77@gmail.com",
  whatsapp: "+263 718 009 028",
  phone: "+263 780 601 391",
  github: "https://github.com/jrgift77-byte",
  cvUrl: "/cv.pdf",
};

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: "Mentorship" | "Development" | "Leadership";
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  backTitle: string;
  backDescription: string;
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "youth-mentor",
    role: "Youth Coding Mentor",
    organization: "Youth Coding / Community Education",
    category: "Mentorship",
    location: "Zimbabwe",
    period: "Community Initiative",
    summary:
      "Helping children learn programming through Scratch and interactive game development while introducing logical thinking and problem-solving.",
    bullets: [
      "Teaching basic programming concepts through hands-on activities.",
      "Helping young learners design and build simple interactive games.",
      "Encouraging creativity and confidence through technology.",
    ],
    backTitle: "Impact & Teaching Focus",
    backDescription:
      "Strengthened communication, teamwork, and creative problem-solving by translating complex coding logic into fun, accessible game mechanics for beginners.",
    tags: ["Scratch", "WoofJS", "Game Logic", "Mentorship"],
  },
  {
    id: "software-projects",
    role: "Full-Stack Software Developer",
    organization: "Independent & Web Development Projects",
    category: "Development",
    location: "Zimbabwe",
    period: "Ongoing",
    summary:
      "Building responsive web platforms and full-stack applications from concept and Figma wireframes to live deployment.",
    bullets: [
      "Developing modern React and Next.js interfaces styled with Tailwind CSS.",
      "Deploying live websites on Vercel and GitHub Pages.",
      "Designing relational and NoSQL data models with PostgreSQL, MongoDB, and Firebase.",
    ],
    backTitle: "Technical Execution",
    backDescription:
      "Focused on clean component architecture, responsive mobile-first layouts, and real-world community and hospitality web solutions.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "budget-city",
    role: "Community Sports Leadership",
    organization: "Budget City Juniors",
    category: "Leadership",
    location: "Chidobe, Zimbabwe",
    period: "Active",
    summary:
      "Involved in youth sports development, community coordination, digital branding, and sports management platform planning.",
    bullets: [
      "Supporting local youth football and netball activities.",
      "Organizing match fixtures, team profiles, and digital sports content.",
      "Exploring web platforms to improve community sports visibility.",
    ],
    backTitle: "Community Digital Presence",
    backDescription:
      "Bridging grassroots youth athletics with modern web tools so players, coaches, and supporters can easily access club news and fixtures.",
    tags: ["HTML5", "CSS3", "JavaScript", "Digital Branding"],
  },
  {
    id: "ui-ux-creator",
    role: "UI/UX & Digital Solutions Creator",
    organization: "Freelance & Concept Design",
    category: "Development",
    location: "Remote / Zimbabwe",
    period: "Ongoing",
    summary:
      "Creating user-friendly interfaces, interactive prototypes, visual branding assets, and location-aware application concepts.",
    bullets: [
      "Wireframing and prototyping user journeys in Figma and Canva.",
      "Integrating mapping and location concepts using Google Maps API.",
      "Applying responsive design principles across mobile and desktop.",
    ],
    backTitle: "Core Areas of Contribution",
    backDescription:
      "Web Development, UI/UX Design, Database Solutions, Application Design, and Coding Education.",
    tags: ["Figma", "Canva", "Google Maps API", "UI/UX Design"],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  accentBg: string;
  accentText: string;
  badgeBg: string;
}

export const projects: ProjectItem[] = [
  {
    id: "jafuta-foundation",
    title: "Jafuta Foundation – Conservation & Community",
    category: "Non-Profit • Web Platform",
    status: "Live Website",
    description:
      "A modern organizational web platform showcasing community upliftment, cultural heritage preservation, and conservation initiatives in Zimbabwe.",
    highlights: [
      "Clean storytelling layout for conservation & community programs",
      "Responsive component architecture built with Next.js & Tailwind CSS",
      "Version-controlled GitHub workflow & cloud deployment",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "GitHub"],
    liveUrl: "https://jafuta-org.vercel.app/",
    repoUrl: "https://github.com/jrgift77-byte/jafuta.org",
    accentBg: "from-emerald-50 to-teal-100/70",
    accentText: "text-emerald-950",
    badgeBg: "bg-emerald-600 text-white",
  },
  {
    id: "nyamatusi-camp",
    title: "Nyamatusi Camp – Luxury Safari Experience",
    category: "Hospitality • Tourism",
    status: "Live Website",
    description:
      "An immersive safari camp website highlighting luxury eco-accommodation, Zambezi River wildlife experiences, and visual storytelling.",
    highlights: [
      "High-impact visual sections for safari suites & activities",
      "Mobile-first responsive design with smooth navigation",
      "Deployed live on GitHub Pages with semantic markup",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "GitHub"],
    liveUrl: "https://jrgift77-byte.github.io/Nyamatusi/",
    repoUrl: "https://github.com/jrgift77-byte/Nyamatusi",
    accentBg: "from-amber-50 to-orange-100/70",
    accentText: "text-amber-950",
    badgeBg: "bg-amber-600 text-white",
  },
  {
    id: "walksafe",
    title: "WalkSafe – Wildlife Safety App",
    category: "Community Tech • Safety",
    status: "App Concept & Plan",
    description:
      "A community protection and wildlife safety application designed to help rural communities around Victoria Falls stay informed about dangerous wildlife movements.",
    highlights: [
      "Real-time animal sighting reports & map-based alerts",
      "Safe, Moderate & Dangerous route risk indicators",
      "Location sharing & quick-access emergency contacts",
    ],
    tech: ["React", "JavaScript", "Google Maps API", "Figma"],
    accentBg: "from-blue-50 to-indigo-100/70",
    accentText: "text-blue-950",
    badgeBg: "bg-blue-600 text-white",
  },
  {
    id: "taskflow",
    title: "TaskFlow – Productivity To-Do Web App",
    category: "Productivity • Web App",
    status: "Completed App",
    description:
      "A clean, interactive task management web application featuring instant filtering across All, Active, and Completed tasks with responsive controls.",
    highlights: [
      "Interactive task filters (All, Active, Completed)",
      "Accessible UI controls with smooth state updates",
      "Lightweight, fast-loading frontend architecture",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Git"],
    accentBg: "from-purple-50 to-fuchsia-100/70",
    accentText: "text-purple-950",
    badgeBg: "bg-purple-600 text-white",
  },
];
