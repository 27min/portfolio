"use client";

import { Link as LinkIcon, BookOpen, MapPin, Mail, Phone, Pen, Calendar } from "lucide-react";
import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";

type Row = { icon: React.ComponentType<{ className?: string }>; label: string; value?: string };

export default function About() {
  const p = DATA.profile;
  const rows: Row[] = [
    { icon: LinkIcon, label: "이름", value: p.name },
    { icon: Calendar, label: "생년월일", value: p.birth },
    { icon: MapPin, label: "위치", value: p.location },
    { icon: Mail, label: "이메일", value: p.email },
    { icon: Phone, label: "전화번호", value: p.phone },
    { icon: Pen, label: "학력", value: p.edu },
  ].filter((r) => r.value);

  return (
    <Section id="about" title="ABOUT ME" icon={LinkIcon}>
      {/* 그리드 컨테이너 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rows.map((r, i) => {
          const Icon = r.icon;
          return (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4"
            >
              <Icon className="h-5 w-5 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wide text-neutral-500">{r.label}</div>
                <div className="font-medium break-words">{r.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
