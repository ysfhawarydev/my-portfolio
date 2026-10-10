import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-sm text-accent">01 / ABOUT</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A little about me.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              I enjoy turning ideas into practical web applications, learning
              new technologies, and creating experiences that balance thoughtful
              design with solid engineering.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 border-t border-border bg-muted-surface/30 px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-sm text-accent">02 / SELECTED WORK</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Projects I&apos;ve built.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              A collection of applications, experiments, and ideas brought to
              life through code.
            </p>

            <article className="mt-10 max-w-xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs text-accent">FEATURED PROJECT</p>
              <h3 className="mt-3 text-xl font-semibold">
                Fullstack Ecommerce Template
              </h3>
              <p className="mt-3 leading-7 text-muted">
                A full-stack e-commerce template built as a reusable starting
                point for online storefronts.
              </p>
              <p className="mt-5 text-sm text-muted">
                More project details and screenshots coming soon.
              </p>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-sm text-accent">03 / CONTACT</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Have an idea in mind?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              I&apos;m interested in connecting with people who are building
              useful products and solving interesting problems.
            </p>
            <p className="mt-6 text-sm text-muted">
              We&apos;ll add your preferred contact details here.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p>© 2026 Youssef Elhawary</p>
          <Link
            href="#home"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            Back to top <ArrowUpRight size={15} />
          </Link>
        </div>
      </footer>
    </>
  );
}
