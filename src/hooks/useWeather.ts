import axios from "axios";
import { SearchType, Weather } from "../types";


//Type Guards
function isWeatherResponse (weather : unknown) : weather is Weather{
    return(
        Boolean(weather)&&
        typeof weather == 'object' &&
        typeof (weather as Weather).name === 'string' &&
        typeof (weather as Weather).main.temp === "number" &&
        typeof (weather as Weather).main.temp_max === "number" &&
        typeof (weather as Weather).main.temp_min === "number"
    )
}

export default function useWeather() {
  const fetcWeather = async (searrch: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searrch.city},${searrch.country}&appid=${appId}`
        const {data} = await axios(geoUrl)
        
        const lat = data[0].lat
        const lon = data[0].lon

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

        //Caterar el type👀👈
        /* const {data: weatherResult} = await axios<Weather>(weatherUrl)
        console.log(weatherResult.main.temp)
        console.log(weatherResult.name) */

        //Type Guards
        const {data: weatherResult} = await axios(weatherUrl)
        const result = isWeatherResponse(weatherResult)
        if (result) {
            console.log(weatherResult.main.temp)
        }else{
            console.log('Respuesta mal formada')
        }

    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetcWeather,
  };
}
