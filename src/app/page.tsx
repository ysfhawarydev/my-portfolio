import { ArrowUpRight } from "lucide-react";
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
            <p className="font-mono text-sm text-accent">03 / GET IN TOUCH</p>

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
                Back to top <ArrowUpRight size={17} />
              </Link>
            </div>

            <p className="mt-10 text-sm text-muted">
              Contact details coming soon.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p>© 2026 Youssef Elhawary</p>
          <Link href="#home" className="transition-colors hover:text-accent">
            Back to top ↑
          </Link>
        </div>
      </footer>
    </>
  );
}
