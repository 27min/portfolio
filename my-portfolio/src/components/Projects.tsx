"use client";

import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";
import { Layers, ExternalLink } from "lucide-react";
import { fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <Section id="projects" title="PROJECTS" icon={Layers}>
      <div className="grid md:grid-cols-2 gap-4">
        {DATA.projects.map((p, idx) => (
          <motion.article
            key={idx}
            {...fadeUp}
            onClick={() => router.push(`/projects/${p.slug}`)}
            className="cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5"
          >
            <header className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                <div className="text-sm text-neutral-500 mt-0.5">{p.date}</div>
              </div>
            </header>
            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{p.summary}</p>
            <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700"
                >
                  #{t}
                </span>
              ))}
            </div>
            {p.links?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-sm px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  >
                    <ExternalLink className="h-4 w-4" /> {l.label}
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
