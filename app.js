// ============================================================
//  Builds the shared header/footer and fills each page from data.js.
//  You shouldn't need to edit this file.
// ============================================================

function el(tag, className, text) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (text !== undefined) n.textContent = text;
  return n;
}

function price(p) {
  if (p === null || p === undefined || p === "") return "";
  if (typeof p === "string") return p;
  return Number.isInteger(p) ? "$" + p : "$" + p.toFixed(2);
}

// A photo, or a labeled gray placeholder if no file name is set yet.
function photo(src, label, extraClass) {
  const box = el("div", "photo" + (extraClass ? " " + extraClass : ""));
  if (src) {
    const img = el("img");
    img.src = src;
    img.alt = label;
    img.loading = "lazy";
    box.appendChild(img);
  } else {
    box.classList.add("empty");
    box.appendChild(el("span", "", label));
  }
  return box;
}

function fill(id, build) {
  const target = document.getElementById(id);
  if (target) build(target);
}

// ---------- Header ----------
(function () {
  const pages = [
    ["Home", "index.html"],
    ["About", "about.html"],
    ["Menu", "menu.html"],
    ["Team", "team.html"],
    ["Contact", "contact.html"],
  ];
  const current = document.body.dataset.page;
  const header = el("header", "site-header");
  const wrap = el("div", "wrap");
  const brand = el("a", "brand");
  brand.href = "index.html";
  const logo = el("img");
  logo.src = "logo.png";
  logo.alt = "StarvinSlugs logo";
  brand.append(logo, el("span", "", "StarvinSlugs"));
  const nav = el("nav", "nav");
  nav.setAttribute("aria-label", "Main");
  pages.forEach(function (pg) {
    const a = el("a", "", pg[0]);
    a.href = pg[1];
    if (pg[0].toLowerCase() === current) a.setAttribute("aria-current", "page");
    nav.appendChild(a);
  });
  wrap.append(brand, nav);
  header.appendChild(wrap);
  document.body.prepend(header);
})();

// ---------- Footer ----------
(function () {
  const footer = el("footer", "site-footer");
  const wrap = el("div", "wrap");
  wrap.append(el("b", "", "StarvinSlugs"), el("span", "", SITE.usualSpot + " · " + SITE.usualHours));
  const contact = el("span");
  const mail = el("a", "", SITE.email);
  mail.href = "mailto:" + SITE.email;
  const tel = el("a", "", SITE.phone);
  tel.href = "tel:" + SITE.phoneLink;
  const ig = el("a", "", SITE.instagram);
  ig.href = SITE.instagramUrl;
  ig.target = "_blank";
  ig.rel = "noopener";
  contact.append(mail, " · ", tel, " · ", ig);
  wrap.appendChild(contact);
  footer.appendChild(wrap);
  document.body.appendChild(footer);
})();

// ---------- Text that comes straight from data.js ----------
const DATA = { SITE: SITE, NEXT_POPUP: NEXT_POPUP, MENU_UPDATED: MENU_UPDATED };
document.querySelectorAll("[data-fill]").forEach(function (n) {
  const path = n.dataset.fill.split(".");
  let v = DATA[path[0]];
  for (let i = 1; i < path.length && v; i++) v = v[path[i]];
  if (v !== undefined) n.textContent = v;
});
document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + SITE.email; });
document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = "tel:" + SITE.phoneLink; });

// ---------- Big photos ----------
// Map spots get a real Google Map
document.querySelectorAll('[data-photo="map"]').forEach(function (slot) {
  const box = el("div", "photo map");
  const frame = el("iframe");
  frame.src = MAP.embed;
  frame.title = "Map: " + SITE.usualSpot;
  frame.referrerPolicy = "no-referrer-when-downgrade";
  const link = el("a", "map-link", "Open in Google Maps");
  link.href = MAP.link;
  link.target = "_blank";
  link.rel = "noopener";
  box.append(frame, link);
  slot.replaceWith(box);
});

document.querySelectorAll("[data-photo]").forEach(function (slot) {
  slot.replaceWith(photo(PHOTOS[slot.dataset.photo], slot.dataset.label || "Photo", slot.className));
});

// ---------- Home: first 4 menu items ----------
fill("home-menu", function (box) {
  FOOD.concat(DRINKS).slice(0, 4).forEach(function (item) {
    const t = el("div", "tile" + (item.soldOut ? " sold" : ""));
    t.appendChild(photo(item.photo, item.name));
    const cap = el("div", "cap");
    cap.append(el("span", "name", item.name), el("span", "", item.soldOut ? "Sold out" : price(item.price)));
    t.appendChild(cap);
    box.appendChild(t);
  });
});

// ---------- Home: recent pop-ups ----------
fill("home-popups", function (box) {
  box.style.gridTemplateColumns = "repeat(" + Math.min(POPUPS.length, 3) + ", minmax(0, 1fr))";
  POPUPS.slice(0, 3).forEach(function (p) {
    const d = el("div");
    d.append(photo(p.photo, p.name), el("div", "popup-cap", p.name));
    box.appendChild(d);
  });
});

// ---------- About: pop-up collage ----------
fill("about-popups", function (box) {
  if (POPUPS.length === 2) box.classList.add("two");
  POPUPS.slice(0, 3).forEach(function (p, i) {
    box.appendChild(photo(p.photo, p.name, i === 0 ? "big" : ""));
  });
});

// ---------- Menu page ----------
function menuCards(list, box) {
  list.forEach(function (item) {
    const c = el("article", "card" + (item.soldOut ? " sold" : ""));
    c.appendChild(photo(item.photo, item.name));
    const body = el("div", "body");
    const left = el("span");
    left.appendChild(el("span", "name", item.name));
    if (item.soldOut) left.appendChild(el("span", "badge", "Sold out"));
    if (item.note) left.appendChild(el("span", "note", item.note));
    body.append(left, el("span", "", price(item.price)));
    c.appendChild(body);
    box.appendChild(c);
  });
}
fill("menu-food", function (box) { menuCards(FOOD, box); });
fill("menu-drinks", function (box) {
  menuCards(DRINKS, box);
  if (DEALS.length) {
    const d = el("div", "deals");
    d.appendChild(el("h3", "", "Combo deals"));
    const ul = el("ul");
    DEALS.forEach(function (deal) {
      const li = el("li");
      const left = el("span");
      left.append(el("b", "", deal.name), el("small", "", deal.description));
      li.append(left, el("b", "", price(deal.price)));
      ul.appendChild(li);
    });
    d.appendChild(ul);
    box.appendChild(d);
  }
});

// ---------- Team page ----------
function people(list, box, defaultRole) {
  list.forEach(function (m) {
    const p = el("div", "person");
    p.append(photo(m.photo, "Headshot"), el("b", "", m.name), el("span", "", m.role || defaultRole));
    box.appendChild(p);
  });
}
fill("team-execs", function (box) { people(EXECUTIVES, box); });
fill("team-members", function (box) { people(MEMBERS, box, "Member"); });

// ---------- Contact: FAQ ----------
fill("faq", function (box) {
  FAQ.forEach(function (f) {
    const d = el("div");
    d.append(el("h3", "", f.q), el("p", "", f.a));
    box.appendChild(d);
  });
});

// ---------- Contact: request form ----------
fill("request-form", function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const what = form.elements.what.value.trim();
    const msg = form.querySelector(".form-msg");
    if (!what) {
      msg.textContent = "Tell us what you'd like to see first.";
      form.elements.what.focus();
      return;
    }
    const kind = form.elements.kind.value;
    const allergies = form.elements.allergies.value.trim();
    if (REQUEST_FORM_URL) {
      window.open(REQUEST_FORM_URL, "_blank");
      return;
    }
    if (form.elements._honey.value) return; // bot filled the hidden field
    const button = form.querySelector("button");
    button.disabled = true;
    msg.textContent = "Sending...";
    fetch("https://formsubmit.co/ajax/" + SITE.email, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "Menu request: " + what,
        _template: "table",
        _captcha: "false",
        Type: kind,
        "What they'd like to see": what,
        "Allergies / food restrictions": allergies || "None",
      }),
    })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function () {
        form.reset();
        msg.textContent = "Thanks! Your request was sent.";
      })
      .catch(function () {
        msg.textContent = "That didn't go through. Try again, or email us at " + SITE.email + ".";
      })
      .finally(function () { button.disabled = false; });
  });
  form.elements.what.addEventListener("input", function () { form.querySelector(".form-msg").textContent = ""; });
});
