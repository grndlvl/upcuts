# Up Cuts Hair Designers site concept

A responsive, accessible one-page marketing site for Up Cuts in Aiken, South Carolina. This is a pre-approval concept built from public information; it has not been approved by the business and has not been deployed.

## Local development

Serve the repository root with any static server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## File map

- `index.html` — page content, metadata, and HairSalon JSON-LD
- `styles.css` — responsive visual system and accessible interaction styles
- `script.js` — mobile navigation and automatic footer year
- `images/` — optimized logo, icons, social-sharing image, and temporary concept photography
- `design/upcuts-logo-source.png` — unserved source logo supplied for the concept
- `robots.txt`, `sitemap.xml`, `llms.txt` — search and answer-engine discovery
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment workflow
- `research/upcuts-research.md` — qualification findings, sources, and follow-ups

## Brand and design notes

The concept follows the thesis “Aiken’s friendly shortcut to a great cut.” It uses the supplied black-and-gold Up Cuts Hair Designers logo, a condensed display face, large direct calls to action, and a diagonal cut-line motif. The result is intended to feel energetic, local, and easy—not like a generic spa-luxury template.

The service section intentionally avoids prices and specialties. It distinguishes first-party haircut/walk-in information from categories found in public directories. The page clearly labels its temporary stock salon imagery and does not claim a review aggregate.

### Photography recommendation

Commission a local Aiken-area brand or small-business photographer for a compact 60–90 minute owner shoot instead of relying on generic salon stock. Choose someone whose portfolio shows natural skin tones, mixed indoor lighting, candid service work, and comfort photographing a range of ages and hair textures. Ask for written commercial web/social usage rights and both full-resolution originals and web-ready exports.

Recommended shot list:

- Exterior, entrance, signage, and a clear “how to find us” view
- One horizontal interior hero composition with clean negative space for text
- A warm group portrait of Donna, Sandy, and Jonathan, plus individual vertical portraits
- Each stylist working naturally with a client, photographed only with signed client/model consent
- Finished cuts from front, side, and back; a representative mix of hair textures, ages, and services
- Detail shots of tools, chairs, stations, branded materials, and the welcome/waiting area
- Horizontal 3:2, vertical 4:5, and square variations; avoid identifiable bystanders and unapproved client faces

The current gallery uses three locally stored Unsplash placeholders and visibly states that they do not depict Up Cuts, its team, clients, salon, or work. Replace all three before public launch. The source pages were marked “Free to use under the Unsplash License” when accessed July 17, 2026.

## Deploy

1. Confirm every item below with Up Cuts.
2. Replace the placeholder URL everywhere it appears.
3. Set the GitHub repository's default branch to `main`, or update the workflow trigger.
4. In GitHub, choose **Settings → Pages → Source: GitHub Actions**.
5. Push to `main` only after explicit approval to publish.

## ⚠️ Verify before launch

- Replace `https://example.github.io/upcuts/` in `index.html`, `robots.txt`, `sitemap.xml`, and JSON-LD with the final canonical URL.
- Confirm the owner-preferred spelling: “UpCuts,” “Up Cuts,” or “Up Cuts Hair Designers.”
- Confirm Donna, Sandy, and Jonathan's full names, current roles, and whether all three still work at the salon.
- Confirm that the supplied logo may be reused publicly and request an original/vector version if available.
- Confirm the exact opening date.
- Confirm whether the address should include Suite 102.
- Confirm the current service menu, service audiences, and any approved prices. Children's cuts, coloring, blow-dry services, and keratin treatments currently come from public directory data.
- Confirm how the Waitlist Me page works and whether “Join the waitlist” is the preferred label.
- Confirm whether regular appointments are available during business hours.
- Confirm that after-hours appointments and possible additional charges remain current.
- Confirm that discounts for military members, first responders, and college students remain current.
- Obtain approval for the two Yelp excerpts and re-check their text/source before publication.
- Confirm payment methods.
- Verify the current Facebook page, Google Business Profile, Apple Maps, Bing Places, and whether an official Instagram account exists.
- Request owner-approved storefront, interior, team, and finished-style photography for a future gallery.
- Replace `images/stock-*` and the matching gallery markup; the current Unsplash imagery is concept-only.
- Select a local photographer, confirm budget and usage rights, secure client/model releases, and replace the three gallery placeholders.
- Run and pass the required HTML, CSS/format, axe-core, Pa11y, and keyboard-navigation quality gates before deployment.

## Sources

- Up Cuts' public website: https://upcuts.company.site/ (accessed July 17, 2026)
- Up Cuts' public Waitlist Me page: https://www.waitlist.me/w/upcutswaitinglist
- Yelp listing: https://www.yelp.com/biz/up-cuts-aiken-2
- MapQuest/Yelp-fed listing: https://www.mapquest.com/us/south-carolina/up-cuts-673113292 (review excerpts observed in search data, accessed July 17, 2026)
- Fresha directory listing: https://www.fresha.com/sl/lvp/up-cuts-university-parkway-aiken-Y07kaw
- Official Facebook URL published by Up Cuts: http://facebook.com/Upcutsllc (public page metadata exposed only the existing profile image; no usable salon/team originals were retrievable)
- Temporary salon interior by Barney Goodman: https://unsplash.com/photos/a-modern-hair-salon-interior-with-stylish-chairs-and-mirrors-_Fy7Kq0w6OI
- Temporary stylist/client scene: https://unsplash.com/photos/a-hairstylist-and-client-share-a-happy-moment-PLKUiQNKcLo
- Temporary haircut scene: https://unsplash.com/photos/EA5BmbfGTyY

No messages, forms, calls, or social DMs were sent while creating this concept.
