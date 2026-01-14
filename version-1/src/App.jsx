import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const getCountriesApi = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders`
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountriesApi();
  }, []);

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
        <Route path="/" element={<Home countriesData={countries} />} />
        <Route path="/saved-countries" element={<SavedCountries />} />
        {/* country-detail is url, the : denotes route paramter countryName = name.common */}
        <Route
          path="/country-detail/:countryName"
          element={<CountryDetail countriesData={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
