# Sydney Events Platform

A full-stack MERN-based web platform that automatically collects, manages, and displays public events happening in Sydney, Australia.

This project demonstrates an end-to-end pipeline:
**scraping → storing → displaying → reviewing → importing events**, along with user email capture and admin workflows.

---

## 🔧 Tech Stack

**Frontend**
- HTML
- CSS
- Vanilla JavaScript

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Other**
- Git & GitHub
- REST APIs

---
##  Live Demo

Frontend (deployed on Vercel):  
https://sydney-events-platform-one.vercel.app/
 ---

##  Features Implemented

### Event Scraping Pipeline
- Simulated scraper demonstrating:
  - New event detection
  - Updated event detection
  - Status tagging
- Designed to support real scraping using Puppeteer / Cheerio

### Event Data Model
Each event includes:
- Title
- Date & Time
- Venue & City
- Description
- Source Website
- Original Event URL
- Status Tags (`new`, `updated`, `inactive`, `imported`)
- Scrape timestamps

### Event Listing Website
- Minimal and clean UI
- Event cards display:
  - Event name
  - Date & time
  - Venue
  - Description
  - Status
- “GET TICKETS” CTA per event

### Email Capture & Consent
- Email input + consent checkbox before redirect
- Email, consent, and event reference stored in database
- Redirects user to original event source after submission

### Admin Dashboard
- Table view of events
- Import event action
- Imported metadata:
  - importedAt
  - importedBy
- Demonstrates review → import workflow

---

##  Authentication
- Dashboard currently uses a mock authentication flow
- Architecture supports Google OAuth integration
- OAuth can be enabled by adding Google credentials and protected routes


---

##  How It Works

1. Scraper runs periodically to fetch/update events
2. Events are stored with appropriate status tags
3. Events are displayed on the public website
4. Users submit email + consent before ticket redirection
5. Admin reviews events in dashboard
6. Events are imported into the platform

---

## Limitations & Assumptions

- Scraping logic is simulated due to time and anti-bot constraints
- Real scraping sources can be added using Puppeteer or Cheerio
- Google OAuth is demonstrated conceptually but not enabled live

---

## 👤 Author

Manya Aggarwal  
Final-year B.Tech student  
