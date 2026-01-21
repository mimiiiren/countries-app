import { Link, useParams } from "react-router-dom";

export default function CountryDetail({ countriesData }) {
  const countryName = useParams().countryName;
  // find method iterates through each item in countriesData to find name.common === countryName (url parameter)
  const detailedCountry = countriesData.find(
    (country) => country.name.common === countryName
  );
  const { name, population, region, capital, flags } = detailedCountry;
  return (
    <div className="country-detail">
      <Link to="/">
        <button>⬅ Back</button>
      </Link>
      <div className="country-detail-container">
        <img src={flags.png} />
        <div className="card-bottom-content">
          <h1>{name.common}</h1>
          <button>Save</button>
          <p>Population: {population.toLocaleString()}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </div>
  );
}
