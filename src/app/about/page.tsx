import Link from 'next/link';
import {
  Arrow,
  ContactFinale,
  Experience,
  SectionLabel,
} from '@/components/shared';
import { Motif } from '@/components/motif';
import { pageMetadata, serializeJsonLd } from '@/lib/seo';
import { profile } from '@/content/profile';
export const metadata = pageMetadata(
  'About',
  'Meet Youssef Elhawary, a full-stack software engineer and Alexandria University computer science student with development experience at Auspify Technologies.',
  '/about/',
);
export default function About() {
  return (
    <>
      <section className="shell page-heading">
        <SectionLabel number="ABOUT">A LITTLE MORE CONTEXT</SectionLabel>
        <h1>
          Curious about the details.
          <br />
          <em>Responsible for the whole.</em>
        </h1>
      </section>
      <section className="shell biography">
        <div className="bio-art">
          <Motif />
          <p className="eyebrow">INTERFACE / LOGIC / DATA</p>
        </div>
        <div>
          <p className="lead">
            I’m Youssef Elhawary, a full-stack software engineer based in Egypt.
          </p>
          <p>
            I’m studying computer science at Alexandria University and building
            software across the frontend and backend. My main tools are
            TypeScript, React, Next.js, Node.js, NestJS, and PostgreSQL.
          </p>
          <p>
            I enjoy projects where the problem has several connected parts: who
            can access a record, how a change affects the rest of the system,
            and what the interface should do when something goes wrong.
          </p>
          <p>
            My internship at Auspify Technologies gave me experience working
            across academic workflows, from React screens to API authorization
            and relational data models. My own projects explore job
            marketplaces, geographic discovery, and smaller application
            workflows.
          </p>
          <p>
            I’m looking for opportunities to contribute to useful software,
            learn from other engineers, and take responsibility for work from
            implementation through verification.
          </p>
          <Link className="text-link" href="/work/">
            See how that translates into code <Arrow />
          </Link>
        </div>
      </section>
      <Experience />
      <section className="shell education">
        <SectionLabel number="EDUCATION">THE FOUNDATION</SectionLabel>
        <div>
          <h2>Alexandria University</h2>
          <p>Bachelor’s degree in Computer Science · In progress</p>
          <p className="eyebrow">EXPECTED GRADUATION / 2029</p>
        </div>
      </section>
      <ContactFinale />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            url: `${profile.url}/about/`,
            mainEntity: { '@id': `${profile.url}/#person` },
          }),
        }}
      />
    </>
  );
}
