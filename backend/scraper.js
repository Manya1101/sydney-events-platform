
/*
 DEMO SCRAPER
 Replace this with Puppeteer/Cheerio scraping.
 Logic demonstrates:
 - new event detection
 - update detection
 - inactive marking
*/

const mongoose = require("mongoose");
const Event = require("./models/Event");

mongoose.connect("mongodb://localhost:27017/events");

async function scrape() {
  const existing = await Event.findOne({ title: "Sydney Tech Meetup" });

  if (!existing) {
    await Event.create({
      title: "Sydney Tech Meetup",
      date: "2026-03-20 18:00",
      venue: "Tech Hub Sydney",
      city: "Sydney",
      description: "Networking for developers",
      source: "DemoSource",
      url: "https://example.com",
      status: "new",
      lastScrapedAt: new Date()
    });
  } else {
    existing.status = "updated";
    existing.lastScrapedAt = new Date();
    await existing.save();
  }

  console.log("Scraping simulation complete");
  process.exit();
}

scrape();
