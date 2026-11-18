import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/content/projects';
import { profile } from '@/content/profile';
import { ProjectVisual } from '@/components/project-visual';
import { Arrow, SectionLabel } from '@/components/shared';
import { pageMetadata, serializeJsonLd } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMetadata(p.name, p.summary, `/work/${p.slug}/`);
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <article className={`case-study case-${p.visual}`}>
      <header className="shell case-heading">
        <Link prefetch={false} className="text-link back-link" href="/work/">
          <span aria-hidden="true">←</span> All work
        </Link>
        <p className="eyebrow">
          /{p.number} · {p.category} · {p.year}
        </p>
        <h1>{p.name}</h1>
        <p className="case-subtitle">{p.headline}</p>
        <div className="case-meta">
          <div>
            <span className="eyebrow">MY ROLE</span>
            <p>{p.role}</p>
          </div>
          <div>
            <span className="eyebrow">STATUS</span>
            <p>{p.status}</p>
          </div>
          <div className="case-links">
            <a className="text-link" href={p.repository}>
              Source code <Arrow />
            </a>
            {p.live && (
              <a className="text-link" href={p.live}>
                Live application <Arrow />
              </a>
            )}
          </div>
        </div>
      </header>
      <figure className="shell case-figure">
        <ProjectVisual project={p} />
        <figcaption>
          {p.visual === 'safaga'
            ? 'Actual application screenshot · Captured November 2026'
            : 'Architecture visualization drawn from the implementation.'}
        </figcaption>
      </figure>
      <div className="shell case-content">
        <section className="case-section">
          <SectionLabel number="01">THE CONTEXT</SectionLabel>
          <div>
            <h2>
              {p.visual === 'safaga'
                ? 'Location changes the decision.'
                : p.visual === 'lms'
                  ? 'The relationships are the system.'
                  : 'Two roles. One connected workflow.'}
            </h2>
            <p>{p.problem}</p>
            <p>{p.approach}</p>
          </div>
        </section>
        <section className="case-section">
          <SectionLabel number="02">UNDER THE SURFACE</SectionLabel>
          <div>
            <h2>How the pieces fit.</h2>
            <ol className="architecture-flow">
              {p.architecture.map((layer, i) => (
                <li key={layer.name}>
                  <span className="eyebrow">0{i + 1}</span>
                  <strong>{layer.name}</strong>
                  <span>{layer.detail}</span>
                </li>
              ))}
            </ol>
            <div className="stack-list">
              {p.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="case-section">
          <SectionLabel number="03">IMPLEMENTED WORKFLOWS</SectionLabel>
          <div className="features-list">
            {p.features.map((feature) => (
              <div key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="case-section">
          <SectionLabel number="04">ENGINEERING DECISIONS</SectionLabel>
          <div>
            {p.decisions.map((decision, i) => (
              <div className="decision" key={decision.title}>
                <span className="decision-index">0{i + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="case-section">
          <SectionLabel number="05">RESULT & SCOPE</SectionLabel>
          <div>
            <h2>What’s there today.</h2>
            <p>{p.outcome}</p>
            <div className="source-links">
              {p.evidence.map((source) => (
                <a href={source.url} key={source.url}>
                  {source.label}
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="shell next-project">
        <p className="eyebrow">NEXT PROJECT / {next.number}</p>
        <Link prefetch={false} href={`/work/${next.slug}/`}>
          {next.name}
          <Arrow />
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'CreativeWork',
                name: p.name,
                description: p.summary,
                url: `${profile.url}/work/${p.slug}/`,
                author: { '@id': `${profile.url}/#person` },
                sameAs: p.repository,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: profile.url,
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Work',
                    item: `${profile.url}/work/`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: p.name,
                    item: `${profile.url}/work/${p.slug}/`,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </article>
  );
}
