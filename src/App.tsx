import styles from "./app.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {

  const { weather,fetcWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form
          fetcWeather={fetcWeather}
        />
        <WeatherDetail
          weather={weather}
        />
      </div>
    </>
  )
}
export default App
