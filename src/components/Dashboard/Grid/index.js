import React, { useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './style.css'
import { Link } from 'react-router-dom';
import addToWatchlist from '../../../functions/addToWatchlist';
import removeFromWatchlist from '../../../functions/removeFromWatchlist'
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const  Grid = ({coin}) => {
       // watchlist end
      const [isAdded, setIsAdded] = useState(false);

     // watchlist 
     const isWatchlist = localStorage.getItem("watchlist")
     ? localStorage.getItem("watchlist").includes(coin.id)
     : false;
  return (
   
   
   <div className={`grid-container ${coin.price_change_percentage_24h<0 && "grid-container-red"}`}>
     
     <div className='head-info'>
     <Link  to={`/coin/${coin.id}`}>
     <div className='info-flex'>
          <img src={coin.image} className='coin-logo' />
      </div>
      </Link>
      <Link  to={`/coin/${coin.id}`}>
      <div className='name-col'>
          <p className='coin-symbol'>
          {coin.symbol}
          </p>
          <p className='coin-name'>
          {coin.name}
          </p>
      </div>
      </Link>
     {/* whishlist */}
     {isWatchlist || isAdded ? (
           <Tooltip title=" remove from wishlist">

          <div
            className="bookmark-icon-div"
            onClick={() => {
                setIsAdded(false);
                removeFromWatchlist(coin.id);
            }}
            >
            <IconButton>
              <BookmarkRoundedIcon className="bookmark-icon" />
            </IconButton>
          </div>
              </Tooltip>
        ) : (
            <Tooltip title="add to wishlist">
          <div
            className="bookmark-icon-div"
            onClick={() => {
              setIsAdded(true);
              addToWatchlist(coin.id);
            }}
          >
            <IconButton>
              <BookmarkBorderRoundedIcon className="bookmark-icon" />
            </IconButton>
          </div>
          </Tooltip>
        )}
            {/* wishlist end */}
     </div>

      {coin.price_change_percentage_24h>0  ?
       
        <Link  to={`/coin/${coin.id}`}>
      <div className='chip-flex'>
         <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
         <div className='icon-chip'><TrendingUpIcon/></div>
      </div>
      </Link>
      :
      <Link  to={`/coin/${coin.id}`}>
      <div className='chip-flex '>
      <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
      <div className='icon-chip chip-red'><TrendingDownIcon/></div>
     </div>
     </Link>
      }
      <Link  to={`/coin/${coin.id}`}>
      <div className='info-container'>
      <h1 className='coin-price'
          style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}
      >
       ${coin.current_price.toLocaleString()}
      </h1>
      </div>
      </Link>
      <p className='total-vol'>Total Volume :{coin.total_volume}</p>
      <p className='total-vol'>Market cap :{coin.market_cap}</p>
  </div>
   
  )
}

export default  Grid