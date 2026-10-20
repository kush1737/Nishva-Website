// Runs after `next build`. Writes out/_headers with a strict Content-Security-Policy.
// Next.js adds a few small inline scripts to every page; their SHA-256 hashes are allowed
// explicitly, so no blanket 'unsafe-inline' is needed for scripts.
// Netlify and Cloudflare Pages read the _headers file automatically; on other hosts copy the same headers into the server config.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const OUT = 'out';
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });

const hashes = new Set();
for (const file of walk(OUT).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    if (m[1].trim()) hashes.add(`'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`);
  }
}

let connect = "'self'";
try {
  const endpoint = process.env.NEXT_PUBLIC_APPOINTMENT_ENDPOINT;
  if (endpoint) connect += ` ${new URL(endpoint).origin}`;
} catch { /* ignore a malformed endpoint */ }

const csp = [
  "default-src 'none'",
  `script-src 'self' ${[...hashes].join(' ')}`,
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src ${connect}`,
  "form-action 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
].join('; ');

writeFileSync(join(OUT, '_headers'), `/*
  Content-Security-Policy: ${csp}
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
`);
console.log(`Wrote ${OUT}/_headers (${hashes.size} inline script hashes)`);
