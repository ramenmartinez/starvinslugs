// ============================================================
//  STARVINSLUGS SITE CONTENT
//  Almost everything you'll update lives in this one file.
//  Only change the text between the quotes "like this".
//
//  PHOTOS: upload the image to the GitHub repo (same place as
//  this file), then type its file name, e.g. photo: "pizza.jpg".
//  Leave photo: "" to show a gray placeholder.
// ============================================================


// ---------- Contact info (used in the footer and Contact page) ----------
const SITE = {
  email: "starvinslugs7@gmail.com",
  phone: "(831) 508-8689",
  phoneLink: "+18315088689",
  instagram: "@starvinslugs",
  instagramUrl: "https://www.instagram.com/starvinslugs/",
  usualSpot: "Outside the Science & Engineering Library",
  usualHours: "1:15pm until we sell out",
  payment: "Zelle, Venmo, or cash",
};


// ---------- Next pop-up (dark band on the Home page) ----------
const NEXT_POPUP = {
  location: "Science & Engineering Library",
  time: "1:15pm until we sell out",
  howToSpot: "Look for our table out front.",
};


// ---------- Map (Home "Next pop-up" band and About "Where to find us") ----------
// To move the pin, change the place name after "q=" (use + for spaces).
const MAP = {
  embed: "https://www.google.com/maps?q=Science+and+Engineering+Library,+Santa+Cruz,+CA&z=17&output=embed",
  link: "https://www.google.com/maps/search/?api=1&query=Science+and+Engineering+Library+Santa+Cruz+CA",
};


// ---------- Big photos around the site ----------
const PHOTOS = {
  homeHero: "stand-pizza.jpg",   // team serving at the stand
  aboutWhy: "about-walk.jpg",   // students between classes
  aboutWhat: "about-food.jpg",   // bánh mì
  teamGroup: "team-photo.jpg",   // whole team group photo
};


// ---------- Menu ----------
// The first 4 items (food first, then drinks) also show on the Home page.
// soldOut: true shows the item faded and crossed out.
// note: small gray line under the name, like where the item is from.
const MENU_UPDATED = "October 27";

// price: put a number like 5 or 5.5, or text like "Half $7 · Full $13". Leave null to hide the price.
const FOOD = [
  { name: "Pork Bánh Mì", price: "Half $7 · Full $13", photo: "banh-mi-pork.jpg", soldOut: false },
  { name: "Chicken Bánh Mì", price: "Half $7 · Full $13", photo: "banh-mi-chicken.jpg", soldOut: false },
  { name: "Veggie Bánh Mì", price: "Half $7 · Full $13", photo: "banh-mi-veggie.jpg", soldOut: false },
];

const DRINKS = [
  { name: "Creamy Jasmine Milk Tea", price: 7, photo: "jasmine-milk-tea.jpg", soldOut: false },
  { name: "Taro Lover Milk Tea", price: 7, photo: "taro-milk-tea.jpg", soldOut: false },
  { name: "Lychee on Lychee", price: 7, photo: "lychee-tea.jpg", soldOut: false },
  { name: "Classic Thai Tea", price: 7, photo: "thai-tea.jpg", soldOut: false },
];

// Combo deals. Empty [ ] hides the deals box. Example:
// { name: "Bánh mì + boba", description: "Any bánh mì and a boba", price: 10 },
const DEALS = [];


// ---------- Past pop-ups (newest first) ----------
// Home shows the first 3. About shows a bigger collage of the first 3.
const POPUPS = [
  { name: "Boba Bánh Mì Pop-Up", photo: "popup-boba-banh-mi.jpg" },
  { name: "Bánh Mì Pop-Up", photo: "banh-mi-popup.jpg" },
  { name: "Costco Pizza Pop-Up", photo: "team-group.jpg" },
];


// ---------- Team ----------
const EXECUTIVES = [
  { name: "Shreeya Baghel", role: "CEO", photo: "hs-shreeya.jpg" },
  { name: "Justin Brinkman", role: "CFO", photo: "hs-justin.jpg" },
  { name: "Ramen Martinez", role: "CTO", photo: "hs-ramen.jpg" },
  { name: "Rishab Vemula", role: "CMO", photo: "hs-rishab.jpg" },
  { name: "Brian Kuan", role: "Secretary", photo: "hs-brian.jpg" },
  { name: "Ella Magga", role: "Head of HR", photo: "hs-ella.jpg" },
];

const MEMBERS = [
  { name: "Aanya Agarwal", photo: "hs-aanya.jpg" },
  { name: "Aarav Khedkar", photo: "hs-aarav.jpg" },
  { name: "Anika Ranjan", photo: "hs-anika.jpg" },
  { name: "Austin La", photo: "hs-austin.jpg" },
  { name: "Colton Chu", photo: "hs-colton.jpg" },
  { name: "Jayanth Bandaru", photo: "hs-jayanth.jpg" },
  { name: "Jerryko Canaveral", photo: "hs-jerryko.jpg" },
  { name: "Kaelyn Gee", photo: "hs-kaelyn.jpg" },
  { name: "Olivia Beissel", photo: "hs-olivia.jpg" },
  { name: "Yaamini Putti", photo: "hs-yaamini.jpg" },
];


// ---------- Common questions (Contact page) ----------
const FAQ = [
  { q: "How do I pay?", a: "Zelle, Venmo, or cash." },
  { q: "Where and when are you usually set up?", a: "Usually outside the Science & Engineering Library, from 1:15pm until we sell out. The next pop-up is always on the Home page." },
  { q: "Can I pre-order?", a: "Yes! Text us at (831) 508-8689 or DM us on Instagram @starvinslugs." },
];


// ---------- Request form ----------
// Requests are sent straight to SITE.email through FormSubmit (formsubmit.co).
// The very first request sends an "Activate Form" email to that inbox:
// click the button in it once, and every request after that arrives normally.
const REQUEST_FORM_URL = "";
