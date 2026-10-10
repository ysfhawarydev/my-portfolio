import Link from "next/link";
import { ArrowUpRight, Code2, Mail, Send } from "lucide-react";

const inputClassName =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-mono text-sm text-accent">03 / GET IN TOUCH</p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build
              <br />
              <span className="text-muted">something great.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-muted">
              Have a project idea, an opportunity, or just want to connect?
              I&apos;d love to hear from you. Send me a message and let&apos;s
              start a conversation.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:youssefelhawary012@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-muted">Email me</span>
                  <span className="mt-1 block break-all text-sm font-medium">
                    youssefelhawary012@gmail.com
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/ysfhawarydev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Code2 size={18} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://www.linkedin.com/in/youssef-elhawary-52784b3ba"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-black/5 sm:p-8">
            <div className="mb-7">
              <h3 className="text-xl font-semibold">Send me a message</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Fill out the form and your email app will open with your message
                ready to send.
              </p>
            </div>

            <form
              action="mailto:youssefelhawary012@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="Name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    required
                    maxLength={100}
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                    maxLength={254}
                    className={inputClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="Subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="Message"
                  rows={5}
                  placeholder="Tell me a little about your project..."
                  required
                  maxLength={5000}
                  className={`${inputClassName} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-on-accent shadow-lg shadow-accent/10 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Send size={17} />
                Open email to send
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-center text-xs leading-5 text-muted">
                Your message is prepared in your email app. You can review it
                before sending.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Youssef Elhawary. Built with care.</p>
          <Link
            href="#home"
            className="w-fit transition-colors hover:text-accent"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </section>
  );
}
