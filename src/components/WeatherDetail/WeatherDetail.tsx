import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import styles from './WeatherDetail.module.css'

type WeatherDetailProps ={
    weather: Weather
}

export default function WeatherDetail({weather}: WeatherDetailProps) {
  return (
    <div className={styles.container}>
        <h2>Clima en: {weather.name}</h2>
        <p className={styles.current}>{formatTemperature(weather.main.temp)}&deg;C</p>
        <div className={styles.tempetures}>
            <p>Min: <samp>{formatTemperature(weather.main.temp_min)}&deg;C</samp></p>
            <p>Max: <samp>{formatTemperature(weather.main.temp_max)}&deg;C</samp></p>
        </div>
    </div>
    
  )
}
