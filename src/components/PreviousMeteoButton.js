import React from 'react'
import styles from './PreviousMeteoButton.module.css'

export default function PreviousMeteoButton({data, setData, setListOfMeteos}) {
    function handleCityClick(){
        setData(data);
    }
    function handleXClick(){
        setListOfMeteos(prev => {
            const newListOfMeteos = {...prev};
            delete newListOfMeteos[data.city_name];
            return newListOfMeteos;
        })
    }
    return (
        <div className={styles.PreviousMeteo}>
            <button className={styles.CityButton} onClick={handleCityClick}>{data.city_name}</button>
            <button className={styles.XButton} onClick={handleXClick}>X</button>
        </div>
    )
}
