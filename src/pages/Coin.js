import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader'

import { coinObject } from '../functions/convertObject'
import List from '../components/Dashboard/List'
import CoinInfo from '../components/Coin/CoinInfo'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import LineChart from '../components/Coin/LineChart'
import { convertDate } from '../functions/convertDate'
import SelectDays from '../components/Coin/SelectDays'
import {settingChartDataByDays } from '../functions/settingChartData'
import TogglePriceButton from '../components/Coin/TogglePriceButton'

const CoinPage = () => {
  const {id}=useParams()
  const[isLoading,setisLoading]=useState(true)
  const[coindata,setCoindata]=useState();
  const[days,setDays]=useState(14);
  const[chartData,setchartData]=useState({});
  const [priceType, setPriceType] = useState("prices"); // default value is "price"
  

  useEffect(() => {
    if(id){
       getData();
    }
 }, [id])

 async function getData(){
    const data= await getCoinData(id);
    console.log("data perfectly rrive",data)
    if(data){
      coinObject(setCoindata,data);
  
      const prices=await getCoinPrices(id,days,priceType);
      console.log("got my prices",prices);
 
      if( prices.length>0){
        console.log("waooo");
        setchartData(
         {
            labels: prices.map((price)=>{ return convertDate(price[0])}),
            datasets: [
              {
               
                data: prices.map((price)=>{ return price[1]}),
                borderColor: '#4169e1',
                backgroundColor: 'transparent',
                bandWidth:2,
                fill:true,
                tension:0.25,
                backgroundColor:"rgba(65, 105, 225,0.1)",
                pointRadius:0,

            
              },
            ]
          
        })
        setisLoading(false);
      }

      
    }
 }

 const handleDaysChange = async(event) => {
  setisLoading(true)
  setDays(event.target.value);
  const prices=await getCoinPrices(id,event.target.value,priceType);
  if( prices.length>0){
 settingChartDataByDays(setchartData,prices)
  setisLoading(false);
  }
};
 
const handlePriceTypeChange =async (event, priceType) => {
setisLoading(true);
setPriceType(priceType);
const prices=await getCoinPrices(id,days,priceType);
if(prices.length>0){
  settingChartDataByDays(setchartData,prices);
  setisLoading(false);
}

};

 
  return (
    <div><Header/>
    { isLoading ? 

   <Loader/> :   <div className='grey-wrapper'> 
   <List coin={coindata}/> 
  <div className='grey-wrapper'>
    <SelectDays days={days} handleDaysChnage={handleDaysChange}/>
     <TogglePriceButton priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
   <LineChart chartData={chartData} />
  </div>
   <CoinInfo heading={coindata.name} desc={coindata.desc}/>
   </div>

    }
 
    
    </div>
  )
}

export default CoinPage