"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

export default function Section({ id, title, icon: Icon, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <motion.div {...fadeUp} className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          {Icon && <Icon className="h-6 w-6" aria-hidden />}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
