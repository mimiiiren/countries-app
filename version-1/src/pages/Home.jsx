import CountryCard from "../components/CountryCard";

export default function Home({ countriesData }) {
  return (
    <div className="home">
      <div className="CountryCardContainer">
        {countriesData.map((item) => {
          return <CountryCard countriesData={item} key={item.cca3} />;
        })}
      </div>
    </div>
  );
}
