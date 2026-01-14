import CountryCard from "../components/CountryCard";

export default function Home({ countriesData }) {
  return (
    <div className="home">
      <div className="CountryCardContainer">
        {/* sort is method to reorder alphabetically by comparison  */}
        {/* compare countryA to B, the lower letter comes first */}
        {/* localeCompare is for strings, special charcters like é */}
        {countriesData
          .sort((countryA, countryB) =>
            countryA.name.common.localeCompare(countryB.name.common)
          )
          .map((item) => {
            return <CountryCard country={item} key={item.cca3} />;
          })}
      </div>
    </div>
  );
}
