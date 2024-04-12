import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import DataVisualizer from './containers/DataVisualizer';
import PreviousMeteoButton from './components/PreviousMeteoButton';
import styles from './App.module.css';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null)
  const [listofMeteos, setListOfMeteos] = useState({});

  useEffect(() => {
    if (data && listofMeteos) {
      const cityName = data.city_name;
      const Meteos = Object.keys(listofMeteos);
  
      if (!Meteos.includes(cityName)) {
        setData(null);
      }
    }
  }, [data, listofMeteos]);

  return (
    <div className={styles.Core}>
      <div className={styles.SearchBar}>
        <SearchBar setSearch={setSearch}/>
        <SearchButton search={search} data={data} setData={setData} setListOfMeteos={setListOfMeteos}/>
      </div>
      {data && <DataVisualizer data={data}/>}
      <div style={{display: "flex"}}>
        {Object.keys(listofMeteos).map((cityName, i) => {
          return <PreviousMeteoButton key={i} data={listofMeteos[cityName]} setData={setData} setListOfMeteos={setListOfMeteos}/>
        })}
      </div>
    </div>
  )
}

export default App;
