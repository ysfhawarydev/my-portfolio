import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers3, Code2 } from "lucide-react";

const projects = [
  {
    title: "Fullstack Ecommerce Template",
    category: "FULL-STACK / E-COMMERCE",
    description:
      "A full-stack e-commerce platform featuring a customer storefront, product catalog, shopping cart, checkout, authentication, and an admin dashboard for managing the store.",
    image: "/images/ecommerce-template-cover-4x3.png",
    imageAlt: "Fullstack Ecommerce Template project cover",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma ORM",
    ],
    featured: true,
    liveUrl: "https://ecommerce-frontend-m2bf.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Notes App",
    category: "FULL-STACK / PRODUCTIVITY",
    description:
      "A simple workspace to create, search, edit, and delete notes.",
    image: "/images/notes-app-cover.png",
    imageAlt: "Notes App project cover",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Node.js",
      "NestJS",
    ],
    featured: true,
    liveUrl: "https://notes.ysfhawary.dev",
    githubUrl: "",
  },
  {
    title: "Scientific Calculator",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A scientific calculator featuring arithmetic, scientific functions, keyboard support, and mathematical error handling.",
    image: "/images/calculator-cover.png",
    imageAlt: "Scientific Calculator project cover",
    tags: ["HTML5", "CSS3", "JavaScript ES6"],
    featured: false,
    liveUrl: "https://calculator.ysfhawary.dev",
    githubUrl: "https://github.com/ysfhawarydev/Calculator",
  },
  {
    title: "Todo App",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A task management app for adding and deleting tasks, viewing task counts, and switching between light and dark themes.",
    image: "/images/todo-app-cover.png",
    imageAlt: "Todo App showing light and dark themes",
    tags: ["HTML5", "CSS3", "JavaScript ES6"],
    featured: false,
    liveUrl: "https://todo-app.ysfhawary.dev",
    githubUrl: "https://github.com/ysfhawarydev/Todo-App",
  },
  {
    title: "Gallery",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A responsive image gallery featuring a main image preview and a collection of thumbnails.",
    image: "/images/gallery-cover.png",
    imageAlt: "Gallery project showing the main image and thumbnails",
    tags: ["HTML5", "CSS3", "JavaScript ES6"],
    featured: false,
    liveUrl: "https://gallery.ysfhawary.dev",
    githubUrl: "https://github.com/ysfhawarydev/Gallery",
  },
  {
    title: "Form",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A student information form demonstrating input validation, submission, page navigation, and dynamic display of submitted information.",
    image: "/images/form-cover.png",
    imageAlt: "Student Form and submitted information result page",
    tags: ["HTML5", "CSS3", "JavaScript ES6"],
    featured: false,
    liveUrl: "https://form.ysfhawary.dev",
    githubUrl: "https://github.com/ysfhawarydev/Form",
  },
];

function ProjectLinks({
  liveUrl,
  githubUrl,
}: {
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
      <Link
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
      >
        Live Preview
        <ArrowUpRight size={16} />
      </Link>

      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <Code2 size={16} />
          GitHub
          <ArrowUpRight size={16} />
        </Link>
      )}
    </div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border bg-muted-surface/20 px-5 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-sm text-accent">02 / SELECTED WORK</p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Projects that bring
              <br />
              <span className="text-muted">ideas to life.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-muted">
            A selection of projects focused on solving problems and building
            useful web experiences.
          </p>
        </div>

        {/* Featured full-stack projects */}
        <div className="mt-12 grid gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-72 overflow-hidden bg-muted-surface/50 sm:min-h-96">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
                    <Layers3 size={14} className="text-accent" />
                    FEATURED PROJECT
                  </span>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="font-mono text-xs tracking-[0.18em] text-accent">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <ProjectLinks
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Supporting frontend projects */}
        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-accent">
                MORE PROJECTS
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Smaller builds, practical skills.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted">
              Frontend projects exploring interactive interfaces, useful
              features, and core web technologies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted-surface/50">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-accent">
                    {project.category}
                  </p>

                  <h4 className="mt-3 text-xl font-bold tracking-tight">
                    {project.title}
                  </h4>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <ProjectLinks
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
