import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import SavedCountries from "./pages/SavedCountries";
import "./App.css";
import data from "../localData.js";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <h1>Where in the world?</h1>
              </Link>
            </li>
            <li>
              <Link to="/saved-countries">Saved Countries</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        {/* pass data to home component using countriesData as prop */}
        <Route path="/" element={<Home countriesData={data} />} />
        <Route path="/saved-countries" element={<SavedCountries />} />
        {/* country-detail is url, countryName is a parameter for name.common */}
        <Route
          path="/country-detail/:countryName"
          element={<CountryDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
