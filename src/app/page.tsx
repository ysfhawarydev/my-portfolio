import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />

        <section
          id="contact"
          className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-sm text-accent">04 / GET IN TOUCH</p>

            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                  Let&apos;s build something
                  <span className="text-accent"> meaningful.</span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-muted">
                  Have a project in mind or want to discuss an opportunity?
                  I&apos;d be happy to connect.
                </p>
              </div>

              <Link
                href="#home"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-muted-surface"
              >
                Back to top
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="mailto:youssefelhawary012@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted-surface text-accent">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-muted">Email</p>
                  <p className="mt-1 break-all text-sm font-medium transition-colors group-hover:text-accent">
                    youssefelhawary012@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </a>

              <a
                href="https://github.com/ysfhawarydev"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted-surface text-accent">
                  <span className="text-sm font-bold">GH</span>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-muted">GitHub</p>
                  <p className="mt-1 text-sm font-medium transition-colors group-hover:text-accent">
                    Explore my repositories
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/youssef-elhawary-52784b3ba"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted-surface text-accent">
                  <span className="text-sm font-bold">in</span>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-muted">LinkedIn</p>
                  <p className="mt-1 text-sm font-medium transition-colors group-hover:text-accent">
                    Let&apos;s connect professionally
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-lg font-semibold">
                Have an idea? Let&apos;s talk.
              </p>

              <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                I&apos;m open to discussing web development projects,
                collaborations, and opportunities to build useful digital
                products.
              </p>

              <a
                href="mailto:youssefelhawary012@gmail.com?subject=Portfolio%20Inquiry"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Mail size={17} />
                Send me an email
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p>© 2026 Youssef Elhawary. All rights reserved.</p>

          <Link href="#home" className="transition-colors hover:text-accent">
            Back to top ↑
          </Link>
        </div>
      </footer>
    </>
  );
}
