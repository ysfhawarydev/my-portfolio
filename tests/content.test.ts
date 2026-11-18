import { describe, it, expect } from 'vitest';
import { projects, getProject } from '../src/content/projects';
import { profile } from '../src/content/profile';
describe('public project evidence', () => {
  it('has unique stable project routes', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    for (const p of projects) expect(p.slug).toMatch(/^[a-z0-9-]+$/);
  });
  it('does not advertise a CareerBridge live deployment', () => {
    expect(getProject('careerbridge')?.live).toBeUndefined();
    expect(getProject('careerbridge')?.status).toContain('local');
  });
  it('provides inspectable evidence for every case study', () => {
    for (const p of projects) {
      expect(p.evidence.length).toBeGreaterThan(1);
      for (const source of p.evidence)
        expect(new URL(source.url).protocol).toBe('https:');
    }
  });
  it('returns no fabricated project for unknown slugs', () =>
    expect(getProject('unknown')).toBeUndefined());
  it('uses the canonical owner domain', () =>
    expect(profile.url).toBe('https://ysfhawary.dev'));
});
