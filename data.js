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
  aboutWhy: "",        // busy walkway / students between classes
  aboutWhat: "team-table.jpg",   // team at the table
  teamGroup: "team-photo.jpg",   // whole team group photo
};


// ---------- Menu ----------
// The first 4 items (food first, then drinks) also show on the Home page.
// soldOut: true shows the item faded and crossed out.
const MENU_UPDATED = "October 21";

// price: put a number like 5 or 5.5. Leave null to hide the price.
const FOOD = [
  { name: "Veggie bánh mì", price: 7, photo: "banh-mi.jpg", soldOut: false },
  { name: "Pork bánh mì", price: null, photo: "banh-mi.jpg", soldOut: false },
  { name: "Chicken bánh mì", price: null, photo: "banh-mi.jpg", soldOut: false },
];

const DRINKS = [
  { name: "Boba", price: null, photo: "", soldOut: false },
];

// Combo deals. Empty [ ] hides the deals box. Example:
// { name: "Bánh mì + boba", description: "Any bánh mì and a boba", price: 10 },
const DEALS = [];


// ---------- Past pop-ups (newest first) ----------
// Home shows the first 3. About shows a bigger collage of the first 3.
const POPUPS = [
  { name: "Bánh mì pop-up", photo: "banh-mi-popup.jpg" },
  { name: "In-N-Out pop-up", photo: "" },
  { name: "Costco pizza pop-up", photo: "team-group.jpg" },
];


// ---------- Team ----------
const EXECUTIVES = [
  { name: "First Last", role: "CEO", photo: "" },
  { name: "First Last", role: "CFO", photo: "" },
  { name: "First Last", role: "CTO", photo: "" },
  { name: "First Last", role: "CMO", photo: "" },
  { name: "First Last", role: "Secretary", photo: "" },
  { name: "First Last", role: "Head of HR", photo: "" },
];

const MEMBERS = [
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
  { name: "First Last", photo: "" },
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
