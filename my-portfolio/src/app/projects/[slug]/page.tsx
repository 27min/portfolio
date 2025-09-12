import { DATA } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = DATA.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <div className="text-neutral-500 mt-1">{project.date}</div>
      <p className="mt-6 text-sm text-neutral-700 dark:text-neutral-300">{project.summary}</p>
      <ul className="mt-6 space-y-1 text-sm list-disc pl-5">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t, i) => (
          <span
            key={i}
            className="text-[11px] px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700"
          >
            #{t}
          </span>
        ))}
      </div>
      {project.links?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((l, i) => (
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
      <div className="mt-8">
        <Link href="/" className="text-sm text-neutral-500 hover:underline">
          ← Back
        </Link>
      </div>
    </div>
  );
}
