Countries Explorer (Version 2)

A React web application that displays information about countries around the world. Users can search, filter, view details, and save their favorite countries.

## Features

- **Browse Countries**: View all 250+ countries with population, region, and capital information
- **Search Functionality**: Real-time search by country name (case-insensitive)
- **Country Details**: View detailed information including flags, population, region, and capital
- **Alphabetical Sorting**: Countries are automatically sorted alphabetically for easy browsing
- **Save Countries**: Save favorite countries to your personal collection
- **View Tracking**: Track how many times each country has been viewed
- **User Profile**: Submit and display user information

## Tech Stack

- React
- React Router
- CSS3

## Installation

1. Clone the repository
```bash
git clone https://github.com/mimiiiren/countries-app.git
cd countries-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```
## Usage

- **Home Page**: Browse all countries, sorted alphabetically
- **Search**: Type in the search bar to filter countries by name
- **View Details**: Click any country card to see detailed information
- **Save Countries**: Click the "Save" button on the detail page
- **Saved Countries**: View your saved countries from the navigation menu
- **Profile Form**: Submit your information on the Saved Countries page

## API Integration

The app connects to a backend API to:
- Store and retrieve user profile data
- Save and fetch favorite countries
- Track and update country view counts

API endpoints used:
- `POST /api/save-one-country` - Save a country
- `GET /api/saved-countries` - Retrieve saved countries
- `POST /api/update-one-country-count` - Update view count
- `POST /api/create-user` - Store user profile
- `GET /api/get-newest-user` - Retrieve user profile
- 
## Project Structure
```
countries-app/
├── src/
│   ├── components/
│   │   ├── CountryCard.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CountryDetail.jsx
│   │   └── SavedCountries.jsx
│   ├── App.jsx
│   └── index.js
├── public/
└── package.json
```

## Design

UI designs are based on https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=1404-2&p=f&t=poZFtjQPRA5vJqIp-0

## Author

Mimi Ren

## Acknowledgments

- AnnieCannons for project guidance and instruction
- REST Countries API for providing country data
- 
### Upcoming (v3.0)
- 🔜 Backend API with Express and Node.js
- 🔜 PostgreSQL database integration
- 🔜 Save favorite countries functionality
- 🔜 View count tracking
