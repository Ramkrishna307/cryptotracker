import React from 'react'
import './style.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
const List= ({coin,star,setStar}) => {
   const handleStarClick=()=>{
      setStar(...star,coin.id);
    }
  return (
<Link  to={`/coin/${coin.id}`}>
   <tr className='list-row'>
      <Tooltip title="Coin Logo" placement="bottom-start">
       <td className='head-info'>
       <div className='td-image'>
            <img src={coin.image} className='coin-logo' />
        </div>
        </td>
      </Tooltip>

     <Tooltip title="Coin info" placement="bottom-start">
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
       </Tooltip>

        {coin.price_change_percentage_24h>0  ?
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
        <td className='chip-flex td-icon'>
           <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
           <div className='icon-chip'><TrendingUpIcon/></div>
        </td>
        </Tooltip>
        :
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
        <td className='chip-flex td-icon'>
        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
        <div className='icon-chip chip-red'><TrendingDownIcon/></div>
       </td>
       </Tooltip>
        }
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
        <td className='info-container'>
        <h1 className='coin-price td-center-align'
            style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}
        >
         ${coin.current_price.toLocaleString()}
        </h1>
        </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement="bottom-start">
        <td
        className='destop-td-market'><p className='total-vol td-right-align'>{convertNumber(coin.total_volume)}</p></td>
        </Tooltip>
        
        <Tooltip title="Market Cap" placement="bottom-start">
        

        <td className='mobile-td-market desktop-view-mark'><p className='total-vol td-right-align td-market-cap'>${coin.market_cap}</p></td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
        

        <td className='mobile-td-market mobile-view-mark'><p className='total-vol td-right-align td-market-cap'>${convertNumber(coin.market_cap)}</p></td>
        </Tooltip>
   </tr>
</Link>
  )
}

export default List