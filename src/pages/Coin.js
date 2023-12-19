import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader'

import { coinObject } from '../functions/convertObject'
import List from '../components/Dashboard/List'
import CoinInfo from '../components/Coin/CoinInfo'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'

const CoinPage = () => {
  const {id}=useParams()
  const[isLoading,setisLoading]=useState(true)
  const[coindata,setCoindata]=useState();
  const[days,setdays]=useState(30)

  useEffect(() => {
    if(id){
       getData();
    }
 }, [id])

 async function getData(){
    const data=await getCoinData(id);
    if(data){
      coinObject(setCoindata,data);
      const pricesab=await getCoinPrices(id,days);
      console.log("got my prices",pricesab);

      if( Object.keys(pricesab).length>0){
        console.log("waooo");
        setisLoading(false);
      }

      
    }
 }
 
 
  return (
    <div><Header/>
    { isLoading ? 

   <Loader/> :   <div className='grey-wrapper'> 
   <List coin={coindata}/> 
   <CoinInfo heading={coindata.name} desc={coindata.desc}/>
   </div>

    }
 
    
    </div>
  )
}

export default CoinPage