# StarvinSlugs

Website for StarvinSlugs, a student-run snack and drink business at UC Santa Cruz.

Plain HTML, CSS and JavaScript. No build step.

## Updating the site
Almost everything lives in **`data.js`**:
- Menu items, prices, sold-out items, and deals
- Upcoming fundraiser card (set `UPCOMING = null` to hide it)
- Recent pop-ups
- Team members
- Instagram link and location

To add a photo, upload the image to the repo and put its file name in `data.js`
(for example `photo: "jane.jpg"`).

Page text lives in `index.html`, `team.html`, and `menu.html`. Colors and fonts are at the top of `styles.css`.

## Hosting
Hosted on Vercel. Every commit to `main` updates the live site automatically.
