
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Event = require("./models/Event");
const Lead = require("./models/Lead");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/events");

app.get("/api/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post("/api/leads", async (req, res) => {
  const lead = await Lead.create(req.body);
  res.json(lead);
});

app.post("/api/import/:id", async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    { 
      status: "imported", 
      importedAt: new Date(), 
      importedBy: "admin@demo.com" 
    },
    { new: true }
  );
  res.json(event);
});

app.listen(4000, () => console.log("Backend running on 4000"));
