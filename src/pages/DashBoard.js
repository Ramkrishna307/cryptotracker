import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Serach from '../components/Dashboard/Search';

import PaginationComp from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop';

const DashBoardPage = () => {
const[coins,setCoins]=useState([]);
const[pageinatiedcoins,setPageinatiedCoins]=useState([]);
const[search,setSearch]=useState("");
const [page, setPage] = useState(1);
const[isLoading,setisLoading]=useState(true)

//handling the page iniatiation....
   const handlePageChange = (event, value) => {
     setPage(value);
     var previousIndex=(value-1)*10;
     setPageinatiedCoins(coins.slice(previousIndex,previousIndex+10))
  };

const onSearchChange=(e)=>{
   setSearch(e.target.value);
}
//getting the filter coin from this function
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
        setPageinatiedCoins(response.data.slice(0,10))
        setisLoading(false)
        
    }
   ).catch((error)=>{
    setisLoading(false)
    console.log(error)
   })
}, [])


console.log("data is set perfectly",coins)
  return (
<>

<Header/>
<BackToTop/>
{

isLoading ? <Loader/> :

<div>
  <Serach search={search} onSearchChange={onSearchChange}/>
  {
      search ? <TabsComponent coins={filterCoins}/> :  <TabsComponent coins={pageinatiedcoins}/>
  }
  <PaginationComp page={page} handlePageChange={handlePageChange}/>
</div>


}



</>
  )
}
export default DashBoardPage