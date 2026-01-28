import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CountryDetail({ countriesData }) {
  const [countryViewCounts, setCountryViewCounts] = useState();
  // bonus for saved and unsaved button
  const [isSaved, setIsSaved] = useState(null);
  const countryName = useParams().countryName;
  // find method iterates through each item in countriesData to find name.common === countryName (url parameter)
  const detailedCountry = countriesData.find(
    (country) => country.name.common === countryName,
  );
  const { name, population, region, capital, flags } = detailedCountry;
  function toggleHeart() {
    setIsSaved(!isSaved);
    if (isSaved === true) {
      storeUnsavedCountry();
    } else {
      storeSavedCountries();
    }
  }
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
    // converts response to plain text (not string or json). when the response is just a confirmation msg
    const result = await response.text();
  };
  const storeUnsavedCountry = async () => {
    const response = await fetch("/api/unsave-one-country", {
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

  const storeCountryCount = async () => {
    // fetch the url as first argument in (), {options object has 2 properties: method and headers}
    // store in response because fetch is the request to api and it then returns an entire HTTP response
    const response = await fetch("/api/update-one-country-count", {
      method: "POST",
      // property name headers is the HTTP header request
      // {Content-Type} is nested object sending string formatted in json to server
      headers: {
        "Content-Type": "application/json",
      },
      // body of HTTP request, converts json object to string bc objects cannot be sent directly
      body: JSON.stringify({
        country_name: name.common,
      }),
    });
    // wait for fetch to finish, then convert response from STRING to js object with json method()
    const result = await response.json();
    // setter function updates countryViewCounts to result and accesses count property in order to render correct jsx format
    setCountryViewCounts(result.count);
  };
  // GET method for all saved countries, to connect ❤️ with api data
  useEffect(() => {
    storeCountryCount();
  }, []);
  const getAllSavedCountries = async () => {
    try {
      const response = await fetch("/api/get-all-saved-countries", {
        method: "GET",
      });
      const data = await response.json();
      // some checks if api country_name is same as name.common, returns true
      const isCountrySaved = data.some(
        (savedName) => savedName.country_name === name.common,
      );
      setIsSaved(isCountrySaved);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("true or false for isSaved", isSaved);
  useEffect(() => {
    getAllSavedCountries();
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
          <button onClick={toggleHeart} style={{ fontSize: "20px" }}>
            {isSaved ? "❤️" : "🩶"}
          </button>
          {/* <button onClick={handleSave}>Save</button>
          <button onClick={handleUnsave}>Unsave</button> */}
          <p>Population: {population.toLocaleString()}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
          <p>Viewed: {countryViewCounts}</p>
        </div>
      </div>
    </div>
  );
}
