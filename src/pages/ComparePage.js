import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import SelectDays from '../components/Coin/SelectDays'
import { getCoinData } from '../functions/getCoinData'
import { coinObject } from '../functions/convertObject'
import { getCoinPrices } from '../functions/getCoinPrices'
import Loader from '../components/Common/Loader'
import List from '../components/Dashboard/List'
import get100Coins from '../functions/get100Coins'
import CoinInfo from '../components/Coin/CoinInfo'

export const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(7);
  const [crypto2Data, setCrypto2Data] = useState({});
  const [crypto1Data, setCrypto1Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const[allCoins,setAllCoins]=useState([]);
  const[priceType,setPriceType]=useState("prices")

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const response = await get100Coins();
    setAllCoins(response);
    try {
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);

      if (data1) {
        coinObject(setCrypto1Data, data1);
      }
      if (data2) {
        coinObject(setCrypto2Data, data2);
      }

      const prices1 = await getCoinPrices(crypto1, days, "prices");
      const prices2 = await getCoinPrices(crypto2, days, "prices");

      if (prices1.length > 0 && prices2.length > 0) {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleCrypto = async (event, isCoin2) => {
    setIsLoading(true);

    try {
      if (isCoin2) {
        setCrypto2(event.target.value);
        const data = await getCoinData(event.target.value);

        if (data) {
          coinObject(setCrypto2Data, data);
          const prices = await getCoinPrices(event.target.value, days, "prices");

          if (prices.length > 0) {
            setIsLoading(false);
          }
        }
      } else {
        setCrypto1(event.target.value);
        const data = await getCoinData(event.target.value);

        if (data) {
          coinObject(setCrypto1Data, data);
          const prices = await getCoinPrices(event.target.value, days, "prices");

          if (prices.length > 0) {
            setIsLoading(false);
          }
        }
      }
    } catch (error) {
      console.error("Error handling crypto change:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : (
        <>
          <div className="coins-days-flex">
          <SelectCoins
          coin={crypto1}
          handleChange={(e) => handleCrypto(e)}
          allCoins={allCoins.filter((coin) => coin.id != crypto2)}
        />
          <SelectCoins
          coin={crypto2}
          handleChange={(e) => handleCrypto(e, true)}
          allCoins={allCoins.filter((coin) => coin.id != crypto1)}
        />

            <SelectDays days={days} handleDaysChange={handleDaysChange} nPTag={true} />
          </div>
          <List coin={crypto1Data} />
          <List coin={crypto2Data} />

          <div className="grey-container">
            <h3 className='heading-info'>{crypto1Data.name}</h3>
            <CoinInfo name={crypto1Data.name} desc={crypto1Data.desc} />
          </div>
          <h3 className='heading-info'>{crypto2Data.name}</h3>
          <div className="grey-container" style={{ marginBottom: "2rem" }}>
            <CoinInfo name={crypto2Data.name} desc={crypto2Data.desc} />
          </div>
        </>
      )}
    </div>
  );
}
export default Compare