import React from 'react'



export default function SearchButton({data, setData, search, setListOfMeteos}) {
  async function handleClick() {
    const key = "1ffedc96e847433e82ca27627c47e07d";
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
  return (
    <>
    <button onClick={handleClick}>Give me meteo :o</button>
    </>
  )
}
