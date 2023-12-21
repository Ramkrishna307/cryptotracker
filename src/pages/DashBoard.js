import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import Serach from '../components/Dashboard/Search';
import PaginationComp from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop';
import get100Coins from '../functions/get100Coins';

const DashBoardPage = () => {
const[coins,setCoins]=useState([]);
const[pageinatiedcoins,setPageinatiedCoins]=useState([]);
const[search,setSearch]=useState("");
const [page, setPage] = useState(1);
const[isLoading,setisLoading]=useState(true)


const [star, setStar] = useState(() => {
  // Retrieve star data from local storage during initialization
  const starData = localStorage.getItem('star');
  return starData ? JSON.parse(starData) : [];
});

// Save star state to local storage whenever it changes
useEffect(() => {
  localStorage.setItem('star', JSON.stringify(star));
}, [star]);

// Getting the star coin from this function
var filterCoinStar = star.map((staritem) => {
  let mydata = coins.filter((item) => {
    return item.id.includes(staritem);
  });
  return mydata;
});
  




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
  getData()

}, [])


console.log("data is set perfectly",coins)

const getData= async()=>{
  const my100Coins=await get100Coins();
if(my100Coins){
  setCoins(my100Coins);
  setPageinatiedCoins(my100Coins.slice(0,10))
  setisLoading(false)
}
        
}
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