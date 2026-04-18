import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Helper: approximate text width for Inter at a given font-size
const measureInter = (txt, size, weight = 400) => {
  const factor = weight >= 700 ? 0.56 : weight >= 600 ? 0.54 : 0.52;
  return txt.length * size * factor;
};
// Uppercase Inter with letter-spacing renders much wider — use a larger factor
const measureUpperInter = (txt, size, letterSpacing = 0) => {
  return txt.length * (size * 0.74 + letterSpacing);
};
const measureMono = (txt, size) => txt.length * size * 0.6;

// --- Text content ---
const pillText = "APPLICATION SECURITY ENGINEER";
const taglineText = "Secure architecture · DevSecOps · AppSec tooling at scale";
const githubText = "crxso";
const linkedinText = "linkedin.com/in/cristianornelas";

// --- Pill sizing (hugs its text) ---
const pillFontSize = 15;
const pillLetterSpacing = 1;
const pillTextWidth = measureUpperInter(pillText, pillFontSize, pillLetterSpacing);
const pillPaddingL = 46;
const pillPaddingR = 24;
const pillWidth = Math.ceil(pillTextWidth + pillPaddingL + pillPaddingR);
const pillHeight = 44;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050505"/>
      <stop offset="50%" stop-color="#0A0A0A"/>
      <stop offset="100%" stop-color="#050505"/>
    </linearGradient>
    <radialGradient id="glowRed" cx="0.85" cy="0.15" r="0.55">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#EF4444" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#EF4444" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(255, 255, 255, 0.035)"/>
    </pattern>
    <linearGradient id="topBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0"/>
      <stop offset="40%" stop-color="#EF4444" stop-opacity="1"/>
      <stop offset="60%" stop-color="#EF4444" stop-opacity="1"/>
      <stop offset="100%" stop-color="#EF4444" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#DC2626"/>
    </linearGradient>
  </defs>

  <!-- Background layers -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glowRed)"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="1200" height="3" fill="url(#topBar)"/>

  <!-- Status pill (width hugs text) -->
  <g transform="translate(80, 150)">
    <rect width="${pillWidth}" height="${pillHeight}" rx="22" fill="#0D1117" stroke="#30363D" stroke-width="1"/>
    <circle cx="26" cy="22" r="5" fill="#EF4444"/>
    <circle cx="26" cy="22" r="10" fill="none" stroke="#EF4444" stroke-width="1" opacity="0.35"/>
    <text x="${pillPaddingL}" y="29" font-family="-apple-system, Inter, sans-serif" font-size="${pillFontSize}" font-weight="600" fill="#F0F6FC" letter-spacing="1">${pillText}</text>
  </g>

  <!-- Name -->
  <text x="80" y="320" font-family="-apple-system, Inter, sans-serif" font-size="132" font-weight="800" fill="#F0F6FC" letter-spacing="-4">Cristian</text>
  <text x="80" y="460" font-family="-apple-system, Inter, sans-serif" font-size="132" font-weight="800" fill="url(#nameGrad)" letter-spacing="-4">Ornelas</text>

  <!-- Accent underline -->
  <rect x="80" y="485" width="72" height="3" rx="1.5" fill="#EF4444"/>

  <!-- Tagline -->
  <text x="80" y="540" font-family="-apple-system, Inter, sans-serif" font-size="24" font-weight="400" fill="#B1BAC4">${taglineText}</text>

  <!-- Footer: GitHub + LinkedIn -->
  <g transform="translate(80, 590)">
    <g>
      <path d="M11 0C4.92 0 0 4.92 0 11c0 4.86 3.15 8.97 7.52 10.43.55.1.75-.24.75-.53v-1.86c-3.07.67-3.71-1.48-3.71-1.48-.5-1.27-1.22-1.61-1.22-1.61-1-.68.07-.67.07-.67 1.1.08 1.69 1.13 1.69 1.13.99 1.69 2.59 1.2 3.22.92.1-.71.39-1.2.7-1.47-2.45-.28-5.02-1.22-5.02-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.03 1.12a10.55 10.55 0 0 1 5.51 0c2.11-1.42 3.03-1.12 3.03-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.24-2.58 5.16-5.04 5.43.4.34.74 1.01.74 2.04v3.02c0 .29.2.64.76.53A11.01 11.01 0 0 0 22 11C22 4.92 17.08 0 11 0z" fill="#B1BAC4" transform="translate(0, 3)"/>
      <text x="32" y="20" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="17" font-weight="500" fill="#B1BAC4">${githubText}</text>
    </g>
    <circle cx="${32 + measureMono(githubText, 17) + 22}" cy="14" r="2" fill="#484F58"/>
    <g transform="translate(${32 + measureMono(githubText, 17) + 44}, 0)">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="#B1BAC4"/>
      <text x="30" y="18" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="17" font-weight="500" fill="#B1BAC4">${linkedinText}</text>
    </g>
  </g>
</svg>`;

writeFileSync(join(publicDir, 'og-image.svg'), svg);

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile(join(publicDir, 'og-image.png'));

console.log('✓ Generated og-image.png (1200×630)');
