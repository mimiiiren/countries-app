import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import localData from "../localData.js";

function App() {
  // useState variables to store api data
  const [countries, setCountries] = useState([]);

  // asynchronous function
  // async/await go together, cleaner way of fetching api
  const getCountriesApi = async () => {
    // try/catch keyword handles any errors during api request
    try {
      // await keywords waits for async operations to commplete
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders`
      );
      // store api response in data variable
      const data = await response.json();
      // setter function updates value of countries variable to data
      setCountries(data);
    } catch (error) {
      console.log(error);
      setCountries(localData);
    }
  };
  // run api function when page loads
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
