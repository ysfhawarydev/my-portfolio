import { Arrow, SectionLabel } from '@/components/shared';
import { profile } from '@/content/profile';
import { Motif } from '@/components/motif';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Contact',
  'Contact Youssef Elhawary about freelance development, full-stack engineering roles, and software collaborations. Based in Egypt and open to remote opportunities.',
  '/contact/',
);
export default function Contact() {
  return (
    <section className="shell contact-page">
      <SectionLabel number="CONTACT">
        LET’S START WITH A CONVERSATION
      </SectionLabel>
      <h1>
        Something in mind?
        <br />
        <em>I’m listening.</em>
      </h1>
      <div className="contact-page-grid">
        <div>
          <p className="lead">
            Tell me what you’re building, what needs to change, and where you
            could use another engineer.
          </p>
          <a
            className="contact-email"
            href={`mailto:${profile.email}?subject=Portfolio%20inquiry`}
          >
            {profile.email}
            <Arrow />
          </a>
          <p className="contact-note">
            For project inquiries, a little context, your timeline, and any
            existing product link are a helpful starting point.
          </p>
          <div className="contact-channels">
            <a href={profile.github}>
              GitHub <Arrow />
            </a>
            <a href={profile.linkedin}>
              LinkedIn <Arrow />
            </a>
          </div>
          <p className="eyebrow">BASED IN EGYPT · OPEN TO REMOTE WORK</p>
        </div>
        <Motif />
      </div>
    </section>
  );
}
