import styles from "./app.module.css"
import Form from "./components/Form/Form"

function App() {
  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form/>
        <h2>2</h2>
      </div>
    </>
  )
}
export default App
