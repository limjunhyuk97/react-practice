import { useState, useEffect } from "react";

export default function Coin() {
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
      const response = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await response.json();
      setCoins(json);
      setLoaded(true);
      console.log(json.data);
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
