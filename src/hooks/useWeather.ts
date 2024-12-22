import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetcWeather = async (searrch: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searrch.city},${searrch.country}&appid=${appId}`
        const {data} = await axios(geoUrl)
        console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetcWeather,
  };
}
