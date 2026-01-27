import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CountryDetail({ countriesData }) {
  const [countryViewCounts, setCountryViewCounts] = useState(0);
  const countryName = useParams().countryName;
  // find method iterates through each item in countriesData to find name.common === countryName (url parameter)
  const detailedCountry = countriesData.find(
    (country) => country.name.common === countryName,
  );
  const { name, population, region, capital, flags } = detailedCountry;
  const storeSavedCountries = async () => {
    const response = await fetch("/api/save-one-country", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: name.common,
      }),
    });
    const result = await response.text();
  };
  function handleSaveCountry() {
    storeSavedCountries();
  }
  const storeCountryCount = async () => {
    const response = await fetch("/api/update-one-country-count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: name.common,
      }),
    });
    const result = await response.json();
    setCountryViewCounts(result.count);
    console.log("result from api", countryViewCounts);
  };

  useEffect(() => {
    storeCountryCount();
  }, []);

  return (
    <div className="country-detail">
      <Link to="/">
        <button>⬅ Back</button>
      </Link>
      <div className="country-detail-container">
        <img src={flags.png} />
        <div className="card-bottom-content">
          <h1>{name.common}</h1>
          <button onClick={handleSaveCountry}>Save</button>
          <p>Population: {population.toLocaleString()}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
          <p>Viewed: {countryViewCounts}</p>
        </div>
      </div>
    </div>
  );
}
