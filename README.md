# StarvinSlugs

We are StarvinSlugs, a student-run snack and drink business at UC Santa Cruz.


## Updating the site
Our main information is present in **`data.js`**:
- Menu items, prices, sold-out items, and deals
- Upcoming fundraiser card (set `UPCOMING = null` to hide it)
- Recent pop-ups
- Team members
- Instagram link and location

To add a photo, upload the image to the repo and put its file name in `data.js`
(for example `photo: "bob.jpg"`).

Page text lives in `index.html`, `team.html`, and `menu.html`. Colors and fonts are at the top of `styles.css`.

## Hosting
Hosted on Vercel. Every commit to `main` updates the live site automatically.
