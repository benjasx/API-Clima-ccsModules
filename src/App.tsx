import styles from "./app.module.css"
import Form from "./components/Form/Form"
import useWeather from "./hooks/useWeather";

function App() {

  const { fetcWeather } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form
          fetcWeather={fetcWeather}
        />
        <h2>2</h2>
      </div>
    </>
  )
}
export default App
