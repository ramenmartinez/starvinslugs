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


// ---------- No pop-up today? ----------
// true = menu, location and time all say TBD (weekends and days off).
// false = normal menu, location and time.
const MENU_TBD = false;


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
  homeHero: "home-hero.jpg",   // team with bánh mì and boba
  aboutWhy: "about-team-boba.jpg",   // team with boba and bánh mì
  aboutWhat: "about-serving.jpg",   // serving students at the table
  teamGroup: "team-photo.jpg",   // whole team group photo
};


// ---------- Menu ----------
// The first 4 items (food first, then drinks) also show on the Home page.
// soldOut: true shows the item faded and crossed out.
// note: small gray line under the name, like where the item is from.
const MENU_UPDATED = "November 4";

// price: put a number like 5 or 5.5, or text like "Half $7 · Full $13". Leave null to hide the price.
const FOOD = [
  { name: "Pork Bánh Mì", price: "Half $7 · Full $13", photo: "banh-mi-pork.jpg", soldOut: false },
  { name: "Chicken Bánh Mì", price: "Half $7 · Full $13", photo: "banh-mi-chicken-2.jpg", soldOut: false },
  { name: "Veggie Bánh Mì", price: "Half $7 · Full $13", photo: "banh-mi-veggie.jpg", soldOut: false },
];

const DRINKS = [
  { name: "Creamy Jasmine Milk Tea", price: 8, photo: "jasmine-milk-tea.jpg", soldOut: false },
  { name: "Silky Mango", price: 8, photo: "silky-mango-tea.jpg", soldOut: false },
  { name: "Lychee on Lychee", price: 8, photo: "lychee-tea.jpg", soldOut: false },
  { name: "Taro Lover Milk Tea", price: 8, photo: "taro-milk-tea.jpg", soldOut: false },
  { name: "Classic Thai Tea", price: 8, photo: "thai-tea.jpg", soldOut: false },
];

// Combo deals. Empty [ ] hides the deals box. Example:
// { name: "Bánh mì + boba", description: "Any bánh mì and a boba", price: 10 },
const DEALS = [];


// ---------- Past pop-ups (newest first) ----------
// Home shows the first 3 (skipping aboutOnly ones). About shows up to 5 in a bigger collage.
// focus: optional, which part of the photo to keep when it gets cropped.
const POPUPS = [
  { name: "Bánh Mì & Boba Pop-Up", photo: "popup-banh-mi-boba.jpg" },
  { name: "Boba Bánh Mì Pop-Up", photo: "popup-boba-banh-mi.jpg" },
  { name: "Boba Pop-Up", photo: "popup-request-form.jpg", focus: "50% 15%", aboutOnly: true },
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
