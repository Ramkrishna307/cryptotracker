import React, { useEffect, useState } from 'react';
import { MenuItem, Select } from "@mui/material";
import axios from 'axios';
import Header from '../components/Common/Header';
import Footer from '../components/Footer';
import { getCoinPricesForCompare } from '../functions/getCoinPricesForComapre';
import List from '../components/Compare/List';
import LineChart from '../components/Compare/LineChartComapre/LineChart';
import { convertDate } from '../functions/convertDate';
import CoinInfo from '../components/Coin/CoinInfo';
import TogglePriceButton from '../components/Coin/TogglePriceButton';



const Compare = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("tether");
  const [days, setDays] = useState(30);
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  const handlePriceTypeChange =async (event, priceType) => {
    
    setPriceType(priceType);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        setAllCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Consider updating the UI to inform the user about the error
      }
    };
 
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCoinData = async () => {
        const cointemp1 = allCoins.find(item => item.id === coin1);
        const cointemp2 = allCoins.find(item => item.id === coin2);
      
        setCoin1Data(cointemp1);
        setCoin2Data(cointemp2);
      
        if (cointemp1 && cointemp2) {
          const prices1 = await getCoinPricesForCompare(coin1, days,priceType);
          const prices2 = await getCoinPricesForCompare(coin2, days,priceType);
      
          if (prices1 && prices2 && prices1.length > 0 && prices2.length > 0) {
            setChartData({
              labels: prices1.map(entry => convertDate(new Date(entry[0]).toLocaleDateString())),
              datasets: [
                {
                  label: cointemp1.name,
                  data: prices1.map(entry => entry[1]),
                  yAxisID: 'y',
                  borderColor:"#3a80e9",
                  pointRadius:0,
                  tension:0.25,
                  fill:false,
                  broderWidth:2,
                },
                {
                  label: cointemp2.name,
                  data: prices2.map(entry => entry[1]),
                  yAxisID: 'y1',
                  borderColor:"#61c96f",
                  pointRadius:0,
                  tension:0.25,
                  fill:false,
                  broderWidth:2,
                },
              ],
            });
          } else {
            // Handle the case where prices1 or prices2 is undefined or empty
            console.error("Prices are undefined or empty");
          }
        }
      };
      
    if (allCoins.length > 0) {
      fetchCoinData();
    }
  }, [coin1, coin2, days, allCoins]);

  return (
    <>
    <Header/>
        <div className='chart-Comapre coins-days-flex' >
                <Select
                    className="select-coin"
                    value={coin1}
                    onChange={(event) => { setCoin1(event.target.value) }}
                    sx={{
                        height: "2.5rem",
                        color: "var(--white)",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--white)",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "var(--white)",
                        },
                        "&:hover": {
                            "&& fieldset": {
                                borderColor: "#3a80e9",
                            },
                        },
                    }}
                >
                    {allCoins.map((item, index) => (
                        <MenuItem key={index} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    className="select-coin"
                    value={coin2}
                    onChange={(event) => { setCoin2(event.target.value) }}
                    sx={{
                        height: "2.5rem",
                        color: "var(--white)",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--white)",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "var(--white)",
                        },
                        "&:hover": {
                            "&& fieldset": {
                                borderColor: "#3a80e9",
                            },
                        },
                    }}
                >
                    {allCoins.map((item, index) => (
                        <MenuItem key={index} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
     <Select
       sx={{
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="days"
        onChange={(event) => { setDays(event.target.value) }}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={14}>14 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={1}>1 year</MenuItem>
      </Select>
    
    </div>
      <div>
        <List coin={coin1Data} />
        <List coin={coin2Data} />
      </div>
      <div className='chart-Comapre'>
      <TogglePriceButton priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
        <LineChart chartData={chartData} multiAxis={true} priceType={priceType} />
        </div>
      {/* <CoinInfo heading={coin1Data.name} desc={coin1Data.desc}/> */}
    
    <Footer/>
    </>
  );
}
 
export default Compare;
