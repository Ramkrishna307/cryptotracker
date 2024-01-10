import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import BackToTop from '../components/Common/BackToTop';
import get100Coins from '../functions/get100Coins';
import Button from '../components/Common/Button';
import Footer from '../components/Footer';

const WatchListPage = () => {
  const watchlist = localStorage.getItem("watchlist")
  ? localStorage.getItem("watchlist").split(",")
  : [];

const [coins, setCoins] = useState([]);
console.log("Data... watchlist",coins);
useEffect(() => {
  console.log("watchlist was changed");
}, [watchlist]);

useEffect(() => {
  getData();
}, []);

const getData = async () => {
  const response = await get100Coins();
  var myCoins = response.filter((coins) => watchlist.includes(coins.id));
  setCoins(myCoins);
};

return (
  <div>
    <Header />
    <div>
      {coins && coins.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Your watchlist is Currently Empty
          </h1>
          <p style={{ textAlign: "center", color: "var(--grey)" }}>
            Please Add Coins in your watchlist
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
    <BackToTop/>
    <Footer />
  </div>
);
};

export default WatchListPage;
