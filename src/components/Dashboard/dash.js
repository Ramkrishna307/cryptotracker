import React, { useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./grid.css";
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import IconButton from "@mui/material/IconButton";
import { addToWatchlist, removeFromWatchlist } from "../../../function/watchlist";
import Tooltip from "@mui/material/Tooltip";

function Grid({ coin, delay }) {
    // watchlist 
  const isWatchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").includes(coin.id)
    : false;
    // watchlist end
  const [isAdded, setIsAdded] = useState(false);

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.3, delay: delay }}
      className={`grid-box ${
        coin.price_change_percentage_24h < 0 && "grid-box-red"
      }`}
    >
      <div className="info-flex">
        {/* image */}
        <Link to={`/coin/${coin.id}`}>
        <Tooltip title="Logo">
          <img src={coin.image} className="coin-logo" />
          </Tooltip>
        </Link>

            {/* coin name and symbol */}
        <Link to={`/coin/${coin.id}`}>
          <div className="name-flex">
          <Tooltip title="Symbol">
            <p className="coin-symbol">{coin.symbol}</p>
            </Tooltip>
            <Tooltip title="Name">
            <p className="coin-name">{coin.name}</p>
            </Tooltip>
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
      </div>
      {/* wishlist end */}

      {/* coin percentage and graph */}
      <Link to={`/coin/${coin.id}`}>
        <div>
          {coin.price_change_percentage_24h > 0 ? (
            <Tooltip title="Percentage Change in 24 Hours">
            <div className="chip-flex">
              <div className="coin-chip">
                {coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingUpRoundedIcon className="icon" />
            </div>
              </Tooltip>
          ) : (
            <Tooltip title="Percentage Change in 24 Hours">
            <div className="chip-flex">
              <div className="coin-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2) + " %"}
              </div>
              <TrendingDownRoundedIcon className="icon chip-red" />
            </div>
            </Tooltip>
          )}
        </div>
      </Link>
{/* end */}


{/* current price */}
      <Link to={`/coin/${coin.id}`}>
      <Tooltip title="Price">
        <p
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          $ {coin.current_price.toLocaleString()}
        </p>
          </Tooltip>
      </Link>
      {/* end  */}

      {/* total volume and market cappital */}
      <div>
        <Link to={`/coin/${coin.id}`}>
        <Tooltip title="Total volume">
          <p className="volume-text">
            <strong>Total Volume :</strong> $
            {coin.total_volume.toLocaleString()}
          </p>
          </Tooltip>
          <Tooltip title="Market Capital">
          <p className="volume-text">
            <strong>Total Market Cap :</strong> $
            {coin.market_cap.toLocaleString()}
          </p>
            </Tooltip>
        </Link>
      </div>
    </motion.div>
  );
}

export default Grid;