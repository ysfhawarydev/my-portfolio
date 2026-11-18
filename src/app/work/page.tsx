import {
  ContactFinale,
  SectionLabel,
  SelectedWork,
  Arrow,
} from '@/components/shared';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Selected Work',
  'Explore Youssef Elhawary’s software engineering projects: academic management, geographic discovery, and a full-stack job marketplace.',
  '/work/',
);
export default function Work() {
  return (
    <>
      <section className="shell page-heading">
        <SectionLabel number="INDEX">SELECTED ENGINEERING WORK</SectionLabel>
        <h1>
          Different problems.
          <br />
          <em>Connected thinking.</em>
        </h1>
        <p>
          A selection of applications built across the interface, API, and data
          layers. Each study explains what exists, how it works, and the
          decisions behind it.
        </p>
      </section>
      <SelectedWork index />
      <section className="shell smaller-work">
        <SectionLabel number="ALSO">SMALLER EXPLORATIONS</SectionLabel>
        <a href="https://github.com/ysfhawarydev/notes-app-frontend">
          <span>Notes application</span>
          <span>Interface & API integration</span>
          <Arrow />
        </a>
        <a href="https://github.com/ysfhawarydev/Calculator">
          <span>Scientific calculator</span>
          <span>JavaScript fundamentals</span>
          <Arrow />
        </a>
        <p>
          Smaller projects are included for context. The case studies above give
          a fuller view of my engineering work.
        </p>
      </section>
      <ContactFinale />
    </>
  );
}
