"use client";

import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

export default function Career() {
  return (
    <Section id="career" title="CAREER" icon={BriefcaseBusiness}>
      <div className="space-y-4">
        {DATA.career.map((c, idx) => (
          <motion.div
            key={idx}
            {...fadeUp}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{c.company}</h3>
                <div className="text-sm text-neutral-500">{c.role}</div>
              </div>
              <div className="text-sm text-neutral-500">{c.period}</div>
            </div>
            <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
              {c.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
