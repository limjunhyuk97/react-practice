import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);

  function handleMoneyChange(event) {
    setMoney((prev) => Number(event.target.value));
  }

  function handleCoinSelection(event) {
    setSelectedCoin((prev) => event.target.value);
  }

  useEffect(() => {
    async function fetchCoinData() {
      await fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((data) => {
          setCoins(data);
          setLoaded(true);
          console.log(data);
        });
    }
    fetchCoinData();
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <h2>My money</h2>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <input type="text" value={money} onChange={handleMoneyChange} />
        <span>TO</span>
        <input
          type="text"
          value={loaded ? money / coins[selectedCoin].quotes.USD.price : 0}
          disabled
        />
        <span>Coins</span>
      </div>
      <h2>Coin options</h2>
      {loaded ? (
        <select onChange={handleCoinSelection}>
          {coins.map((coin, idx) => (
            <option key={coin.id} value={idx}>
              <span> {coin.name}</span>
              <span>({coin.symbol})</span>
              <span> {coin.quotes.USD.price}</span>
            </option>
          ))}
        </select>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
