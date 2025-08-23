import { Github, BookOpen, Code2, Layers, Sparkles, Rocket } from "lucide-react";

export const DATA = {
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

export default DATA;
