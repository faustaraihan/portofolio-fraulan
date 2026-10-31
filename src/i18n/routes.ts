import { projects } from '../data/projects.ts';

export type Locale = 'en' | 'id';

export const contentPaths: readonly string[] = Object.freeze([
  '/',
  ...projects.flatMap(project => project.caseStudyPath ? [project.caseStudyPath] : []),
]);
const supportedPaths = new Set(contentPaths);

function normalizePath(pathname: string): string {
  const path = pathname.split(/[?#]/, 1)[0];
  const segments = path.split('/').filter(Boolean);
  return segments.length ? '/' + segments.join('/') + '/' : '/';
}

export function getLocale(pathname: string): Locale {
  return normalizePath(pathname).startsWith('/id/') ? 'id' : 'en';
}

/** Map only real portfolio routes; an unknown/404 route returns the target Home. */
export function localizePath(pathname: string, locale: Locale): string {
  const normalized = normalizePath(pathname);
  const original = normalized.startsWith('/id/') ? '/' + normalized.slice(4) : normalized;
  const route = supportedPaths.has(original) ? original : '/';
  return locale === 'id' ? '/id' + route : route;
}

export function homeHref(locale: Locale, hash?: string): string {
  const home = locale === 'id' ? '/id/' : '/';
  const fragment = hash?.replace(/^#/, '');
  return fragment ? home + '#' + encodeURIComponent(fragment) : home;
}
