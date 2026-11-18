import Link from 'next/link';
import {
  Arrow,
  ContactFinale,
  Experience,
  ExpertiseList,
  SectionLabel,
  SelectedWork,
} from '@/components/shared';
import { Motif } from '@/components/motif';
import { AccentLine } from '@/components/motion';
import { pageMetadata } from '@/lib/seo';
import { profile } from '@/content/profile';
export const metadata = pageMetadata(
  'Full-Stack Software Engineer',
  profile.description,
  '/',
);
export default function Home() {
  return (
    <>
      <section className="shell hero" id="home">
        <div className="hero-top">
          <p className="eyebrow">INDEPENDENT SOFTWARE ENGINEER</p>
          <p className="eyebrow">
            <span className="status-dot" />
            BASED IN EGYPT · WORKING EVERYWHERE
          </p>
        </div>
        <div className="hero-composition">
          <div className="hero-name">
            <h1>
              <span>Youssef</span>
              <span className="surname">
                Elhawary<span className="cyan">.</span>
              </span>
            </h1>
            <p className="hero-profession">Full-Stack Software Engineer</p>
          </div>
          <div className="hero-art">
            <Motif />
            <span className="eyebrow motif-caption">
              THE WHOLE SYSTEM, CONSIDERED.
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="hero-index" aria-hidden="true">
            YE / 26
          </span>
          <p>
            I build the interface, the API, and the data model.
            <br className="desktop-break" /> Complete web applications, with
            care for how every part works together.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="#projects">
              Selected work <span aria-hidden="true">↓</span>
            </Link>
            <Link className="text-link" href="/contact/">
              Get in touch <Arrow />
            </Link>
          </div>
        </div>
        <AccentLine />
      </section>
      <SelectedWork />
      <section className="about-preview" id="about">
        <div className="shell about-grid">
          <SectionLabel number="02">THE ENGINEER BEHIND THE WORK</SectionLabel>
          <div>
            <h2>
              I like understanding
              <br />
              how <em>everything connects.</em>
            </h2>
            <div className="about-copy">
              <p>
                I’m Youssef, a software engineer and computer science student at
                Alexandria University. My work spans the parts people interact
                with and the systems that make those interactions possible.
              </p>
              <p>
                From academic records to geographic data, I’m interested in
                making complex workflows feel clear. That means thinking through
                the model, the permissions, and the awkward edge cases—not only
                the finished screen.
              </p>
            </div>
            <Link href="/about/" className="text-link">
              A little more about me <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="shell expertise" id="expertise">
        <SectionLabel number="03">WHAT I BRING TO A PROJECT</SectionLabel>
        <div className="section-intro">
          <h2>
            From first interaction
            <br />
            <em>to final query.</em>
          </h2>
          <Link href="/expertise/" className="text-link">
            Engineering capabilities <Arrow />
          </Link>
        </div>
        <ExpertiseList />
      </section>
      <Experience />
      <ContactFinale />
    </>
  );
}
