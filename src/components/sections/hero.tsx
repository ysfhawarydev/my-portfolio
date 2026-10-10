import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

const technologies = ["Next.js", "TypeScript", "React", "Tailwind CSS"];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-12rem] size-[30rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute right-[-10rem] top-1/3 size-80 rounded-full bg-accent/5 blur-[90px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-2 text-sm text-muted shadow-sm">
            <Sparkles size={15} className="text-accent" />
            <span>Turning ideas into web experiences</span>
          </div>

          <p className="mb-4 font-mono text-sm tracking-wide text-accent">
            HELLO, WORLD! I&apos;M
          </p>

          <h1 className="text-5xl font-bold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Youssef
            <br />
            <span className="text-muted">Elhawary.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">
            Full-Stack Developer
            <span className="text-accent">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I build modern, responsive web applications with thoughtful
            interfaces and reliable functionality — from the first component to
            the full-stack experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-on-accent shadow-lg shadow-accent/10 transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore my work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/80 px-5 py-3.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-muted-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Get in touch <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Working with
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-border/80 bg-surface/70 px-2.5 py-1.5 font-mono text-xs text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] bg-accent/10 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/5">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-muted">
                developer.tsx
              </span>
              <Code2 size={17} className="text-accent" />
            </div>

            <div className="space-y-5 p-6 font-mono text-sm leading-7 sm:p-8">
              <p className="text-muted">
                <span className="text-accent">const</span> developer = {"{"}
              </p>

              <div className="space-y-2 pl-5">
                <p>
                  <span className="text-accent">name</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &quot;Youssef Elhawary&quot;
                  </span>
                  ,
                </p>
                <p>
                  <span className="text-accent">role</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  ,
                </p>
                <p>
                  <span className="text-accent">mindset</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &quot;Always learning&quot;
                  </span>
                  ,
                </p>
                <p>
                  <span className="text-accent">focus</span>: [
                </p>
                <div className="pl-5 text-muted">
                  <p>&quot;Clean code&quot;,</p>
                  <p>&quot;Great UX&quot;,</p>
                  <p>&quot;Useful products&quot;,</p>
                </div>
                <p>],</p>
              </div>

              <p className="text-muted">{"};"}</p>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-muted-surface/60 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Layers3 size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-sm font-semibold">
                    Building something meaningful
                  </p>
                  <p className="font-sans text-xs text-muted">
                    One thoughtful line at a time.
                  </p>
                </div>
                <ArrowUpRight size={17} className="shrink-0 text-accent" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-xl sm:flex">
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Code2 size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold">Code with purpose</p>
              <p className="text-xs text-muted">Build · Learn · Improve</p>
            </div>
          </div>

          <div className="absolute -right-3 -top-4 flex size-12 items-center justify-center rounded-2xl border border-border bg-surface text-accent shadow-lg sm:-right-5">
            <Code2 size={22} />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-8 hidden w-fit items-center gap-2 text-xs text-muted transition-colors hover:text-accent md:flex"
      >
        Scroll to discover <ArrowDown size={14} />
      </a>
    </section>
  );
}
