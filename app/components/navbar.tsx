"use client";

import { useState } from "react";
import {
  Briefcase,
  FolderKanban,
  Compass,
  Wrench,
  Mail,
  Search,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { personalInfo } from "../data";

const navItems = [
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Journey", href: "#journey", icon: Compass },
  { label: "Tools", href: "#tools", icon: Wrench },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        <a
          href="#"
          className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-neutral-900"
        >
          <span className="w-9 h-9 rounded-xl bg-neutral-950 text-white flex items-center justify-center text-base font-black">
            G
          </span>
          <span>{personalInfo.brandName}</span>
        </a>

       
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/90 border border-neutral-200/70 px-2 py-1.5 rounded-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-neutral-600 hover:text-neutral-950 hover:bg-white transition-all"
              >
                <Icon className="w-4 h-4 text-neutral-500" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="#projects"
            aria-label="Jump to Projects"
            className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:bg-neutral-800 transition"
          >
            <Search className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.cvUrl}
            download="Gift_Junior_Ndlovu_CV.pdf"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-200 bg-white text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
          >
            <FileText className="w-4 h-4 text-neutral-600" />
            <span>Resume</span>
          </a>
        </div>

        
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-full bg-neutral-100 text-neutral-900"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100"
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            );
          })}
          <a
            href={personalInfo.cvUrl}
            download="Gift_Junior_Ndlovu_CV.pdf"
            className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-2.5 rounded-full bg-neutral-950 text-white text-sm font-semibold"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
