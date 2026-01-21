import CountryCard from "../components/CountryCard";
import { useState } from "react";

export default function Home({ countriesData }) {
  const [input, setInput] = useState("");
  const filteredCountries = countriesData
    // implicit return without {}, must be one line
    .filter((country) =>
      country.name.common.toLowerCase().includes(input.toLowerCase())
    )
    .sort((countryA, countryB) =>
      countryA.name.common.localeCompare(countryB.name.common)
    );

  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <div className="home">
      <input
        className="input"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Search for a country..."
      />
      <div className="CountryCardContainer">
        {/* sort is method to reorder alphabetically by comparison  */}
        {/* compare countryA to B, the lower letter comes first */}
        {/* localeCompare is for strings, special charcters like é */}
        {filteredCountries.map((item) => {
          return <CountryCard country={item} key={item.cca3} />;
        })}
      </div>
    </div>
  );
}
