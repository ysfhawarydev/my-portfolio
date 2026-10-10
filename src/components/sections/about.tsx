import { Code2, Layers3, Sparkles } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Full-stack development",
    description: "Building web experiences across the frontend and backend.",
  },
  {
    icon: Layers3,
    title: "Reusable architecture",
    description:
      "Organizing components and code for maintainability and growth.",
  },
  {
    icon: Sparkles,
    title: "UI & user experience",
    description:
      "Creating responsive interfaces with attention to the details.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-sm text-accent">01 / ABOUT ME</p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              More than code.
              <br />
              <span className="text-muted">Built with purpose.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-muted">
              I&apos;m Youssef Elhawary, a Full-Stack Developer interested in
              building modern web applications that bring thoughtful design and
              practical functionality together.
            </p>

            <p className="mt-4 max-w-lg leading-8 text-muted">
              I enjoy breaking down complex ideas, building reusable solutions,
              and continuously improving how I write and structure code.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
              <span className="size-2 rounded-full bg-accent" />
              Focused on building and improving
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className={`group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
