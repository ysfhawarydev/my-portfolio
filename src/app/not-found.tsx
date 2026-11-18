import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="shell page-heading not-found">
      <p className="eyebrow">404 / A MISSING CONNECTION</p>
      <h1>
        This page
        <br />
        <em>isn’t here.</em>
      </h1>
      <p>
        The address may have changed. You can explore the work or head back to
        the homepage.
      </p>
      <Link prefetch={false} className="button button-light" href="/">
        Back to home <span aria-hidden="true">↗</span>
      </Link>
      <Link prefetch={false} className="text-link" href="/work/">
        Explore the work
      </Link>
    </section>
  );
}
