"use client";

import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Archiving() {
  return (
    <Section id="archiving" title="ARCHIVING" icon={BookOpen}>
      <div className="grid sm:grid-cols-2 gap-4">
        {DATA.archiving.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <div className="flex items-center gap-2">
              <a.icon className="h-5 w-5" />
              <div className="font-semibold">{a.label}</div>
              <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 ml-auto" />
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{a.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
