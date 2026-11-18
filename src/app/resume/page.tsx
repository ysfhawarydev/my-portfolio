import { Arrow, SectionLabel } from '@/components/shared';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Resume',
  'Read Youssef Elhawary’s verified resume, covering software development experience, TypeScript projects, and computer science education.',
  '/resume/',
);
export default function Resume() {
  return (
    <section className="shell page-heading resume-page">
      <SectionLabel number="RESUME">EXPERIENCE, IN ONE PLACE</SectionLabel>
      <h1>
        The concise
        <br />
        <em>version.</em>
      </h1>
      <p>
        My current resume covers my Auspify Technologies internship, selected
        projects, technical skills, and education. This version emphasizes
        React, Next.js, and TypeScript.
      </p>
      <a
        className="button button-light"
        href="/resume/youssef-elhawary-resume.pdf"
      >
        Open resume PDF <Arrow />
      </a>
      <a
        className="text-link"
        href="/resume/youssef-elhawary-resume.pdf"
        download
      >
        Download a copy <span aria-hidden="true">↓</span>
      </a>
      <p className="eyebrow">UPDATED NOVEMBER 2026 · PDF</p>
    </section>
  );
}
