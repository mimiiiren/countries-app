import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

export default function SavedCountries({ countriesData }) {
  const [newestUserData, setNewestUserData] = useState(null);
  const [savedCountriesNames, setSavedCountriesNames] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    bio: "",
  });
  const getAllSavedCountries = async () => {
    try {
      const response = await fetch("/api/get-all-saved-countries", {
        method: "GET",
      });
      const data = await response.json();
      setSavedCountriesNames(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllSavedCountries();
  }, []);
  // api call to retrieve newest user data
  const getNewestUserData = async () => {
    try {
      const response = await fetch("/api/get-newest-user", {
        method: "GET",
      });
      const data = await response.json();
      const userData = data[0];
      setNewestUserData({
        name: userData.name,
        email: userData.email,
        country: userData.country_name,
        bio: userData.bio,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNewestUserData();
  }, []);

  const storeUserData = async (data) => {
    const response = await fetch("/api/add-one-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        country_name: data.country,
        email: data.email,
        bio: data.bio,
      }),
    });
    const result = await response.text();
  };
  function handleSubmit(e) {
    e.preventDefault();
    // calls api POST request with formData as argument
    storeUserData(formData);
    // this resets the form to its initial state so it can be used by next user
    setFormData({
      name: "",
      email: "",
      country: "",
      bio: "",
    });
  }
  function handleChange(e) {
    // takes the name attribute and value, or what the user typed
    const { name, value } = e.target;

    // spread operator prevFormData makes a copy of whats stored in formData
    // [name] refers to the name attribute in jsx
    // value is what the user typed
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  const savedCountries = savedCountriesNames.map((savedCountry) => {
    return countriesData.find(
      (country) => savedCountry.country_name === country.name.common,
    );
  });
  return (
    <div className="saved-countries">
      <div className="CountryCardContainer">
        {savedCountries.map((savedCountry) => {
          return <CountryCard country={savedCountry} key={savedCountry.cca3} />;
        })}
      </div>
      {/* conditional statement if newestUserData has value then render h2, 
      else render nothing */}
      {newestUserData && <h2>Welcome {newestUserData.name}</h2>}
      <h1>My Saved Countries</h1>
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio"
          cols="62"
          rows="10"
          value={formData.bio}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
