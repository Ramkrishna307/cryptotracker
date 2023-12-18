import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader'
import axios from 'axios'
import { coinObject } from '../functions/convertObject'
import List from '../components/Dashboard/List'
import CoinInfo from '../components/Coin/CoinInfo'

const CoinPage = () => {
  const {id}=useParams()
  const[isLoading,setisLoading]=useState(true)
  const[coindata,setCoindata]=useState()

  useEffect(() => {
    if(id){
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
     (response)=>{
         console.log("Response>>",response);
        
         setisLoading(false)
         coinObject(setCoindata,response.data);
         
     }
    ).catch((error)=>{
     setisLoading(false)
     console.log(error)
    })


    axios.get()
    }
 }, [id])
 
 
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