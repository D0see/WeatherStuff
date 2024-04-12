import React from "react";
import WeatherIcon from "../components/WeatherIcon";
import styles from './DataVisualizer.module.css'
// sunrise: Sunrise time UTC (HH:MM).
// sunset: Sunset time UTC (HH:MM). 
// wind_spd: Wind speed (Default m/s). 
// wind_cdir_full: Verbal wind direction.
// temp: Temperature (default Celsius). 
// precip: Liquid equivalent precipitation rate (default mm/hr). 
// app_temp: Apparent/"Feels Like" temperature (default Celsius).
// clouds: Cloud coverage (%). 
// weather: {
//     icon:Weather icon code.
//     code:Weather code.
//     description: Text weather description.
// }

export default function DataVisualizer({ data }) {

  return (
    <div className={styles.Visualizer}>
      <p>{data.city_name}</p>
      <p>{data.weather.description}</p>
      <WeatherIcon weatherDescription={data.weather.description}/>
      <p>{`${data.temp} °C`}</p>
    </div>
  )
}
