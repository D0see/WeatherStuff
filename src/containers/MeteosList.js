import React from 'react'
import PreviousMeteoButton from '../components/PreviousMeteoButton';

export default function MeteosList({displayedData, setData, listOfMeteos, setlistOfMeteos}) {

    function handleCityClick(cityData){
        setData(cityData);
    }
    function handleXClick(cityData){
        setlistOfMeteos(prev => {
            const newlistOfMeteos = {...prev};
            delete newlistOfMeteos[cityData.city_name];
            return newlistOfMeteos;
            
        })
    }

  return (
    <div style={{ display: "flex" }}>
        {Object.keys(listOfMeteos).map((cityName, i) => {
        const cityData = listOfMeteos[cityName];
          return (
            <PreviousMeteoButton
              key={i}
              displayedData={displayedData}
              cityName={cityName}
              onCityClick={() => handleCityClick(cityData)}
              onXClick={() => handleXClick(cityData)}
            />
          );
        })}
    </div>
  )
}
