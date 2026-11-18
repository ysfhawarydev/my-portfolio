import {
  ContactFinale,
  ExpertiseList,
  SectionLabel,
} from '@/components/shared';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Engineering Expertise',
  'Frontend development, APIs, relational data modeling, authentication, testing, and application delivery with TypeScript, React, NestJS, and PostgreSQL.',
  '/expertise/',
);
export default function Expertise() {
  return (
    <>
      <section className="shell page-heading">
        <SectionLabel number="EXPERTISE">
          COMPLETE APPLICATIONS, CONSIDERED
        </SectionLabel>
        <h1>
          The visible.
          <br />
          And <em>the essential.</em>
        </h1>
        <p>
          I work across the interface, API, and data layers. The goal is a
          product whose behavior makes sense all the way through.
        </p>
      </section>
      <section className="shell">
        <ExpertiseList />
      </section>
      <section className="shell services">
        <SectionLabel number="COLLABORATION">WHERE I CAN HELP</SectionLabel>
        <h2>
          A clear scope.
          <br />
          <em>A useful result.</em>
        </h2>
        <div className="services-list">
          <p>Custom web applications and business dashboards</p>
          <p>React and Next.js interfaces</p>
          <p>REST APIs, integrations, and backend workflows</p>
          <p>Existing application improvements and bug fixes</p>
        </div>
        <p className="services-note">
          Start with the workflow you need to improve. We can define the
          features, constraints, and a manageable first milestone from there.
        </p>
      </section>
      <ContactFinale />
    </>
  );
}
