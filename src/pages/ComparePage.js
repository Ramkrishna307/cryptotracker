import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/convertObject';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';

export const Compare = () => {
  const [crypto1, setCrypto1] = useState('bitcoin');
  const [crypto2, setCrypto2] = useState('ethereum');
  const [crypto2Data, setCrypto2Data] = useState({});
  const [crypto1Data, setCrypto1Data] = useState({});
  const [days, setDays] = useState(7);
  const [isLoading, setisLoading] = useState(true);
  const [priceType, setPriceType] = useState('prices');

  const debouncedSetDays = debounce(setDays, 500); // Adjust the delay as needed

  function handleDaysChnage(event) {
    debouncedSetDays(event.target.value);
  }

  useEffect(() => {
    getData();
  }, [days, crypto1, crypto2, priceType]);

  async function getData() {
    setisLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);

      if (prices1.length > 0 && prices2.length > 0) {
        console.log('Both the prices...', prices1, prices2);
        setisLoading(false);
      }
    }
  }

  const debouncedHandleCrypto = debounce(async (event, isCoin2) => {
    setisLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto2Data, data);
        const prices = await getCoinPrices(event.target.value, days, 'prices');
        if (prices.length > 0) {
          setisLoading(false);
        }
      }
    } else {
      setCrypto1(event.target.value);

      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto1Data, data);
        const prices = await getCoinPrices(event.target.value, days, 'prices');
        if (prices.length > 0) {
          setisLoading(false);
        }
      }
    }
  }, 500); // Adjust the delay as needed

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='coins-days-flex'>
            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCrypto={debouncedHandleCrypto} />
            <SelectDays days={days} handleDaysChnage={handleDaysChnage} nPTag={true} />
          </div>
          <List coin={crypto1Data} />
          <List coin={crypto2Data} />
        </>
      )}
    </div>
  );
};

// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export default Compare;
