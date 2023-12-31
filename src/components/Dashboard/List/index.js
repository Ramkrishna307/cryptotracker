import React, { useState } from 'react'
import './style.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const List= ({coin}) => {
  // watchlist end
  const [isAdded, setIsAdded] = useState(false);

  // watchlist 
  const isWatchlist = localStorage.getItem("watchlist")
  ? localStorage.getItem("watchlist").includes(coin.id)
  : false;


  return (

   <motion.tr     className='list-row'
           initial={{ x: -10, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.3, delay: 0.3 }}
       >
      <Tooltip title="Coin Logo" placement="bottom-start">
      <Link to={`/coin/${coin.id}`}>
       <td className='head-info'>
       <div className='td-image'>
            <img src={coin.image} className='coin-logo' />
        </div>
        </td>
        </Link>  
      </Tooltip>

     <Tooltip title="Coin info" placement="bottom-start">
     <Link to={`/coin/${coin.id}`}>
        <td>
        <div className='name-col'>
            <p className='coin-symbol'>
            {coin.symbol}
            </p>
            <p className='coin-name'>
            {coin.name}
            </p>
        </div>
       </td>
     </Link>
       </Tooltip>
      
        {coin.price_change_percentage_24h>0  ?
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
        <Link to={`/coin/${coin.id}`}>
        <td className='chip-flex td-icon'>
           <div className='price-chip'>{coin.price_change_percentage_24h?.toFixed(2)}%</div>
           <div className='icon-chip'><TrendingUpIcon/></div>
        </td>
        </Link>
        </Tooltip>
        :
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
       
       <Link to={`/coin/${coin.id}`}>
        <td className='chip-flex td-icon'>
        <div className='price-chip chip-red'>{coin?.price_change_percentage_24h?.toFixed(2)}%</div>
        <div className='icon-chip chip-red'><TrendingDownIcon/></div>
       </td>

       </Link>
       </Tooltip>
        }
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
        <Link to={`/coin/${coin.id}`}>
        <td className='info-container'>
        <h1 className='coin-price td-center-align'
            style={{ color: coin?.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}
        >
         ${coin.current_price?.toLocaleString()}
        </h1>
        </td>
        </Link>
        </Tooltip>

        <Tooltip title="Total Volume" placement="bottom-start">
        <Link to={`/coin/${coin.id}`}>
        <td
        className='destop-td-market'><p className='total-vol td-right-align'>{convertNumber(coin.total_volume)}</p>
        </td>
        </Link>
        </Tooltip>
        
        <Tooltip title="Market Cap" placement="bottom-start">
        
        <Link to={`/coin/${coin.id}`}>
        <td className='mobile-td-market desktop-view-mark'><p className='total-vol td-right-align td-market-cap'>${coin.market_cap}</p></td>
        </Link>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
        <Link to={`/coin/${coin.id}`}>

        <td className='mobile-td-market mobile-view-mark'><p className='total-vol td-right-align td-market-cap'>${convertNumber(coin.market_cap)}</p></td>
        </Link>
        </Tooltip>
   </motion.tr>

  )
}

export default List