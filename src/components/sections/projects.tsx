import Link from "next/link";
import { ArrowUpRight, Code2, Layers3 } from "lucide-react";

export function Projects() {
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

        <article className="group mt-12 overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-muted-surface/50 p-8 sm:min-h-96 sm:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--muted)_1px,transparent_1px)] [background-size:18px_18px]"
              />

              <div className="relative w-full max-w-md -rotate-2 rounded-2xl border border-border bg-surface p-5 shadow-2xl transition-transform duration-500 group-hover:rotate-0 sm:p-7">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-on-accent">
                      <Layers3 size={17} />
                    </span>
                    <span className="text-sm font-semibold">Storefront</span>
                  </div>
                  <Code2 size={18} className="text-accent" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border p-3">
                    <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Layers3 size={28} />
                    </div>
                    <div className="h-2 w-4/5 rounded-full bg-muted-surface" />
                    <div className="mt-2 h-2 w-2/5 rounded-full bg-muted-surface" />
                  </div>

                  <div className="rounded-xl border border-border p-3">
                    <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Code2 size={28} />
                    </div>
                    <div className="h-2 w-3/4 rounded-full bg-muted-surface" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-muted-surface" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-muted-surface/70 p-3">
                  <div className="h-2 w-1/3 rounded-full bg-muted-surface" />
                  <div className="h-7 w-20 rounded-lg bg-accent" />
                </div>
              </div>

              <span className="absolute bottom-5 left-5 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
                FEATURED PROJECT
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="font-mono text-xs tracking-[0.18em] text-accent">
                FULL-STACK / E-COMMERCE
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Fullstack Ecommerce Template
              </h3>

              <p className="mt-5 leading-8 text-muted">
                A full-stack e-commerce template designed as a foundation for
                building online storefronts. This project is part of my work on
                reusable web application products.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["E-commerce", "Full-stack", "Reusable template"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
                >
                  Ask me about this project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
