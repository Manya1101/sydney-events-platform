
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  venue: String,
  city: String,
  description: String,
  source: String,
  url: String,
  status: { 
    type: String, 
    enum: ["new", "updated", "inactive", "imported"], 
    default: "new" 
  },
  lastScrapedAt: Date,
  importedAt: Date,
  importedBy: String
});

module.exports = mongoose.model("Event", EventSchema);
