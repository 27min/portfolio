"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Layers,
  Rocket,
  Sparkles,
  Sun,
  Moon,
  ChevronUp,
  Link as LinkIcon,
} from "lucide-react";

/**
 * 🔧 사용법
 * - 이 파일을 React 앱의 컴포넌트로 저장 후 <PortfolioApp />를 렌더링하세요.
 * - Next.js라면 app/page.tsx 또는 pages/index.tsx에서 default export로 사용 가능합니다.
 * - TailwindCSS가 있다면 즉시 동작합니다. (없다면 클래스는 무시되지만 기본 구조는 동일)
 * - 섹션/데이터는 아래 DATA 객체만 수정하면 됩니다.
 *
 * ✨ 특징
 * - 섹션: Hero, About, Skills, Archiving, Projects(필터/검색/태그), Career, Footer
 * - 상단 고정 내비 + 섹션 앵커 이동 + 부드러운 스크롤 + 다크모드 토글
 * - 프로젝트 "주요만 보기" 토글, 태그 필터, 텍스트 검색 지원
 * - 접근성 고려(aria-label, 키보드 포커스, skip link)
 */

// ====== 데이터 영역 (여기만 손보면 포트폴리오가 바뀝니다) ======
const DATA = {
  profile: {
    name: "김민석",
    role: "백엔드 개발자 (Node/Spring)",
    tagline: "기능 나열이 아닌 문제 해결 과정을 설계하는 개발자",
    location: "대한민국",
    email: "",
    phone: "",
    summary:
      "JWT·인증 구조/데이터 흐름 설계 경험. 사이드 프로젝트로 멀티테넌시 SaaS를 설계 중이며, 실무에서는 행정/프로젝트 관리 경험을 통해 요구사항 정의와 문서화를 강점으로 삼습니다.",
  },
  archiving: [
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: Github,
      desc: "프로젝트 소스 코드 및 학습 기록",
    },
    {
      label: "Blog/Notion",
      href: "https://www.notion.so/",
      icon: BookOpen,
      desc: "문제 해결 기록, 회고, 트러블슈팅 정리",
    },
  ],
  skills: [
    {
      cat: "Language",
      items: ["Java", "TypeScript", "JavaScript", "SQL"],
      icon: Code2,
    },
    {
      cat: "Backend",
      items: ["Spring Boot", "JPA", "Node.js", "Nest.js", "MySQL", "PostgreSQL"],
      icon: Layers,
    },
    {
      cat: "Frontend",
      items: ["React", "Next.js", "Thymeleaf(SSR)", "Tailwind CSS"],
      icon: Sparkles,
    },
    {
      cat: "Infra/DevOps",
      items: ["Vercel", "Railway", "Docker(학습)", "GitHub Actions(학습)"],
      icon: Rocket,
    },
  ],
  projects: [
    {
      title: "LearnTube – YouTube 기반 LMS",
      date: "2024",
      featured: true,
      summary:
        "YouTube API로 강의 등록/진도 추적, 영상 시간 동기화 노트. SSR에서 비동기 처리 구조 전환 경험.",
      bullets: [
        "템플릿 기반 SSR → REST API + 비동기 전환으로 UX 개선",
        "영상 시청 중 노트 작성, 타임스탬프 저장/점프",
        "Spring Security 기반 인증 및 권한 관리",
      ],
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "YouTube API"],
      tags: ["LMS", "SSR→CSR", "노트", "UX"],
      links: [
        { label: "Repo", href: "#" },
        { label: "README", href: "#" },
      ],
    },
    {
      title: "보이스피싱 판별 모바일 웹",
      date: "2024",
      featured: true,
      summary:
        "JWT 인증 구조를 로컬스토리지 → 쿠키(HTTPOnly)로 전환하여 SSR 환경 새로고침 이슈 해결.",
      bullets: [
        "Access/Refresh 토큰 구조 설계 및 보안성 강화",
        "STT/딥러닝 API 연동 흐름 설계",
        "CORS, 쿠키 보안옵션 적용으로 UX/보안 균형",
      ],
      stack: ["Java", "Spring Boot", "Oracle", "STT API"],
      tags: ["인증", "JWT", "보안", "API연동"],
      links: [
        { label: "Repo", href: "#" },
        { label: "README", href: "#" },
      ],
    },
    {
      title: "코딩테스트 플랫폼 (챗봇 연동)",
      date: "2024",
      featured: false,
      summary:
        "문제 리스트/에디터/채점 흐름 설계. Swagger 도입으로 FE·BE 협업 테스트 효율화.",
      bullets: [
        "REST API 스펙화 + Swagger 기반 사전 테스트",
        "실시간 보조(챗봇) 구조 실험 및 비용 이슈 경험",
      ],
      stack: ["Spring Boot", "React", "MySQL"],
      tags: ["플랫폼", "Swagger", "협업"],
      links: [
        { label: "Repo", href: "#" },
        { label: "README", href: "#" },
      ],
    },
  ],
  career: [
    {
      company: "대한실업",
      role: "연구원 (환경/R&D, 행정)",
      period: "2024 – 2025",
      bullets: [
        "정부과제 문서화/정산/보고 프로세스 경험",
        "현장 조사/데이터 정리 및 산출물 관리",
      ],
    },
    {
      company: "사이드 프로젝트",
      role: "백엔드 개발",
      period: "진행 중",
      bullets: [
        "멀티테넌시 Gym SaaS 설계 (코어/테넌트 DB 메타 구조)",
        "Next.js·Nest.js 기반 서비스 아키텍처 실험",
      ],
    },
  ],
};

// ====== 유틸 ======
const cx = (...cls: string[]) => cls.filter(Boolean).join(" ");
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 },
};

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("__theme_dark");
    if (stored) setDark(stored === "1");
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("__theme_dark", dark ? "1" : "0");
  }, [dark]);
  return { dark, setDark } as const;
}

// ====== 공통 섹션 래퍼 ======
function Section({ id, title, icon: Icon, children }: any) {
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

// ====== 네비게이션 ======
function TopNav() {
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "archiving", label: "Archiving" },
    { id: "projects", label: "Projects" },
    { id: "career", label: "Career" },
  ];
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">민석 · Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="hover:opacity-70">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { dark, setDark } = useTheme();
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="toggle theme"
      className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

// ====== Hero ======
function Hero() {
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
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {p.location}</span>
          {p.email && (
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${p.email}`}><Mail className="h-4 w-4" /> {p.email}</a>
          )}
          {p.phone && (
            <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {p.phone}</span>
          )}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-700 dark:text-neutral-300">{p.summary}</p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90">프로젝트 보러가기</a>
          <a href="#about" className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">자기소개</a>
        </div>
      </motion.div>
    </header>
  );
}

// ====== About ======
function About() {
  const p = DATA.profile;
  const rows = [
    { icon: LinkIcon, label: "이름", value: p.name },
    { icon: BookOpen, label: "역할", value: p.role },
    { icon: MapPin, label: "위치", value: p.location },
  ];
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

// ====== Skills ======
function Skills() {
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

// ====== Archiving ======
function Archiving() {
  return (
    <Section id="archiving" title="ARCHIVING" icon={BookOpen}>
      <div className="grid sm:grid-cols-2 gap-4">
        {DATA.archiving.map((a, i) => (
          <a key={i} href={a.href} target="_blank" rel="noreferrer"
             className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900">
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

// ====== Projects ======
function Projects() {
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
      if (qq && !(`${p.title} ${p.summary} ${p.stack.join(" ")} ${p.tags.join(" ")}`.toLowerCase().includes(qq))) return false;
      return true;
    });
  }, [onlyFeatured, tag, q]);

  return (
    <Section id="projects" title="PROJECTS" icon={Layers}>
      <div className="mb-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-2 text-sm cursor-pointer select-none">
            <input type="checkbox" className="accent-black dark:accent-white" checked={onlyFeatured} onChange={e => setOnlyFeatured(e.target.checked)} />
            주요 프로젝트만 보기
          </label>
          <div className="hidden md:block h-5 w-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="flex flex-wrap gap-2">
            {allTags.map(t => (
              <button key={t} onClick={() => setTag(t)}
                className={cx(
                  "px-3 py-1 rounded-full border text-sm",
                  t === tag
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                )}>{t}</button>
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
          <motion.article key={idx} {...fadeUp}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
            <header className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                <div className="text-sm text-neutral-500 mt-0.5">{p.date}</div>
              </div>
            </header>
            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{p.summary}</p>
            <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">{s}</span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t, i) => (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700">#{t}</span>
              ))}
            </div>
            {p.links?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1 text-sm px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
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

// ====== Career ======
function Career() {
  return (
    <Section id="career" title="CAREER" icon={BriefcaseBusiness}>
      <div className="space-y-4">
        {DATA.career.map((c, idx) => (
          <motion.div key={idx} {...fadeUp}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{c.company}</h3>
                <div className="text-sm text-neutral-500">{c.role}</div>
              </div>
              <div className="text-sm text-neutral-500">{c.period}</div>
            </div>
            <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
              {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 mb-10">
      <div className="max-w-5xl mx-auto px-4 text-sm text-neutral-500 flex items-center justify-between">
        <div>© {new Date().getFullYear()} 김민석</div>
        <a href="#top" className="inline-flex items-center gap-1 hover:underline"><ChevronUp className="h-4 w-4" /> 맨 위로</a>
      </div>
    </footer>
  );
}

// ====== 앱 루트 ======
export default function PortfolioApp() {
  useEffect(() => {
    // 부드러운 스크롤
    if (typeof window !== "undefined") {
      const onClick = (e: any) => {
        const a = e.target.closest("a[href^='#']");
        if (!a) return;
        const id = a.getAttribute("href");
        if (id && id.startsWith("#") && id.length > 1) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:p-2 bg-black text-white rounded">Skip to content</a>
      <TopNav />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Archiving />
        <Projects />
        <Career />
        <Footer />
      </main>
    </div>
  );
}
