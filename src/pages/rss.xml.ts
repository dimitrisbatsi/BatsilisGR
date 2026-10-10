import type { APIRoute } from 'astro';
import { buildFeed } from '../i18n/rss';

export const GET: APIRoute = ({ site }) => buildFeed('el', site);
