import React, {useEffect, useState} from 'react'

export default function WeatherIcon({weatherDescription}) {
  const [iconUrl, setIconUrl] = useState(null);
  useEffect(() => {
    switch(weatherDescription){
      case "Scattered clouds" : 
        setIconUrl("img/PartlyCloudy.png");
        break;
      case "Clear sky" : 
        setIconUrl("img/Sunny.png");
        break;
      case "Few clouds" :
        setIconUrl("img/PartlyCloudy.png");
        break;
      case "Overcast clouds" :
        setIconUrl("img/PartlyCloudy.png");
        break;
      case "Broken clouds" :
        setIconUrl("img/PartlyCloudy.png");
        break;
      //might not be the correct term used by the Api 
      case "Rainy" : 
        setIconUrl("img/Rainy.png");
        break;
      default:
        setIconUrl(null);
        console.log("counldn't recognize weather")
    }
  }, [weatherDescription])

  return (
    <img src={`${iconUrl}`} alt={`visualized weather`}></img>
  )
}
