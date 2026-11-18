import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/shared';
import { profile } from '@/content/profile';
import { serializeJsonLd } from '@/lib/seo';
import './globals.css';
const geist = localFont({
  src: '../../public/fonts/geist-latin.woff2',
  variable: '--font-geist',
  display: 'swap',
  weight: '100 900',
});
const serif = localFont({
  src: '../../public/fonts/instrument-serif-italic.ttf',
  variable: '--font-editorial',
  display: 'swap',
  weight: '400',
  style: 'italic',
  preload: false,
});
const mono = localFont({
  src: '../../public/fonts/ibm-plex-mono.ttf',
  variable: '--font-technical',
  display: 'swap',
  weight: '400',
  preload: false,
});
export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.description,
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
  openGraph: {
    type: 'website',
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: profile.description,
    url: profile.url,
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/social-preview.png'] },
};
export const viewport: Viewport = {
  themeColor: '#090A0B',
  colorScheme: 'dark',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': `${profile.url}/#person`,
                  name: profile.name,
                  url: profile.url,
                  jobTitle: profile.title,
                  sameAs: [profile.github, profile.linkedin],
                  knowsAbout: [
                    'TypeScript',
                    'React',
                    'Next.js',
                    'NestJS',
                    'PostgreSQL',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${profile.url}/#website`,
                  name: profile.name,
                  url: profile.url,
                  publisher: { '@id': `${profile.url}/#person` },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
