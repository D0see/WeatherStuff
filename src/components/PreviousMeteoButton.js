import React from 'react'
import styles from './PreviousMeteoButton.module.css'

export default function PreviousMeteoButton({displayedData, cityName, onCityClick, onXClick}) {
    
    return (
        <div className={`${styles.PreviousMeteo}`}>
            <button className={`${styles.CityButton} ${cityName === displayedData?.city_name ? styles.Selected: ""}`} onClick={onCityClick}>{cityName}</button>
            <button className={styles.XButton} onClick={onXClick}>X</button>
        </div>
    )
}
