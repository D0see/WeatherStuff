import React, { useEffect, useState } from "react";
import SearchBar from "./containers/SearchBar";
import SearchField from "./components/SearchField";
import SearchButton from "./components/SearchButton";
import DataVisualizer from "./containers/DataVisualizer";
import PreviousMeteoButton from "./components/PreviousMeteoButton";
import fetchWeatherData from "./utils/fetchWeatherData";
import styles from "./App.module.css";

function App() {
  const [search, setSearch] = useState("");
  const [displayedData, setData] = useState(null);
  const [listofMeteos, setListOfMeteos] = useState({});

  useEffect(() => {
    if (displayedData && listofMeteos) {
      const cityName = displayedData.city_name;
      const Meteos = Object.keys(listofMeteos);

      if (!Meteos.includes(cityName)) {
        setData(null);
      }
    }
  }, [displayedData, listofMeteos]);

  return (
    <div className={styles.Core}>
      <SearchBar
        className={styles.SearchBar}
        setSearch={setSearch}
        onClick={() => fetchWeatherData(search, setData, setListOfMeteos)}
      />
      {displayedData && <DataVisualizer data={displayedData} />}
      <div style={{ display: "flex" }}>
        {Object.keys(listofMeteos).map((cityName, i) => {
          return (
            <PreviousMeteoButton
              key={i}
              displayedData={displayedData}
              cityName={cityName}
              cityData={listofMeteos[cityName]}
              setData={setData}
              setListOfMeteos={setListOfMeteos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
