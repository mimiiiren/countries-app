import CountryCard from "../components/CountryCard";

export default function Home({ countriesData }) {
  return (
    <div className="home">
      <div className="CountryCardContainer">
        {countriesData.map((item, key) => {
          return <CountryCard dataFromCard={item} key={item.cca3} />;
        })}
      </div>
    </div>
  );
}
