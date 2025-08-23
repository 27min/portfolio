"use client";

import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

export default function Skills() {
  return (
    <Section id="skills" title="SKILLS" icon={Code2}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DATA.skills.map((s, idx) => (
          <motion.div key={idx} {...fadeUp} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
            <div className="flex items-center gap-2 mb-3">
              <s.icon className="h-5 w-5" />
              <h3 className="font-semibold">{s.cat}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((it, i) => (
                <li key={i} className="text-sm px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">{it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
