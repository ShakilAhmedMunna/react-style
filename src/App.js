import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img
          src={logo}
          className={`${styles["App-Logo"]} ${styles["AppLogoSpin"]}`}
          alt="logo"
        />
        <p>
          Edit
          <code style={{ backgroundColor: "red" }}>src/App.js</code> and save to
          reload.
        </p>
      </header>
    </div>
  );
}

export default App;
