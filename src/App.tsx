import styles from "./app.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, fetcWeather, hasWeatherData, loading, notFound} = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form fetcWeather={fetcWeather} />
        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad No Encontrada mi wen 👀</Alert>}
      </div>
    </>
  );
}
export default App;
