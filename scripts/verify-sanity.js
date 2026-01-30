/**
 * Verifies Sanity returns your maternity service.
 * Run: npm run test:cms
 * Safe to run before all slugs exist — only checks maternity.
 */
const PROJECT_ID = "q7ct7sx2";
const DATASET = "production";
const query = encodeURIComponent(
  '*[_type == "service" && slug.current == "maternity"][0]{ title, "slug": slug.current }'
);
const url = `https://${PROJECT_ID}.api.sanity.io/v2025-01-01/data/query/${DATASET}?query=${query}`;

fetch(url)
  .then((res) => res.json())
  .then((body) => {
    const doc = body?.result;
    if (doc?.slug === "maternity") {
      console.log("✓ Sanity OK — maternity service found:", doc.title);
      process.exit(0);
    } else {
      console.log("✗ Sanity: maternity doc not found or not published. Result:", body);
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error("✗ Sanity request failed:", err.message);
    process.exit(1);
  });
