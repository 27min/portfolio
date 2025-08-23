"use client";

import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "archiving", label: "Archiving" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
];

export default function TopNav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">민석 · Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="hover:opacity-70">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}
