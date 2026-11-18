import type { Metadata } from 'next';
import { profile } from '@/content/profile';
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${profile.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title: `${title} — ${profile.name}`,
      description,
      url,
      siteName: profile.name,
      locale: 'en_US',
      images: [
        {
          url: '/social-preview.png',
          width: 1200,
          height: 630,
          alt: 'Youssef Elhawary — Full-Stack Software Engineer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${profile.name}`,
      description,
      images: ['/social-preview.png'],
    },
  };
}
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
