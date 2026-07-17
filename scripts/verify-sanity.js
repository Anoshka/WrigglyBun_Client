/**
 * Verifies Sanity has seeded content.
 * Run: npm run test:cms
 */
const PROJECT_ID = "q7ct7sx2";
const DATASET = "production";

async function check(label, query) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v2025-01-01/data/query/${DATASET}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const body = await res.json();
  const ok = body?.result != null && (Array.isArray(body.result) ? body.result.length > 0 : true);
  console.log(ok ? `✓ ${label}` : `✗ ${label}`, body?.result ?? body);
  return ok;
}

(async () => {
  let allOk = true;
  allOk =
    (await check("Home Page", '*[_type == "homePage"][0]{ packagesTitle, "heroes": count(heroCards) }')) &&
    allOk;
  allOk =
    (await check("About Page", '*[_type == "aboutPage"][0]{ landingTitle }')) && allOk;
  allOk =
    (await check("Site Settings", '*[_type == "siteSettings"][0]{ businessName, email }')) &&
    allOk;
  allOk =
    (await check(
      "Maternity service",
      '*[_type == "service" && slug.current == "maternity"][0]{ title, "slug": slug.current }'
    )) && allOk;
  process.exit(allOk ? 0 : 1);
})().catch((err) => {
  console.error("✗ Sanity request failed:", err.message);
  process.exit(1);
});
