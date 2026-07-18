// Static-site sanity checks — no deps. Run: node scripts/check.mjs
// 1) syntax-checks every inline <script> (skips importmap + external src)
// 2) verifies every local href/src target actually exists
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const htmlFiles = readdirSync('.').filter((f) => f.endsWith('.html'));
let errors = 0;

for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');

  // inline scripts (exclude importmap and external-src scripts)
  const re = /<script(?![^>]*\bsrc=)(?![^>]*type="importmap")[^>]*>([\s\S]*?)<\/script>/g;
  let m,
    i = 0;
  while ((m = re.exec(html))) {
    const code = m[1];
    if (!code.trim()) continue;
    const tmp = `/tmp/_chk_${f.replace(/\W/g, '_')}_${i}.mjs`;
    writeFileSync(tmp, code);
    try {
      execSync(`node --check "${tmp}"`, { stdio: 'pipe' });
    } catch (e) {
      console.error(`✗ JS syntax error in ${f} (script block ${i})`);
      console.error(
        String(e.stderr || e)
          .split('\n')
          .slice(0, 4)
          .join('\n'),
      );
      errors++;
    }
    i++;
  }

  // local link targets
  const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map((x) => x[1])
    .filter((u) => !/^(https?:|mailto:|tel:|#|data:|\/)/.test(u));
  for (const u of links) {
    const p = u.split(/[?#]/)[0];
    if (p && !existsSync(p)) {
      console.error(`✗ missing local target: ${p}  (referenced in ${f})`);
      errors++;
    }
  }
}

if (errors) {
  console.error(`\n${errors} problem(s) found.`);
  process.exit(1);
}
console.log('✓ all checks passed');
