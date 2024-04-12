

async function getWeather() {
    const key = "1ffedc96e847433e82ca27627c47e07d";
    const location = "Rennes"
    const url = `https://api.weatherbit.io/v2.0/current?city=${location}&key=${key}&include=minutely`
    const result = await fetch(url);
    const json = await result.json();
    const data = await json.data;
}


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