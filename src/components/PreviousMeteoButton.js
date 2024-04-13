import React from 'react'
import styles from './PreviousMeteoButton.module.css'

export default function PreviousMeteoButton({displayedData, cityName, cityData, setData, setListOfMeteos}) {
    function handleCityClick(){
        setData(cityData);
    }
    function handleXClick(){
        setListOfMeteos(prev => {
            const newListOfMeteos = {...prev};
            delete newListOfMeteos[cityData.city_name];
            return newListOfMeteos;
           
        })
    }
    return (
        <div className={`${styles.PreviousMeteo}`}>
            <button className={`${styles.CityButton} ${cityName === displayedData.city_name ? styles.Selected: ""}`} onClick={handleCityClick}>{cityName}</button>
            <button className={styles.XButton} onClick={handleXClick}>X</button>
        </div>
    )
}
