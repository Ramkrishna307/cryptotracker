import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';

const DashBoardPage = () => {
const[coins,setCoins]=useState([]);
useEffect(() => {
   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then(
    (response)=>{
        console.log("Response>>",response);
        setCoins(response.data);
        
    }
   ).catch((error)=>{
    console.log(error)
   })
}, [])
console.log("data is set perfectly",coins)
  return (
    <div>
        <Header/>
        <TabsComponent coins={coins}/>
    </div>
  )
}
export default DashBoardPage