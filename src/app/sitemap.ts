import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { profile } from '@/content/profile';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    'work/',
    'about/',
    'expertise/',
    'contact/',
    'resume/',
    ...projects.map((p) => `work/${p.slug}/`),
  ].map((path) => ({ url: `${profile.url}/${path}` }));
}
