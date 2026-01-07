import { Link } from "react-router-dom";

export default function CountryCard({ dataFromCard }) {
  const { name, population, region, capital, flags } = dataFromCard;
  return (
    //   when country card is clicked, it will link to countryDetail page
    <Link
      to={`/country-detail/${name.common}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="country-card">
        <div className="card">
          <img src={flags.png} />
          {/* extract from name object in data.js to access common property */}
          <div className="card-content">
            <h3>{name.common}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
