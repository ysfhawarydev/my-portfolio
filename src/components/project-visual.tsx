import type { Project } from '@/content/projects';
export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'safaga')
    return (
      <div className="project-visual geo-visual">
        <div className="visual-topline">
          <span>26° N / 33° E</span>
          <span>SAFAGA / RED SEA</span>
        </div>
        <div className="geo-image">
          {/* Prebuilt responsive assets keep static hosting independent of an image server. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/safaga-1440.webp"
            srcSet="/projects/safaga-640.webp 640w, /projects/safaga-960.webp 960w, /projects/safaga-1440.webp 1440w"
            alt="Actual Safaga GeoAtlas interface showing Arabic category filters and clustered places on the coastal map"
            width={1440}
            height={842}
            sizes="(max-width: 700px) 100vw, 70vw"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="visual-bottomline">
          <span>GEOGRAPHIC DATA, MADE EXPLORABLE.</span>
          <span>↗</span>
        </div>
      </div>
    );
  if (project.visual === 'career')
    return (
      <div className="project-visual career-visual">
        <div className="visual-topline">
          <span>CAREERBRIDGE</span>
          <span>WORKFLOW STUDY / 03</span>
        </div>
        <div className="career-title">
          The next
          <br />
          <em>step forward.</em>
        </div>
        <div
          className="career-track"
          role="group"
          aria-label="Implemented application workflow"
        >
          <span>Discover</span>
          <b aria-hidden="true">→</b>
          <span>Apply</span>
          <b aria-hidden="true">→</b>
          <span>Track</span>
        </div>
        <div className="visual-bottomline">
          <span>IMPLEMENTATION DIAGRAM</span>
          <span>SEEKERS ↔ EMPLOYERS</span>
        </div>
      </div>
    );
  return (
    <div className="project-visual lms-visual">
      <div className="visual-topline">
        <span>STUDENT MANAGEMENT SYSTEM</span>
        <span>ARCHITECTURE STUDY / 01</span>
      </div>
      <div className="lms-composition">
        <div className="lms-title">
          Connected
          <br />
          <em>by design.</em>
          <span>ACADEMIC WORKFLOWS / 2026</span>
        </div>
        <div
          className="lms-diagram"
          role="group"
          aria-label="Implemented system architecture"
        >
          <div className="diagram-roles">
            <span>Admin</span>
            <span>Instructor</span>
            <span>Student</span>
          </div>
          <div className="diagram-connector" />
          <div className="diagram-api">
            <span>NestJS API</span>
            <small>JWT + ROLE GUARDS</small>
          </div>
          <div className="diagram-connector" />
          <div className="diagram-data">
            <span>PostgreSQL</span>
            <small>DRIZZLE ORM</small>
          </div>
        </div>
      </div>
      <div className="visual-bottomline">
        <span>REACT / NESTJS / POSTGRESQL</span>
        <span>IMPLEMENTATION DIAGRAM</span>
      </div>
    </div>
  );
}
