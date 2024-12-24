import styles from "./app.module.css";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, fetcWeather, hasWeatherData, loading} = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form fetcWeather={fetcWeather} />
        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather} />}
      </div>
    </>
  );
}
export default App;
