import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css'

export default function TogglePriceButton({priceType,handlePriceTypeChange}) {



  return (
  <div className='toggle-price'>
      <ToggleButtonGroup
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

      color="primary"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="Platform"

    >
      <ToggleButton value="prices" className='toggle-btn'>Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Volume</ToggleButton>
    </ToggleButtonGroup>
  </div>
  );
}