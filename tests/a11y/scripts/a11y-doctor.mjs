import { access, readFile } from "node:fs/promises";

const required = [
  "index.html",
  "styles.css",
  "script.js",
  "tests/a11y/.a11y-setup.yml",
  "tests/a11y/configs/a11y-urls.json",
  "tests/a11y/configs/.pa11yci.cjs",
  "tests/a11y/playwright.config.js",
  "tests/a11y/tests/wcag-audit.spec.js"
];

await Promise.all(required.map((file) => access(file)));
const urls = JSON.parse(await readFile("tests/a11y/configs/a11y-urls.json", "utf8"));
if (!urls.pr.length || !urls.full.length || JSON.stringify(urls).includes("TODO_")) {
  throw new Error("Accessibility URL configuration is incomplete.");
}
console.log(`Accessibility harness ready: ${urls.full.length} route(s).`);
