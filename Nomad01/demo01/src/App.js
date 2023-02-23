import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className={styles.title}>shit</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button text="shit" />
      </header>
    </div>
  );
}

export default App;
