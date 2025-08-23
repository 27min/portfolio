"use client";

import { useEffect } from "react";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Archiving from "@/components/Archiving";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Footer from "@/components/Footer";

export default function PortfolioApp() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const onClick = (e: MouseEvent) => {
        const a = (e.target as HTMLElement).closest("a[href^='#']");
        if (!a) return;
        const id = a.getAttribute("href");
        if (id && id.startsWith("#") && id.length > 1) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:p-2 bg-black text-white rounded">
        Skip to content
      </a>
      <TopNav />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Archiving />
        <Projects />
        <Career />
        <Footer />
      </main>
    </div>
  );
}
