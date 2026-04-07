# 📝 Global Explorer: Full-Stack Countries Encyclopedia

## 📌 Project Description & Purpose

A comprehensive full-stack application that allows users to explore global data and manage a personalized list of "Saved Countries." This project represents the Full-Stack Capstone of my 12-month intensive training at AnnieCannons, tracking my progression from a static UI to a fully deployed PERN stack (PostgreSQL, Express, React, Node.js) architecture.


## 🚀 Live Site

Here's the link to view the live app: https://countries-app-mimi-version4.netlify.app/

## 🖼️ Screenshots

<img width="1440" height="928" alt="Screenshot 2026-04-07 at 5 25 20 PM" src="https://github.com/user-attachments/assets/da688828-66a5-4fe7-aea7-8ef949735d1b" />



## ✨ Features

This is what you can do on the app: 

- **Browse Countries**: View all 250+ countries with population, region, and other information
- **Search Functionality**: Real-time search by country name (case-insensitive)
- **Country Details**: View detailed information including flags, population, region, and capital
- **Alphabetical Sorting**: Countries are automatically sorted alphabetically for easy browsing
- **Save Countries**: Save favorite countries to your personal collection
- **View Tracking**: Track how many times each country has been viewed
- **User Profile**: Submit and display user information

## 🛠️ Tech Stack

**Frontend**

- **Languages:** React.js to allow for efficient state management and the reuse of UI elements across multiple views

**Server/API**

- **Languages:** Node.js provided a consistent JavaScript environment across the entire stack
- **Framework:** Express was selected for its minimalist framework, giving me the flexibility to build custom middleware for request validation and error handling
- **Deployment:** Netlify

**Database**

- **Languages:** PostgreSQL was chosen for its ability to handle complex relational data and ensure data integrity
- **Deployment:** Neon Database (Serverless Postgres)

## 🔹 API Documentation

These are the API endpoints I built: 
- `POST /api/save-one-country` - Save a country
- `GET /api/saved-countries` - Retrieve saved countries
- `POST /api/update-one-country-count` - Update view count
- `POST /api/create-user` - Store user profile
- `GET /api/get-newest-user` - Retrieve user profile

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE saved_countries (
  saved_country_id SERIAL PRIMARY KEY,
country_name VARCHAR NOT NULL UNIQUE
  );
  CREATE TABLE country_counts (
  country_count_id SERIAL PRIMARY KEY,
country_name VARCHAR NOT NULL UNIQUE,
count INTEGER NOT NULL);
CREATE TABLE users  (
user_id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
country_name VARCHAR NOT NULL,
email VARCHAR NOT NULL UNIQUE,
bio VARCHAR
);
```

## 💭 Reflections

**What I learned:** Building the full PERN stack shifted my perspective from writing isolated components to designing integrated systems. I now approach every feature by mapping the entire Data Lifecycle: from the PostgreSQL schema, through the Express API layer, to the React UI.

**What I'm proud of:** My first complete full-stack app!

**Future ideas for how I'd continue building this project:** 
1. Travel app that keeps track of countries you have visited
2. Share profiles, saved countries with other users

## 🙌 Credits & Shoutouts 

My amazing instructors, Phil and Arianna! 

