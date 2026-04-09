import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
    connectionString: config.databaseUrl + "&uselibpqcompat=true",
    ssl: true,
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

// helper functions
async function getNewestUser() {
const result = await db.query("SELECT * FROM users ORDER BY user_id DESC LIMIT 1");
return result.rows[0];
};
async function getAllUsers() {
    const result = await db.query("SELECT * FROM users")
    return result.rows;
}
async function addOneUser(name, country_name, email, bio) {
    const result = await db.query("INSERT INTO users (name, country_name, email, bio) VALUES ($1, $2, $3, $4)",
        [name, country_name, email, bio],
    );
}

// -------------------------------------
// 📊 SAVED COUNTRIES
// -------------------------------------
async function getAllSavedCountries() {
    const result = await db.query("SELECT * FROM saved_countries");
    return result.rows;
}

async function saveOneCountry(country_name) {
    const result = await db.query("INSERT INTO saved_countries (country_name) VALUES ($1)",
        [country_name],);
    return result.rows;
}

async function unsaveOneCountry(country_name) {
    const result = await db.query("DELETE FROM saved_countries WHERE country_name = $1",
        [country_name],);
    return result.rows;
}


// -------------------------------------
// 📊 COUNTRY COUNTS
// -------------------------------------
async function updateOneCountryCount(country_name) {
    const result = await db.query("INSERT INTO country_counts (country_name, count) VALUES ($1, 1) ON CONFLICT (country_name) DO UPDATE SET count = country_counts.count + 1 RETURNING count",
        [country_name],);
    return result.rows[0];
}
async function resetOneCountryCount(country_name) {
    const result = await db.query("INSERT INTO country_counts (country_name, count) VALUES ($1, 1) ON CONFLICT (country_name) DO UPDATE SET count = 0 RETURNING count", [country_name],);
    return result.rows[0];
}

// users
// api endpoints
app.get("/get-newest-user", async (req, res) => {
    const user = await getNewestUser();
    res.json(user)
})
app.get("/get-all-users", async (req, res) => {
    const user = await getAllUsers();
    res.json(user)
})
app.post("/add-one-user", async (req, res) => {
    const { name, country_name, email, bio } = req.body;
    await addOneUser(name, country_name, email, bio);
    res.send(`Success! User has been added.`)
})
// saved countries
// get 
app.get("/get-all-saved-countries", async (req, res) => {
    const country = await getAllSavedCountries();
    res.json(country)
})
app.post("/save-one-country", async (req, res) => {
    const { country_name } = req.body;
    await saveOneCountry(country_name);
    res.send(`Success! The country is saved.`)
})
app.post("/unsave-one-country", async (req, res) => {
        const { country_name } = req.body;
    await unsaveOneCountry(country_name);
    res.send(`Success! The country is unsaved.`)
})

// country counts
app.post("/update-one-country-count", async (req, res) => {
    const { country_name } = req.body;
    const count = await updateOneCountryCount(country_name)
    res.json(count);
})

app.post("/reset-one-country-count", async (req, res) => {
    const { country_name } = req.body;
    const count = await resetOneCountryCount(country_name)
    res.json(count);
})