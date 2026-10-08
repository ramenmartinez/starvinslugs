// ============================================================
//  STARVINSLUGS SITE CONTENT
//  Everything you'll update regularly is in this one file.
//  Edit the text between the quotes, then save / commit.
// ============================================================


// ---------- Basics ----------
const SITE = {
  instagramHandle: "@starvinslugs",
  instagramUrl: "https://www.instagram.com/starvinslugs/",
  location: "Science & Engineering Library",
};


// ---------- Upcoming fundraiser (card on the home page) ----------
// Set to null to hide it after the event:   const UPCOMING = null;
const UPCOMING = {
  title: "Pizza, hot dog & energy drink fundraiser",
  date: "Thursday, October 8",
  location: "Science & Engineering Library",
  details: "Everything is $3, or pick any two for $5. Follow our Instagram for hours and the energy drink lineup.",
};


// ---------- Menu ----------
// soldOut: true  -> item shows faded and crossed out
// note is optional (small gray text next to the name)
const DRINKS = [
  { name: "Energy drink", price: 3, note: "Monster or Celsius variety", soldOut: false },
];

const FOOD = [
  { name: "Pepperoni Pizza", price: 3, soldOut: false },
  { name: "Cheese Pizza", price: 3, soldOut: false },
  { name: "Hot Dog", price: 3, soldOut: false },
];

// Delete everything inside [ ] to hide the deals box.
const DEALS = [
  { name: "Drink + pizza", description: "Any energy drink and a slice of pizza", price: 5 },
  { name: "Drink + hot dog", description: "Any energy drink and a hot dog", price: 5 },
];


// ---------- Recent pop-ups (home page) ----------
// Newest at the TOP. Only the first 3 show.
// photo is optional: upload the image to the repo and write its file name, e.g. "popup-oct8.jpg"
const EVENTS = [
  {
    title: "Pizza & Energy Drink Pop-up",
    date: "October 2026",
    location: "Science & Engineering Library",
    recap: "Our first pop-up. Pepperoni and cheese slices, Celsius and White Monster, right outside the library.",
    photo: "",
  },
];


// ---------- Team ----------
// group must be one of: Executive, Finance, Tech, Marketing, Operations
// photo is optional: upload a portrait image and write its file name, e.g. "jane.jpg"
// Without a photo, the person's initials show instead.
const TEAM = [
  { name: "First Last", role: "CEO", group: "Executive", photo: "", bio: "" },
  { name: "First Last", role: "COO", group: "Executive", photo: "", bio: "" },
  { name: "First Last", role: "CFO", group: "Finance", photo: "", bio: "" },
  { name: "First Last", role: "CTO", group: "Tech", photo: "", bio: "" },
  { name: "First Last", role: "Marketing Lead", group: "Marketing", photo: "", bio: "" },
  { name: "First Last", role: "Operations Lead", group: "Operations", photo: "", bio: "" },
];

const TEAM_GROUPS = ["Executive", "Finance", "Tech", "Marketing", "Operations"];
