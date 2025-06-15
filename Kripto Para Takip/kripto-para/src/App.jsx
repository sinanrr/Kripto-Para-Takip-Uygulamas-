import { useEffect, useState } from "react";
import axios from "axios";
import "./css/App.css";

function App() {
  const [veri, setVeri] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const veriler = response.data;
      setVeri(veriler);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {veri &&
        [0, 1, 2, 4, 5].map((i) => (
          <div className="form-ici">
            <img src={veri[i].image} alt="" width={50} height={50} />
            <p>
              Coin Adı :
              <br />
              <strong>{veri[i].name}</strong>
            </p>
            <p>
              Fiyat (USD) : <br />
              <strong>{veri[i].current_price}</strong>
            </p>
            <p>
              24h Değişim (%) : <br />
              <strong>{veri[i].price_change_24h.toFixed("3")}</strong>
            </p>
          </div>
        ))}
    </div>
  );
}

export default App;
