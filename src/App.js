import React, { useEffect, useState } from "react";
import SearchBar from "./containers/SearchBar";
import DataVisualizer from "./containers/DataVisualizer";
import PreviousMeteoButton from "./components/PreviousMeteoButton";
import MeteosList from "./containers/MeteosList";
import fetchWeatherData from "./utils/fetchWeatherData";
import styles from "./App.module.css";

function App() {
  const [search, setSearch] = useState("");
  const [displayedData, setData] = useState(null);
  const [listOfMeteos, setlistOfMeteos] = useState({});

  //Handles active city deletion
  useEffect(() => {
    if (displayedData && listOfMeteos) {
      const cityName = displayedData.city_name;
      const Meteos = Object.keys(listOfMeteos);

      if (!Meteos.includes(cityName)) {
        setData(null);
      }
    }
  }, [displayedData, listOfMeteos]);

  return (
    <div className={styles.Core}>
      <SearchBar
        className={styles.SearchBar}
        setSearch={setSearch}
        onClick={() => fetchWeatherData(search, setData, setlistOfMeteos)}
      />
      {displayedData && <DataVisualizer data={displayedData} />}
      <MeteosList
        displayedData={displayedData}
        setData={setData}
        listOfMeteos={listOfMeteos}
        setlistOfMeteos={setlistOfMeteos}
      />
    </div>
  );
}

export default App;
