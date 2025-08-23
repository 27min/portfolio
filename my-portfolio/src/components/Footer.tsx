"use client";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 mb-10">
      <div className="max-w-5xl mx-auto px-4 text-sm text-neutral-500 flex items-center justify-between">
        <div>© {new Date().getFullYear()} 김민석</div>
        <a href="#top" className="inline-flex items-center gap-1 hover:underline">
          <ChevronUp className="h-4 w-4" /> 맨 위로
        </a>
      </div>
    </footer>
  );
}
