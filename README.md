<!-- # 📝 Writing a README

A well-written README helps others (and your future self!) understand, use, and appreciate your project. Here’s a quick guide to writing one.

## 📌 What is a README?

A `README.md` is usually the **first** thing someone sees in your repo. It gives an **overview** of what your **project** is about, how to use it, and how it works.

You spent hours on your project — spend at least 30 minutes writing a clear README.
It’s your chance to tell the world what your hard work is all about!

## 🧹 Tips

- Don’t overthink it! Just explain your project clearly
- Use headers, bullet points, and links to keep it easy to read
- Update the README if your project changes

## 🎨 Markdown Formatting Tips

README files use **Markdown** (`.md`) to style content.

### Common Markdown formatting:

```markdown
# H1 (Main title)
## H2 (Section)
### H3 (Subsection)

**bold text**  
_italic text_  
`inline code`  

- bullet points
1. numbered lists

[Link text](https://example.com)

![Alt text for image](./images/image.png)
```

# Fill Out the Template Below ⬇️ 
Once you're done filling out the template, paste it into your Github repo's main `README.md` file! 

--- -->

# 📝 Countries App

## 📌 Project Description & Purpose

This project helps users view, save, and keep track of 250+ countries.

## 🚀 Live Site

Here's the link to view the live app: ___________

## 🖼️ Screenshots

Here is where you'll include a screenshot of your project to show it off! 

Instructions to include a screenshot into your README file: 

1. Use `Command + Control + Shift + 4` to take a screenshot of your site and copy the screenshot to your clipboard 
2. Find your Github `README.md` file on the Github website
3. Edit the site by clicking on the Pencil icon on the top right of the page ✏️
4. Move your cursor to the position where you want to paste the screenshot, then paste it. Github will convert the pasted screenshot into an `<img>` tag
5. Select "Commit changes..." to save your changes 

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

- **Languages:** React JS

**Server/API**

- **Languages:** Node.js
- **Framework:** Express
- **Deployment:** Neon Database

**Database**

- **Languages:** PostgresQL
- **Deployment:** Neon Database

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

**What I learned:** How to create a database, the server and then connect it to the frontend.

**What I'm proud of:** My first complete full-stack app!

**Future ideas for how I'd continue building this project:** 
1. Travel app that keeps track of countries you have visited
2. Share profiles, saved countries with other users

## 🙌 Credits & Shoutouts 

If you used any resources for inspiration, tutorials, or documentation, you can mention them here.
You can also give a shoutout to anyone who helped you along the way.

