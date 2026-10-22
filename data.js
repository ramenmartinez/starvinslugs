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
  usualHours: "12pm until we sell out",
  payment: "Zelle, Venmo, or cash",
};


// ---------- Next pop-up (dark band on the Home page) ----------
const NEXT_POPUP = {
  location: "Science & Engineering Library",
  time: "12pm until we sell out",
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
const MENU_UPDATED = "October 21";

// price: put a number like 5 or 5.5. Leave null to hide the price.
const FOOD = [
  { name: "Veggie Bánh Mì", price: 7, photo: "banh-mi.jpg", soldOut: false },
  { name: "Pork Bánh Mì", price: null, photo: "banh-mi.jpg", soldOut: false },
  { name: "Chicken Bánh Mì", price: null, photo: "banh-mi.jpg", soldOut: false },
];

const DRINKS = [
  { name: "Strawberry Mango Passionfruit Fruit Tea", price: null, photo: "fruit-tea.jpg", soldOut: false },
  { name: "Rose Vanilla Milk Tea", price: null, photo: "milk-tea.jpg", soldOut: false },
];

// Combo deals. Empty [ ] hides the deals box. Example:
// { name: "Bánh mì + boba", description: "Any bánh mì and a boba", price: 10 },
const DEALS = [];


// ---------- Past pop-ups (newest first) ----------
// Home shows the first 3. About shows a bigger collage of the first 3.
const POPUPS = [
  { name: "Bánh Mì Pop-Up", photo: "banh-mi-popup.jpg" },
  { name: "Costco Pizza Pop-Up", photo: "team-group.jpg" },
];


// ---------- Team ----------
const EXECUTIVES = [
  { name: "Yaamini Putti", role: "CEO", photo: "hs-yaamini.jpg" },
  { name: "Aarav Khedkar", role: "CFO", photo: "hs-aarav.jpg" },
  { name: "Anika Ranjan", role: "CTO", photo: "hs-anika.jpg" },
  { name: "Austin La", role: "CMO", photo: "hs-austin.jpg" },
  { name: "Shreeya Baghel", role: "Secretary", photo: "hs-shreeya.jpg" },
  { name: "Colton Chu", role: "Head of HR", photo: "hs-colton.jpg" },
];

const MEMBERS = [
  { name: "Aanya Agarwal", photo: "hs-aanya.jpg" },
  { name: "Brian Kuan", photo: "hs-brian.jpg" },
  { name: "Ella Magga", photo: "hs-ella.jpg" },
  { name: "Jayanth Bandaru", photo: "hs-jayanth.jpg" },
  { name: "Jerryko Canaveral", photo: "hs-jerryko.jpg" },
  { name: "Justin Brinkman", photo: "hs-justin.jpg" },
  { name: "Kaelyn Gee", photo: "hs-kaelyn.jpg" },
  { name: "Olivia Beissel", photo: "hs-olivia.jpg" },
  { name: "Ramen Martinez", photo: "hs-ramen.jpg" },
  { name: "Rishab Vemula", photo: "hs-rishab.jpg" },
];


// ---------- Common questions (Contact page) ----------
const FAQ = [
  { q: "How do I pay?", a: "Zelle, Venmo, or cash." },
  { q: "Where and when are you usually set up?", a: "Usually outside the Science & Engineering Library, from 12pm until we sell out. The next pop-up is always on the Home page." },
  { q: "Can I pre-order?", a: "Yes! Text us at (831) 508-8689 or DM us on Instagram @starvinslugs." },
];


// ---------- Request form ----------
// Leave "" and the form opens the visitor's email app with their request
// filled in. If you make a Google Form later, put its link here instead.
const REQUEST_FORM_URL = "";
