import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './style.css'
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
const  Grid = ({coin}) => {
 
  return (
   <Link  to={`/coin/${coin.id}`}>
   
   <div className={`grid-container ${coin.price_change_percentage_24h<0 && "grid-container-red"}`}>
     
     <div className='head-info'>
     <div className='info-flex'>
          <img src={coin.image} className='coin-logo' />
      </div>
      <div className='name-col'>
          <p className='coin-symbol'>
          {coin.symbol}
          </p>
          <p className='coin-name'>
          {coin.name}
          </p>
      </div>
     </div>

      {coin.price_change_percentage_24h>0  ?
      <div className='chip-flex'>
         <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
         <div className='icon-chip'><TrendingUpIcon/></div>
      </div>
      :
      <div className='chip-flex '>
      <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
      <div className='icon-chip chip-red'><TrendingDownIcon/></div>
     </div>
      }

      <div className='info-container'>
      <h1 className='coin-price'
          style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}
      >
       ${coin.current_price.toLocaleString()}
      </h1>
      </div>
      <p className='total-vol'>Total Volume :{coin.total_volume}</p>
      <p className='total-vol'>Market cap :{coin.market_cap}</p>
  </div>
   </Link>
  )
}

export default  Grid