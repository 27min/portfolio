"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";
import { Layers, ExternalLink } from "lucide-react";
import { cx, fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    DATA.projects.forEach(p => p.tags.forEach(t => set.add(t)));
    return ["전체", ...Array.from(set)];
  }, []);

  const [onlyFeatured, setOnlyFeatured] = useState(true);
  const [tag, setTag] = useState("전체");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return DATA.projects.filter(p => {
      if (onlyFeatured && !p.featured) return false;
      if (tag !== "전체" && !p.tags.includes(tag)) return false;
      const qq = q.trim().toLowerCase();
      if (qq && !(`${p.title} ${p.summary} ${p.stack.join(" ")} ${p.tags.join(" ")}`.toLowerCase().includes(qq)))
        return false;
      return true;
    });
  }, [onlyFeatured, tag, q]);

  return (
    <Section id="projects" title="PROJECTS" icon={Layers}>
      <div className="mb-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-2 text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              className="accent-black dark:accent-white"
              checked={onlyFeatured}
              onChange={e => setOnlyFeatured(e.target.checked)}
            />
            주요 프로젝트만 보기
          </label>
          <div className="hidden md:block h-5 w-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="flex flex-wrap gap-2">
            {allTags.map(t => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={cx(
                  "px-3 py-1 rounded-full border text-sm",
                  t === tag
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="검색: 제목/요약/스택/태그"
          className="w-full md:w-72 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:ring-2 focus:ring-neutral-400"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((p, idx) => (
          <motion.article
            key={idx}
            {...fadeUp}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5"
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
