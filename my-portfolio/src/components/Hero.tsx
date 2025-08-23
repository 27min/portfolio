"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";
import { DATA } from "@/data/portfolio";

export default function Hero() {
  const p = DATA.profile;
  return (
    <header id="top" className="pt-12 md:pt-20 pb-8 md:pb-12">
      <motion.div {...fadeUp} className="max-w-5xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Portfolio</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
          {p.name} · {p.role}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
          {p.tagline}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 dark:text-neutral-300">{p.summary}</p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90">프로젝트 보러가기</a>
          <a href="#about" className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">자기소개</a>
        </div>
      </motion.div>
    </header>
  );
}
