'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
const links = [
  ['Work', '/work/'],
  ['About', '/about/'],
  ['Expertise', '/expertise/'],
  ['Contact', '/contact/'],
] as const;
export function Navigation() {
  const pathname = usePathname();
  const details = useRef<HTMLDetailsElement>(null);
  function close() {
    if (details.current) details.current.open = false;
  }
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link
          prefetch={false}
          className="wordmark"
          href="/"
          aria-label="Youssef Elhawary home"
        >
          <span className="monogram" aria-hidden="true">
            y<span>e</span>
            <i />
          </span>
          <span>
            YOUSSEF
            <br />
            ELHAWARY
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              prefetch={false}
              key={href}
              href={href}
              aria-current={
                pathname.startsWith(href.slice(0, -1)) ? 'page' : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link prefetch={false} href="/resume/" className="resume-link">
          Resume <span aria-hidden="true">↗</span>
        </Link>
        <details
          className="mobile-menu"
          ref={details}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              close();
              details.current?.querySelector('summary')?.focus();
            }
          }}
        >
          <summary>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link
                prefetch={false}
                key={href}
                href={href}
                onClick={close}
                aria-current={
                  pathname.startsWith(href.slice(0, -1)) ? 'page' : undefined
                }
              >
                {label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <Link prefetch={false} href="/resume/" onClick={close}>
              Resume <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
