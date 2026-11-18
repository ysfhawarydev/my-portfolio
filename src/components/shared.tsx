import Link from 'next/link';
import { profile, expertise, experience } from '@/content/profile';
import { projects } from '@/content/projects';
import { ProjectVisual } from './project-visual';
export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}
export function ContactFinale() {
  return (
    <section className="contact-finale shell" id="contact">
      <SectionLabel number="05">A CONVERSATION IS A GOOD START</SectionLabel>
      <div className="contact-composition">
        <h2>
          What are
          <br />
          you <em>building?</em>
        </h2>
        <div>
          <p>
            A new product, a difficult feature, or a system that needs a clearer
            path forward. Tell me where you are and what you need.
          </p>
          <a
            className="button button-light"
            href={`mailto:${profile.email}?subject=Let%E2%80%99s%20discuss%20a%20project`}
          >
            Let’s talk <Arrow />
          </a>
        </div>
      </div>
      <a className="email-line" href={`mailto:${profile.email}`}>
        {profile.email}
        <Arrow />
      </a>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="shell footer">
      <Link prefetch={false} href="/" className="footer-name">
        Youssef Elhawary<span>FULL-STACK SOFTWARE ENGINEER</span>
      </Link>
      <div className="footer-links">
        <a href={profile.github}>
          GitHub <Arrow />
        </a>
        <a href={profile.linkedin}>
          LinkedIn <Arrow />
        </a>
        <Link prefetch={false} href="/resume/">
          Resume <Arrow />
        </Link>
      </div>
      <span className="copyright">© 2026 · MADE WITH INTENT</span>
    </footer>
  );
}
export function SelectedWork({ index = false }: { index?: boolean }) {
  return (
    <section
      className={`shell selected-work ${index ? 'work-index' : ''}`}
      id="projects"
    >
      {!index && (
        <>
          <SectionLabel number="01">SELECTED WORK / 2026</SectionLabel>
          <div className="section-intro">
            <h2>
              Depth behind
              <br />
              <em>the interface.</em>
            </h2>
            <p>
              Three projects. Different problems.
              <br />A closer look at how the pieces fit together.
            </p>
          </div>
        </>
      )}
      <div className="project-list">
        {projects.map((project) => (
          <article
            className={`project-entry project-${project.visual}`}
            key={project.slug}
          >
            <Link
              prefetch={false}
              href={`/work/${project.slug}/`}
              className="project-image-link"
            >
              <div aria-hidden="true">
                <ProjectVisual project={project} />
              </div>
              <span className="image-cta">
                Explore {project.name} <Arrow />
              </span>
            </Link>
            <div className="project-description">
              <span className="project-number">/{project.number}</span>
              <div>
                <p className="eyebrow">{project.category}</p>
                <h3>
                  <Link prefetch={false} href={`/work/${project.slug}/`}>
                    {project.name}
                  </Link>
                </h3>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.stack.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <Link
                prefetch={false}
                className="circle-link"
                href={`/work/${project.slug}/`}
                aria-label={`Read about ${project.name}`}
              >
                <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {!index && (
        <Link prefetch={false} className="text-link" href="/work/">
          View the work index <Arrow />
        </Link>
      )}
    </section>
  );
}
export function ExpertiseList() {
  return (
    <div className="expertise-list">
      {expertise.map((item, i) => (
        <article className="expertise-row" key={item.short}>
          <span className="eyebrow">0{i + 1}</span>
          <div>
            <h3>{item.short}</h3>
            <p>{item.body}</p>
            <Link
              prefetch={false}
              className="evidence-link"
              href={`/work/${item.slug}/`}
            >
              {item.evidence} <Arrow />
            </Link>
          </div>
          <p className="expertise-tools">{item.tools}</p>
        </article>
      ))}
    </div>
  );
}
export function Experience() {
  return (
    <section className="shell experience" id="experience">
      <SectionLabel number="04">EXPERIENCE</SectionLabel>
      <div className="experience-row">
        <p className="eyebrow">{experience.dates}</p>
        <div>
          <h2>{experience.company}</h2>
          <p className="role">{experience.role}</p>
          <p>{experience.description}</p>
          <Link
            prefetch={false}
            className="text-link"
            href="/work/student-management-system/"
          >
            Explore the internship project <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
