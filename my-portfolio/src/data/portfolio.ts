import { Github, BookOpen, Code2, Layers, Sparkles, Rocket } from "lucide-react";

export const DATA = {
  profile: {
    name: "김민석",
    role: "백엔드 개발자 (Node/Spring)",
    tagline: "문제 해결과 서비스 품질을 함께 고민하는 백엔드 개발자입니다.",
    location: "대한민국",
    email: "kimms51567115@gmail.com",
    phone: "010-5156-7115",
    summary:
      "Spring Boot와 Node.js 기반으로 API 설계, DB 모델링, 인증·보안 강화에 강점을 가진 백엔드 개발자입니다. JWT 구조 개선과 WebSocket 성능 최적화를 통해 보안성과 응답 속도를 동시에 향상시킨 경험이 있습니다. Swagger 기반 API 문서화를 통한 협업 경험과 Vercel·Railway·AWS 배포 경험을 바탕으로, 안정적이고 확장 가능한 서비스를 지향합니다."
  },
  archiving: [
    {
      label: "GitHub",
      href: "https://github.com/27min",
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
        { label: "README", href: "https://github.com/27min/LearnTube" },
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
        { label: "README", href: "https://github.com/27min" },
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
        { label: "README", href: "https://github.com/27min/CodeChat" },
      ],
    },
    {
      title: "Petstagram - 반려동물 SNS 프로젝트",
      date: "2025",
      featured: false,
      summary:
        "반려동물의 사진과 이야기를 공유할 수 있는 SNS 프로젝트 입니다. 사용자 간 채팅이 가능하며 실시간 위치를 기반으로 주변 반려동물 관련 시설을 검색할 수 있습니다.",
      bullets: [
        "💡 주요 기능",
        "👤 사용자",
        "회원가입 및 로그인 (인증 시스템)",
        "단체/개인 채팅 기능",
        "게시글 등록 / 수정 / 삭제",
        "프로필 이미지 등록 가능",
        "주변 반려동물 관련 시설 검색 가능",
        "인스타 스토리 기능 (24시간 동안 보여짐)",
        "🙋‍♂️ 담당 역할",
        "데이터베이스 설계",
        "JWT 인증 로직 구현",
        "카카오지도 API 연동 및 위치 기반 검색 기능 구현",
        "NaverCloud Storage 연동 및 게시글/프로필 등 사진 저장",
        "실시간 채팅 기능 개발 (WebSocket)",
      ],
      stack: [
        "Spring Boot",
        "React",
        "PostgreSQL",
        "WebSocket",
        "Kakao Maps API",
        "NaverCloud Storage",
      ],
      tags: ["SNS", "WebSocket", "JWT", "Kakao지도", "NaverCloud"],
      links: [
        { label: "Repo", href: "#" },
        { label: "README", href: "https://github.com/27min/Petstagram" },
      ],
    },
  ],
  career: [
    {
      company: "대한실업",
      role: "연구원 (환경/R&D, 행정)",
      period: "2025.05 ~ ",
      bullets: [
        "정부과제 문서화/정산/보고 프로세스 경험",
        "현장 조사/데이터 정리 및 산출물 관리",
      ],
    },
  ],
};

export default DATA;
