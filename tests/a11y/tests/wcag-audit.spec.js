const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const urls = require("../configs/a11y-urls.json");

for (const pageEntry of urls.full) {
  test(`${pageEntry.name} has no WCAG 2.2 A/AA or serious best-practice violations`, async ({
    page,
  }) => {
    await page.goto(pageEntry.path);
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
      .analyze();
    const blocking = results.violations.filter(({ impact }) =>
      ["critical", "serious"].includes(impact),
    );

    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
}

test("homepage reflows without horizontal scrolling at 320 CSS pixels", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  const hasHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalScroll).toBe(false);
});

test("skip link is first and moves focus to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});

test("mobile navigation opens by keyboard, closes with Escape, and restores focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.locator(".menu-toggle");
  await trigger.focus();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#primary-nav")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
});

test("keyboard focus has a visible indicator", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const indicator = await page.locator(":focus").evaluate((element) => {
    const styles = getComputedStyle(element);
    return {
      outlineStyle: styles.outlineStyle,
      outlineWidth: Number.parseFloat(styles.outlineWidth),
      boxShadow: styles.boxShadow,
    };
  });
  expect(
    (indicator.outlineStyle !== "none" && indicator.outlineWidth >= 2) ||
      indicator.boxShadow !== "none",
  ).toBe(true);
});

test("primary visual regions are stable", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("header")).toHaveScreenshot(`header-${testInfo.project.name}.png`, {
    maxDiffPixelRatio: 0.01,
  });
  await expect(page.locator("main section").first()).toHaveScreenshot(
    `hero-${testInfo.project.name}.png`,
    { maxDiffPixelRatio: 0.01 },
  );
});
