import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import SelectDays from '../components/Coin/SelectDays'
import { getCoinData } from '../functions/getCoinData'
import { coinObject } from '../functions/convertObject'
import { getCoinPrices } from '../functions/getCoinPrices'
import Loader from '../components/Common/Loader'

export const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const[crypto2Data,setCrypto2Data]=useState({})
  const[crypto1Data,setCrypto1Data]=useState({})
  const[days,setDays]=useState(7);
  const[isLoading,setisLoading]=useState(true)
  const[priceType,setPriceType]=useState("prices")
console.log(1)

  function handleDaysChnage(event){
    setDays(event.target.value)

  }
  useEffect(() => {
     getData()
  }, [])
  
  async function getData(){
    setisLoading(true);
    const data1= await getCoinData(crypto1);
    const data2= await getCoinData(crypto2);
    if(data1){
      coinObject(setCrypto1Data,data1);
    }
      if(data1){
        coinObject(setCrypto2Data,data2);
    }
    if ( data1 && data2) {
      const prices1=await getCoinPrices(crypto1,days,priceType)
      const prices2=await getCoinPrices(crypto2,days,priceType)
      if ( prices1.length>0 && prices2.length>0) {
        console.log("Both the prices...",prices1,prices2);
        setisLoading(false);
      }
    }
  }
  const handleCrypto = async (event, isCoin2) => {
    setisLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data=await getCoinData(event.target.value);
      if(data){
        coinObject(setCrypto2Data,data)
        const prices=await getCoinPrices(event.target.value,7,"prices")
        if(prices.length>0){
          setisLoading(false);
        }
      }
    } else {
      setCrypto1(event.target.value);
     
      const data=await getCoinData(event.target.value);
      if(data){
        coinObject(setCrypto1Data,data)
        const prices=await getCoinPrices(event.target.value,days,"prices")
        if(prices.length>0){
          setisLoading(false);
        }
      }
    }
  };
  return (
    <div>
        <Header/>
        { isLoading ? <Loader/> :

      <div className='coins-days-flex'>  <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCrypto={handleCrypto}/>
        <SelectDays days={days} handleDaysChnage={handleDaysChnage} nPTag={true}/>
      </div>
 

        }
           </div>
  )
}
export default Compare