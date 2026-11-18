export const profile = {
  name: 'Youssef Elhawary',
  title: 'Full-Stack Software Engineer',
  location: 'Egypt',
  email: 'youssefelhawary012@gmail.com',
  url: 'https://ysfhawary.dev',
  github: 'https://github.com/ysfhawarydev',
  linkedin: 'https://www.linkedin.com/in/youssef-elhawary-52784b3ba',
  description:
    'Youssef Elhawary is a full-stack software engineer in Egypt building TypeScript applications, thoughtful React interfaces, APIs, and relational data systems.',
} as const;

export const expertise = [
  {
    title: 'Interfaces with a clear purpose.',
    short: 'Frontend engineering',
    tools: 'React · Next.js · TypeScript · Tailwind CSS',
    body: 'Responsive interfaces, reusable components, and the loading, empty, and error states that make an application usable beyond the first screen.',
    evidence: 'Role-specific workspaces in the Student Management System.',
    slug: 'student-management-system',
  },
  {
    title: 'The systems behind the screen.',
    short: 'Backend & API engineering',
    tools: 'Node.js · NestJS · Fastify · REST',
    body: 'APIs organized around business workflows, with validation and permissions enforced at the boundary. The interface is only one part of the product.',
    evidence: 'Job, employer, and application workflows in CareerBridge.',
    slug: 'careerbridge',
  },
  {
    title: 'A model that fits the problem.',
    short: 'Database & application architecture',
    tools: 'PostgreSQL · Drizzle ORM · SQL',
    body: 'Relational models, explicit constraints, and migrations that keep connected records consistent as features develop.',
    evidence:
      'Course offerings, enrollments, attendance, and grades in the LMS.',
    slug: 'student-management-system',
  },
  {
    title: 'Confidence in the details.',
    short: 'Authentication, testing & delivery',
    tools: 'JWT · RBAC · Vitest · Supertest · GitHub Actions',
    body: 'Role and ownership checks, API tests, and repeatable build workflows. I pay attention to what happens when a request should fail, too.',
    evidence:
      'CareerBridge includes authorization tests and an API CI workflow.',
    slug: 'careerbridge',
  },
] as const;

export const experience = {
  company: 'Auspify Technologies',
  role: 'Full-Stack Development Intern',
  dates: 'October — November 2026',
  description:
    'Worked on a learning management system across React interfaces, NestJS endpoints, and PostgreSQL data models. Implemented role-specific workflows and verified authentication and API behavior with automated tests.',
};
