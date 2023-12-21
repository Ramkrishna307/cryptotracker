import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import BackToTop from '../components/Common/BackToTop';
import Search from '../components/Dashboard/Search';
import PaginationComp from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import get100Coins from '../functions/get100Coins';

const WatchListPage = () => {
  const [coins, setCoins] = useState([]);
  const [pageinatiedcoins, setPageinatiedCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(true);
  const [star, setStar] = useState([]);

  // Handling the page initiation....
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPageinatiedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Getting the filter coin from this function
  var filterCoins = coins.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    getData();
    // Retrieve star data from local storage during initialization
    const starData = localStorage.getItem('star');
    if (starData) {
      setStar(JSON.parse(starData));
    }
  }, []);

  console.log('data is set perfectly from watchlist page', coins);

  const getData = async () => {
    const my100Coins = await get100Coins();
    if (my100Coins) {
      setCoins(my100Coins);
      setPageinatiedCoins(my100Coins.slice(0, 10));
      setisLoading(false);
    }
  };

  // Filter coins based on star state
  const starCoins = coins.filter((item) => star.includes(item.id));

  return (
    <div>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Search search={search} onSearchChange={onSearchChange} />
            {search ? <TabsComponent coins={filterCoins} /> : <TabsComponent coins={pageinatiedcoins} />}
            <PaginationComp page={page} handlePageChange={handlePageChange} />
          </div>
          <h2>Starred Coins:</h2>
          <TabsComponent coins={starCoins} />
        </>
      )}
    </div>
  );
};

export default WatchListPage;
