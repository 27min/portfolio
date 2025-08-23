"use client";

import { Link as LinkIcon, BookOpen, MapPin, Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import { DATA } from "@/data/portfolio";

export default function About() {
  const p = DATA.profile;
  const rows = [
    { icon: LinkIcon, label: "이름", value: p.name },
    { icon: BookOpen, label: "역할", value: p.role },
    { icon: MapPin, label: "위치", value: p.location },
    { icon: Mail, label: "이메일", value: p.email },
    { icon: Phone, label: "전화번호", value: p.phone },
  ].filter((r) => r.value);
  return (
    <Section id="about" title="ABOUT ME" icon={LinkIcon}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p>
            본질에 집중하여 문제를 정의하고, 제약을 고려한 실용적인 해결책을 설계합니다.
            기능 나열이 아닌 <b>문제 인식 → 해결 → 결과 → 회고</b>의 서사에 집중합니다.
          </p>
          <p>
            행정/연구 업무 경험을 통해 <b>요구사항 정리·문서화·협업</b> 역량을 갖췄고,
            개인 프로젝트로 <b>멀티테넌시 SaaS</b> 구조를 설계 중입니다.
          </p>
        </div>
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {rows.map((r, i) => (
            <li key={i} className="flex items-center gap-3 p-4">
              <r.icon className="h-5 w-5" />
              <div className="min-w-24 text-sm text-neutral-500">{r.label}</div>
              <div className="font-medium">{r.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
