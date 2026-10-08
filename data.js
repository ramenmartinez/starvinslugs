// ============================================================
//  STARVINSLUGS SITE CONTENT
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
// group must be one of: Executives or Members
// photo is optional: upload a portrait image and write its file name, e.g. "jane.jpg"
// Without a photo, the person's initials show instead.
const TEAM = [
  { name: "Yaamini Putti", role: "CEO", group: "Executives", photo: "", bio: "" },
  { name: "Anika Ranjan", role: "CTO", group: "Executives", photo: "", bio: "" },
  { name: "Aarav Khedkar", role: "CFO", group: "Executives", photo: "", bio: "" },
  { name: "Austin La", role: "CMO", group: "Executives", photo: "", bio: "" },
  { name: "Shreeya Baghel", role: "Secretary", group: "Executives", photo: "", bio: "" },
  { name: "Aanya Agarwal", role: "", group: "Members", photo: "", bio: "" },
  { name: "Brian Kuan", role: "", group: "Members", photo: "", bio: "" },
  { name: "Colton Chu", role: "", group: "Members", photo: "", bio: "" },
  { name: "Ella Magga", role: "", group: "Members", photo: "", bio: "" },
  { name: "Jay Bandaru", role: "", group: "Members", photo: "", bio: "" },
  { name: "Jerry Canaveral", role: "", group: "Members", photo: "", bio: "" },
  { name: "Justin Brinkman", role: "", group: "Members", photo: "", bio: "" },
  { name: "Kaelyn Gee", role: "", group: "Members", photo: "", bio: "" },
  { name: "Olivia Beissel", role: "", group: "Members", photo: "", bio: "" },
  { name: "Ramen Martinez", role: "", group: "Members", photo: "", bio: "" },
  { name: "Rishab Vemmula", role: "", group: "Members", photo: "", bio: "" },
];

const TEAM_GROUPS = ["Executives", "Members"];
