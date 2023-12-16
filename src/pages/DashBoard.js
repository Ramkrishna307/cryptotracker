import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Serach from '../components/Dashboard/Search';

import PaginationComp from '../components/Dashboard/Pagination';

const DashBoardPage = () => {
const[coins,setCoins]=useState([]);
const[pageinatiedcoins,setPageinatiedCoins]=useState([]);
const[search,setSearch]=useState("")
const [page, setPage] = useState(1);

//handling the page iniatiation....
   const handlePageChange = (event, value) => {
     setPage(value);
     var previousIndex=(value-1)*10;
     setPageinatiedCoins(coins.slice(previousIndex,previousIndex+10))
  };

const onSearchChange=(e)=>{
   setSearch(e.target.value);
}

var filterCoins = coins.filter((item) => {
  return (
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );
});


 
useEffect(() => {
   axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then(
    (response)=>{
        console.log("Response>>",response);
        setCoins(response.data);
        // setPageinatiedCoins(response.data.slice(0,10))
        
    }
   ).catch((error)=>{
    console.log(error)
   })
}, [])
console.log("data is set perfectly",coins)
  return (
    <div>
        <Header/>
        <Serach search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={pageinatiedcoins}/>
        <PaginationComp page={page} handlePageChange={handlePageChange}/>
    </div>
  )
}
export default DashBoardPage