export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  headline: string;
  role: string;
  status: string;
  stack: string[];
  repository: string;
  live?: string;
  visual: 'lms' | 'safaga' | 'career';
  problem: string;
  approach: string;
  architecture: { name: string; detail: string }[];
  features: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  outcome: string;
  evidence: { label: string; url: string }[];
};
export const projects: Project[] = [
  {
    slug: 'student-management-system',
    number: '01',
    name: 'Student Management System',
    category: 'Full-stack / Education',
    year: '2026',
    visual: 'lms',
    summary:
      'Academic workflows connected across students, instructors, and administrators.',
    headline: 'One academic system. Three different perspectives.',
    role: 'Full-stack development · Internship project',
    status: 'Implemented core workflows · Active development',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Drizzle ORM',
      'Vitest',
    ],
    repository: 'https://github.com/ysfhawarydev/learning-management-system',
    problem:
      'Academic records are deeply connected. An enrollment belongs to a student and a course offering; attendance and grades depend on that enrollment. Each person needs access to a different part of the same information.',
    approach:
      'I worked across the React frontend, NestJS API, and PostgreSQL schema during my internship at Auspify Technologies. The system separates administration, teaching, and student workflows while keeping permission checks in the API.',
    architecture: [
      { name: 'React', detail: 'Role-specific workspaces' },
      { name: 'NestJS', detail: 'JWT guards · Feature modules' },
      { name: 'PostgreSQL', detail: 'Typed schema with Drizzle' },
    ],
    features: [
      {
        title: 'Role-specific access',
        body: 'JWT authentication and role guards protect endpoints for administrators, instructors, and students. Pending registrations have an administrator approval workflow.',
      },
      {
        title: 'Connected academic records',
        body: 'Departments, semesters, courses, and course offerings form the basis for enrollments, attendance, and grades.',
      },
      {
        title: 'Student self-service',
        body: 'Dedicated endpoints expose the signed-in student’s profile, courses, attendance, and grades without requiring a client-supplied student identity.',
      },
      {
        title: 'Assignments & assessment',
        body: 'Modules cover assignments, submissions, quizzes, and grading alongside the core academic records.',
      },
    ],
    decisions: [
      {
        title: 'Authorization belongs behind the interface.',
        body: 'A hidden navigation item is not an access-control boundary. Student routes derive identity from the verified JWT, while administrative routes declare the required role.',
      },
      {
        title: 'Protect relationships in the database.',
        body: 'The enrollment schema prevents duplicate student–course-offering pairs with a unique constraint. Restricted deletes protect related records from being removed accidentally.',
      },
      {
        title: 'A shared repository, separate responsibilities.',
        body: 'npm workspaces keep frontend and backend changes together. NestJS feature modules organize the API around academic responsibilities rather than one large controller.',
      },
    ],
    outcome:
      'The repository contains the academic modules, role-specific frontend workspaces, migrations, and automated tests. It remains an evolving internship project; this case study does not claim a completed production rollout.',
    evidence: [
      {
        label: 'Project overview & implementation status',
        url: 'https://github.com/ysfhawarydev/learning-management-system',
      },
      {
        label: 'Student endpoint authorization',
        url: 'https://github.com/ysfhawarydev/learning-management-system/blob/chore/npm-workspaces-monorepo/backend/src/modules/students/students.controller.ts',
      },
      {
        label: 'Enrollment constraints',
        url: 'https://github.com/ysfhawarydev/learning-management-system/blob/chore/npm-workspaces-monorepo/backend/src/database/schema/enrollments.ts',
      },
    ],
  },
  {
    slug: 'safaga-geoatlas',
    number: '02',
    name: 'Safaga GeoAtlas',
    category: 'Interactive GIS / Discovery',
    year: '2026',
    visual: 'safaga',
    summary:
      'A bilingual view of the Red Sea coast, through geographic data and interactive maps.',
    headline: 'From geographic records to a place worth exploring.',
    role: 'Frontend development · Geographic data & interaction',
    status: 'Live application',
    stack: [
      'React',
      'TypeScript',
      'MapLibre GL JS',
      'GeoJSON',
      'Recharts',
      'Vite',
    ],
    repository: 'https://github.com/ysfhawarydev/safaga-pulse',
    live: 'https://safaga-pulse.vercel.app',
    problem:
      'A list of hotels and activities is useful, but location changes the decision. Visitors need to see places together, narrow the options, and understand what is nearby without losing the original geographic context.',
    approach:
      'I built an Arabic-first discovery interface with an English option, combining a map explorer, place directory, analytics, and hotel-to-activity planning. The application uses bundled geographic data and runs without an application backend.',
    architecture: [
      { name: 'GeoJSON', detail: 'Local place records' },
      { name: 'React', detail: 'Filters · Directory · Planner' },
      { name: 'MapLibre', detail: 'Map layers · Selection · Clusters' },
    ],
    features: [
      {
        title: 'One dataset, several ways to explore',
        body: 'Map selection, category filters, text search, and a directory provide different entry points into the same geographic records.',
      },
      {
        title: 'Arabic & English',
        body: 'The interface supports both languages, including the layout considerations of Arabic-first content and English technical terminology.',
      },
      {
        title: 'Hotel-to-activity planning',
        body: 'The planner connects a selected hotel and activity, shows straight-line distance, and opens Google Maps for an actual route.',
      },
      {
        title: 'Data with context',
        body: 'Analytics summarize the bundled data. Selected review signals are dated, attributed snapshots rather than claims about live visitor traffic.',
      },
    ],
    decisions: [
      {
        title: 'Keep the application frontend-only.',
        body: 'The local GeoJSON is enough for filtering and discovery. External map tiles provide geographic context; there is no need for a custom database or application server for this scope.',
      },
      {
        title: 'Distance and directions are different.',
        body: 'A straight line helps compare nearby options. Actual travel distance depends on the route, so the interface hands navigation to Google Maps rather than presenting an estimate as a driving route.',
      },
      {
        title: 'Show what the source actually supports.',
        body: 'The project distinguishes regional photos, venue imagery, published review snapshots, and user-entered hotel quotes. It does not invent hotel prices or visitor counts.',
      },
    ],
    outcome:
      'The live interface exposes the map, directory, analytics, and trip planner. Maps and optional overlays depend on third-party availability; satellite imagery requires an authorized MapTiler browser key.',
    evidence: [
      {
        label: 'Explore the live application',
        url: 'https://safaga-pulse.vercel.app',
      },
      {
        label: 'Implementation & data notes',
        url: 'https://github.com/ysfhawarydev/safaga-pulse',
      },
      {
        label: 'Trip planner scope',
        url: 'https://github.com/ysfhawarydev/safaga-pulse/blob/main/TRIP_PLANNER_GUIDE.md',
      },
    ],
  },
  {
    slug: 'careerbridge',
    number: '03',
    name: 'CareerBridge',
    category: 'Full-stack / Job marketplace',
    year: '2026',
    visual: 'career',
    summary:
      'Job discovery and application tracking, with clear boundaries between candidates and employers.',
    headline: 'A job application is a workflow, not just a form.',
    role: 'Full-stack development · Personal project',
    status: 'v1.0 local release · Source available',
    stack: [
      'Next.js',
      'TypeScript',
      'Fastify',
      'PostgreSQL',
      'Redis',
      'Vitest',
    ],
    repository: 'https://github.com/ysfhawarydev/careerbridge-job-portal',
    problem:
      'Candidates need to find suitable jobs and follow what happens after applying. Employers need to manage listings and applicants. These overlapping workflows require both role permissions and ownership checks.',
    approach:
      'I built a Next.js interface backed by a Fastify API, PostgreSQL, and Redis. The release covers job discovery, saved jobs, applications, employer management, and in-app alerts, with integration tests around the API.',
    architecture: [
      { name: 'Next.js', detail: 'Candidate & employer interfaces' },
      { name: 'Fastify', detail: 'Validation · Sessions · Ownership' },
      {
        name: 'PostgreSQL + Redis',
        detail: 'Persistent records · Public-list cache',
      },
    ],
    features: [
      {
        title: 'Job discovery',
        body: 'Search, sorting, pagination, and location, job-type, and salary filters help candidates find relevant listings.',
      },
      {
        title: 'Applications with a history',
        body: 'Candidates can apply and follow status changes. Employers can review applicants and update the status of applications to their own jobs.',
      },
      {
        title: 'Employer workflows',
        body: 'Company management, job publishing, closing listings, and optional salary ranges live alongside applicant management.',
      },
      {
        title: 'Saved jobs & in-app alerts',
        body: 'Candidates can save listings and configure job alerts. Notifications stay inside the application; the project does not include email delivery.',
      },
    ],
    decisions: [
      {
        title: 'Check ownership as well as roles.',
        body: 'Being an employer does not imply access to every company or application. The API enforces resource ownership alongside role permissions and input validation.',
      },
      {
        title: 'Cache selectively, accept a small delay.',
        body: 'Public job-list results are cached in Redis for roughly 20 seconds. That reduces repeated reads, with the explicit tradeoff that an edited listing may take a short time to appear in search.',
      },
      {
        title: 'Make the release scope explicit.',
        body: 'The v1.0 release is locally runnable, with migrations, Docker Compose, and API CI. Public hosting would need a separate operational and security review.',
      },
    ],
    outcome:
      'The v1.0 release documents 79 passing API tests and successful API and web builds at release time. The source is available to inspect and run locally; there is no public live demo.',
    evidence: [
      {
        label: 'v1.0 release and verification',
        url: 'https://github.com/ysfhawarydev/careerbridge-job-portal/releases/tag/v1.0.0',
      },
      {
        label: 'Architecture & implementation',
        url: 'https://github.com/ysfhawarydev/careerbridge-job-portal',
      },
      {
        label: 'Automated API workflow',
        url: 'https://github.com/ysfhawarydev/careerbridge-job-portal/blob/main/.github/workflows/api-ci.yml',
      },
    ],
  },
];
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
