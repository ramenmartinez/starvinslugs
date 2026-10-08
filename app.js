// ============================================================
//  Builds the menu, team, events, and upcoming-event sections
//  from data.js. You shouldn't need to edit this file.
// ============================================================

// Small helper: el("p", "class-name", "text")
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function formatPrice(price) {
  return Number.isInteger(price) ? "$" + price : "$" + price.toFixed(2);
}

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join("");
}

function priceRow(item, withSoldOut) {
  const li = el("li", "price-row" + (withSoldOut && item.soldOut ? " sold-out" : ""));
  const nameWrap = el("span", "name-wrap");
  nameWrap.appendChild(el("span", "name", item.name));
  if (item.note) nameWrap.appendChild(el("span", "note", withSoldOut ? item.note : "(" + item.note + ")"));
  if (withSoldOut && item.soldOut) nameWrap.appendChild(el("span", "sold-badge", "Sold out"));
  const dots = el("span", "dots");
  dots.setAttribute("aria-hidden", "true");
  li.append(nameWrap, dots, el("span", "price", formatPrice(item.price)));
  return li;
}

const ICON_CALENDAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
const ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

// ---------- Shared: footer year + Instagram links ----------
document.querySelectorAll("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });
document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = SITE.instagramUrl; });
document.querySelectorAll("[data-ig-handle]").forEach(function (n) { n.textContent = SITE.instagramHandle; });
document.querySelectorAll("[data-location]").forEach(function (n) { n.textContent = SITE.location; });

// ---------- Home: upcoming event ----------
(function () {
  const box = document.getElementById("upcoming");
  if (!box) return;
  if (!UPCOMING) { box.parentElement.remove(); return; }

  box.querySelector("[data-up-title]").textContent = UPCOMING.title;
  box.querySelector("[data-up-date]").insertAdjacentHTML("afterbegin", ICON_CALENDAR);
  box.querySelector("[data-up-date] span").textContent = UPCOMING.date;
  box.querySelector("[data-up-loc]").insertAdjacentHTML("afterbegin", ICON_PIN);
  box.querySelector("[data-up-loc] span").textContent = UPCOMING.location;
  box.querySelector("[data-up-details]").textContent = UPCOMING.details;

  const list = box.querySelector("[data-up-prices]");
  FOOD.concat(DRINKS).filter(function (i) { return !i.soldOut; }).forEach(function (item) {
    list.appendChild(priceRow(item, false));
  });

  const dealsBox = box.querySelector("[data-up-deals]");
  if (DEALS.length === 0) { dealsBox.remove(); return; }
  const ul = dealsBox.querySelector("ul");
  DEALS.forEach(function (d) {
    const li = el("li");
    li.append(el("span", "", d.name), el("span", "", formatPrice(d.price)));
    ul.appendChild(li);
  });
})();

// ---------- Home: recent pop-ups ----------
(function () {
  const grid = document.getElementById("popups");
  if (!grid) return;
  const recent = EVENTS.slice(0, 3);
  if (recent.length === 0) {
    grid.replaceWith(el("p", "muted", "No pop-ups yet. Check back soon."));
    return;
  }
  recent.forEach(function (ev) {
    const li = el("li", "card popup");
    if (ev.photo) {
      const img = el("img");
      img.src = ev.photo;
      img.alt = ev.title;
      img.loading = "lazy";
      li.appendChild(img);
    }
    const body = el("div", "popup-body");
    body.append(
      el("p", "label", ev.date + " · " + ev.location),
      el("h3", "", ev.title),
      el("p", "recap", ev.recap)
    );
    li.appendChild(body);
    grid.appendChild(li);
  });
})();

// ---------- Team page ----------
(function () {
  const wrap = document.getElementById("team");
  if (!wrap) return;
  TEAM_GROUPS.forEach(function (group) {
    const members = TEAM.filter(function (m) { return m.group === group; });
    if (members.length === 0) return;
    const section = el("section", "team-group");
    section.appendChild(el("h2", "", group));
    const grid = el("ul", "team-grid");
    members.forEach(function (m) {
      const li = el("li", "member");
      const photo = el("div", "photo");
      if (m.photo) {
        const img = el("img");
        img.src = m.photo;
        img.alt = "Portrait of " + m.name;
        img.loading = "lazy";
        photo.appendChild(img);
      } else {
        const i = el("span", "initials", initials(m.name));
        i.setAttribute("aria-hidden", "true");
        photo.appendChild(i);
      }
      li.append(photo, el("h3", "", m.name), el("p", "role", m.role));
      if (m.bio) li.appendChild(el("p", "bio", m.bio));
      grid.appendChild(li);
    });
    section.appendChild(grid);
    wrap.appendChild(section);
  });
})();

// ---------- Menu page ----------
(function () {
  const grid = document.getElementById("menu");
  if (!grid) return;
  [["Drinks", DRINKS], ["Food", FOOD]].forEach(function (pair) {
    const col = el("section", "card menu-col");
    col.appendChild(el("h2", "", pair[0]));
    const ul = el("ul");
    pair[1].forEach(function (item) { ul.appendChild(priceRow(item, true)); });
    col.appendChild(ul);
    grid.appendChild(col);
  });

  const deals = document.getElementById("menu-deals");
  if (DEALS.length === 0) { deals.remove(); return; }
  const ul = deals.querySelector("ul");
  DEALS.forEach(function (d) {
    const li = el("li");
    const left = el("span");
    left.append(el("span", "deal-name", d.name), el("span", "deal-desc", d.description));
    li.append(left, el("span", "deal-price", formatPrice(d.price)));
    ul.appendChild(li);
  });
})();
