const urls = require("./a11y-urls.json");
const { chromium } = require("playwright");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";
const scope = process.env.A11Y_SCOPE === "pr" ? "pr" : "full";

module.exports = {
  defaults: {
    standard: "WCAG2AA",
    // axe-core runs directly through Playwright at desktop and mobile widths.
    // Pa11y supplies the independent HTML CodeSniffer crawl here; running Pa11y's
    // bundled axe concurrently produced false contrast results for opaque labels.
    runners: ["htmlcs"],
    timeout: 30000,
    chromeLaunchConfig: {
      executablePath: process.env.CHROME_PATH || chromium.executablePath(),
      args: ["--no-sandbox", "--disable-dev-shm-usage"]
    }
  },
  urls: urls[scope].map(({ path }) => new URL(path, baseUrl).href)
};
