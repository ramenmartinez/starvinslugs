# StarvinSlugs website

Plain HTML, CSS and JavaScript. No build step.

## Updating the site
Almost everything lives in **data.js**: contact info, next pop-up, menu and prices,
deals, past pop-ups, team names, common questions, and photo file names.

To add a photo: upload the image to this repo, then put its file name in data.js
(for example `photo: "pizza.jpg"`).

Page wording lives in index.html, about.html, menu.html, team.html, and contact.html.
Colors and fonts are at the top of styles.css.

## Hosting
Hosted on Vercel. Every commit to main updates the live site.
