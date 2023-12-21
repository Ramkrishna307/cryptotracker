import React, { useEffect, useState } from 'react';
import get100Coins from '../../../functions/get100Coins';
import { MenuItem, Select } from '@mui/material';
import './style.css';

const SelectCoins = ({crypto1,crypto2,handleCrypto}) => {

  const [allCoins, setAllCoins] = useState([]);
  const[crypto1Data,setCrypto1Data]=useState({})
  const[crypto2Data,setCrypto2Data]=useState({})


  let mystyle = {
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
  };



  console.log(crypto1);
  console.log(crypto2);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  }

  return (
    <div className='select-crypto-flex'>
      <div className='select-days'>
        <p>Crypto 1</p>
        <Select
          sx={mystyle}
          labelId="crypto1-select-label"
          id="crypto1-select"
          value={crypto1}
          label="crypto 1"
          onChange={(event) => handleCrypto(event, false)}
        >
          {allCoins.map((coin) => (
            <MenuItem key={coin.id} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className='select-days'>
        <p>Crypto 2</p>
        <Select
          sx={mystyle}
          labelId="crypto2-select-label"
          id="crypto2-select"
          value={crypto2}
          label="crypto 2"
          onChange={(event) => handleCrypto(event, true)}
        >
          {allCoins.map((coin) => (
            <MenuItem key={coin.id} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectCoins;
