import {key} from './key.js'

export default async function fetchWeatherData(search, setData, setListOfMeteos) {
    const url = `https://api.weatherbit.io/v2.0/current?city=${search}&key=${key}&include=minutely`
    const result = await fetch(url);
    if (result.ok) {
      const json = await result.json();
      setData(await json.data[0]);
      setListOfMeteos(prev => {
        return {...prev, [json.data[0].city_name]: json.data[0]};
      })
    } else {
      console.log("oups")
    }
}
